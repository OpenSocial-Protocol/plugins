import { TQuestEnum, TQuestRoleEnum } from "./types";
import { action, computed, makeObservable, observable } from "mobx";

import { QuestRowStatus } from "../utils/parse/commonUtils";
import { QuestVo } from "@app/apis/feed";
import dayjs from "dayjs";

export class DetailStore {
  // @observable detailType: TQuestType = TQuestEnum.Initial;
  @observable data: QuestVo | null = null;

  @observable isH5: boolean = false;

  @observable loading: boolean = true;

  @observable refundLoading: boolean = false;

  @observable isLogin: boolean = false;

  private timeoutres: number | NodeJS.Timeout;

  @observable OptimisticEnd: boolean = false;

  @observable OptimisticVerified: boolean = false;
  constructor() {
    makeObservable(this);
  }

  setInitInfo(width: number, detail?: QuestVo) {
    if (!detail) {
      return;
    }
    this.isH5 = width < 768;
    this.data = detail;
    this.OptimisticEnd = false;
    this.OptimisticVerified = false;
  }
  setInitLogin(islogin: boolean) {
    this.isLogin = islogin;
    this.OptimisticEnd = false;
    this.OptimisticVerified = false;
  }

  /**
   *  任务是否 “到期”  根据  deadline 判断
   * refund 之后 status 为 closed
   * action:
   *  1、owner 视角: end 标识 为 refund 之后，status = closed
   *  2、用户视角: 过期时间到了，或者 status = closed
   *
   */
  @computed get expired() {
    if (!this.data?.deadline) {
      return false;
    }
    const timeNow = dayjs.utc();
    const timeLastCheck = dayjs.utc(this.data?.deadline);
    const timeDiffSeconds = timeLastCheck.diff(timeNow, "second");
    const res = timeDiffSeconds <= 0;
    console.log("expired-->", res);
    return res;
  }
  /**
   * 用户视角:
   * 是否展示 go and verify
   */
  @computed get showGoVerify() {
    const goVerify =
      this.data?.role === TQuestRoleEnum.Audience &&
      this.data?.status === TQuestEnum.Active &&
      !this.OptimisticVerified;
    return goVerify;
  }
  /**
   * owner 视角:
   * 是否展示 refund
   */
  @computed get showRefund() {
    const refund =
      this.data?.role === TQuestRoleEnum.OWNER &&
      this.data?.status === TQuestEnum.Active &&
      this.expired;
    return refund;
  }
  /**
  |--------------------------------------------------
  | 是否已经结束了任务
  | 用户视角：过期了任务就结束了 或者 任务状态为 closed 或者 finished
  | OWNER视角：任务状态为 closed 并且 过期了任务
  |--------------------------------------------------
  */
  @computed get isEnded() {
    const ended =
      this.OptimisticEnd ||
      (this.data?.role === TQuestRoleEnum.OWNER
        ? this.data?.status === TQuestEnum.Closed && this.expired
        : this.expired ||
          this.data?.status === TQuestEnum.Closed ||
          this.data?.status === TQuestEnum.Finished);

    console.log("object is ended", this.data?.role);
    return ended;
  }

  /**
  |--------------------------------------------------
  | 用户视角: 是否已经完成了任务
  |--------------------------------------------------
  */
  @computed get isVerified() {
    return (
      this.OptimisticVerified ||
      this.data?.role === QuestRowStatus.PARTICIPANT_CLAIMED ||
      this.data?.role === QuestRowStatus.PARTICIPANT_UNCLAIM
    );
  }

  @computed get buttonType():
    | "install"
    | "end"
    | "refund"
    | "hide"
    | "verified" {
    if (!this.isLogin) {
      return "install";
    }
    if (this.isEnded) {
      return "end";
    } else if (this.showGoVerify) {
      return "install";
    } else if (this.showRefund) {
      return "refund";
    } else if (this.isVerified) {
      return "verified";
    } else {
      return "hide";
    }
  }

  // /**
  //  * 设置 detailType
  //  * @param type
  //  */
  // setDetailType(type: TQuestType) {
  //   this.detailType = type;
  // }
  setRefundLoading(flag: boolean) {
    this.refundLoading = flag;
  }
  clear() {
    clearTimeout(this.timeoutres);
  }

  @action setOptimisticEnd(isEnded: boolean) {
    this.OptimisticEnd = isEnded;
  }

  @action setOptimisticVerified(isVerified: boolean) {
    this.OptimisticVerified = isVerified;
  }
}

export const detailStore = new DetailStore();
