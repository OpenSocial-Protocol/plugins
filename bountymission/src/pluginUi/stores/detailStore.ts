import { TQuestEnum, TQuestRoleEnmu } from "./types";
import { computed, makeObservable, observable } from "mobx";
import { QuestVo } from "@app/apis/feed";
import dayjs from "dayjs";

export class DetailStore {
  // @observable detailType: TQuestType = TQuestEnum.Initial;
  @observable data: QuestVo | null = null;

  @observable isH5: boolean = false;

  @observable loading: boolean = true;

  @observable refundLoading: boolean = false;

  private timeoutres: number | NodeJS.Timeout;
  constructor() {
    makeObservable(this);
  }

  setInitInfo(width: number, detail?: QuestVo) {
    if (!detail) {
      return;
    }
    this.isH5 = width < 768;
    this.data = detail;
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
    const timeNow = dayjs.utc();
    const timeLastCheck = dayjs.utc(this.data?.deadline);
    const timeDiffSeconds = timeLastCheck.diff(timeNow, "second");
    const res = timeDiffSeconds <= 0;
    return res;
  }
  /**
   * 用户视角:
   * 是否展示 go and verify
   */
  @computed get showGoVerify() {
    const goVerify =
      this.data?.role === TQuestRoleEnmu.Audience &&
      this.data?.status === TQuestEnum.Active;
    return goVerify;
  }
  /**
   * owner 视角:
   * 是否展示 refund
   */
  @computed get showRefund() {
    const refund =
      this.data?.role === TQuestRoleEnmu.OWNER &&
      this.data?.status === TQuestEnum.Active &&
      this.expired;

    return refund;
  }
  /**
   * 任务是否结束
   */
  @computed get isEnded() {
    const ended =
      this.data?.role === TQuestRoleEnmu.Audience
        ? this.expired && this.data?.status === TQuestEnum.Active
        : this.data?.role === TQuestRoleEnmu.OWNER
        ? this.expired && this.data?.status === TQuestEnum.Closed
        : false;
    return ended;
  }
  @computed get buttonType(): "install" | "end" | "refund" | "hide" {
    if (this.isEnded) {
      return "end";
    } else if (this.showGoVerify) {
      return "install";
    } else if (this.showRefund) {
      return "refund";
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
}

export const detailStore = new DetailStore();
