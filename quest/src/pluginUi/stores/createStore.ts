import { computed, makeObservable, observable } from "mobx";

import { TINPUT_TYPE } from "@app/types";
import bigDecimal from "js-big-decimal";
import { isNumber } from "lodash";
import rcTool from "../utils/rcTool";
import { trimTrailingZeros } from "../utils/calculate";

export class CreateStore {
  @observable isLogin: boolean = false;
  // focus
  @observable handleFocus: boolean = false;
  @observable rewardsFocus: boolean = false;
  @observable amountFocus: boolean = false;

  // error
  @observable handleError: boolean = false;
  @observable rewardsError: boolean = false;
  @observable rewardsErrorValue: string | undefined = "";
  @observable amountError: boolean = false;
  @observable amountErrorValue: string | undefined = "";

  // input value
  @observable handleStr: string = "";
  @observable rewardsStr: string = "";
  @observable amountStr: string = "";
  @observable token: string = "";
  @observable perReward: string = "--";

  // Confirm button
  @observable allowConfirm: boolean = false;
  // disable button
  @observable disableBtn: boolean = true;

  @observable amountMinValue: string = "--";

  private questRestrict: any;
  private minIssueTokensValue: string = "";
  private balance: string = "";
  // 初始值设置为8，安全一点
  private showDecimal: number = 8;
  constructor() {
    makeObservable(this);
  }
  setInitInfo(
    balance: string,
    minIssueTokensValue: string,
    questRestrict: any,
    showDecimal: number
  ) {
    this.questRestrict = questRestrict;
    this.minIssueTokensValue = minIssueTokensValue;
    this.balance = balance;
    this.showDecimal = showDecimal;
    console.log("setInitInfo-->", this.questRestrict, this.minIssueTokensValue);
  }
  strTrue = (value: string) => {
    return rcTool.isTrue(value);
  };
  checkConfirm = () => {
    if (
      this.strTrue(this.handleStr) &&
      this.strTrue(this.rewardsStr) &&
      this.strTrue(this.amountStr) &&
      !this.handleError &&
      !this.rewardsError &&
      !this.amountError
    ) {
      this.disableBtn = false;
    } else {
      this.disableBtn = true;
    }
  };
  onTheFocus = (type: TINPUT_TYPE) => {
    if (type === "HANDLE") {
      this.handleFocus = !this.handleFocus;
    } else if (type === "REWARDS") {
      this.rewardsFocus = !this.rewardsFocus;
    } else if (type === "AMOUNT") {
      this.amountFocus = !this.amountFocus;
    }
  };
  onChange = (type: TINPUT_TYPE, value: string) => {
    console.log("onChange-->", type, value);
    if (type === "HANDLE") {
      this.handleStr = value;
      this.checkFormatXhandle(value);
    } else if (type === "REWARDS") {
      this.rewardsStr = value;
      const res = this.checkRewardsMinValue(value);
      this.rewardsError = res ? true : false;
      this.rewardsErrorValue = res ? res : "";
    } else if (type === "AMOUNT") {
      this.amountStr = value;
      const res = this.checkEveryAmount(value);
      this.amountError = res ? true : false;
      this.amountErrorValue = res ? res : "";
    }
    if (this.rewardsStr && this.amountStr) {
      const minvalue = this.getEveryAmountMin();
      this.amountMinValue = minvalue;
    } else {
      this.amountMinValue = "--";
    }
    this.perReward = this.checkPerReward();
    this.checkConfirm();
  };

  onSetToken(value: string) {
    this.token = value;
  }
  onConfirm = () => {
    return {
      handle: this.handleStr,
      rewards: this.rewardsStr,
      amount: this.amountStr,
      token: this.token,
    };
  };

  // 校验输入的 x handle 是否合法
  formatXhandle = (value: string) => {
    // 使用正则表达式来匹配允许的字符，包括字母（大小写不敏感）、数字、下划线和不连续的连接符（-）
    const pattern = /^[a-zA-Z0-9_-]+$/;
    return pattern.test(value);
  };
  checkFormatXhandle = (value: string) => {
    const va = this.formatXhandle(value);
    this.handleError = !va;
  };

  // 最小值校验
  checkRewardsMinValue = (currentValue: string) => {
    if (rcTool.isFalse(currentValue)) {
      return undefined;
    }
    if (!rcTool.isNumberType(Number(currentValue))) {
      return "Please enter the number";
    }
    if (parseFloat(currentValue) < parseFloat(this.minIssueTokensValue)) {
      return `Min ${this.minIssueTokensValue}`;
    }
    const balance = this.balance;
    if (!balance || parseFloat(currentValue) > parseFloat(balance)) {
      return "Insufficient balance";
    }
    return undefined;
  };
  // 每份分配
  checkEveryAmount = (value: string) => {
    if (rcTool.isFalse(value)) {
      return undefined;
    }
    if (!rcTool.isNumberType(Number(value))) {
      return "Please enter the number";
    }
    console.log("checkEveryAmount-->", parseFloat(value) === 0);
    const amount = Number(this.rewardsStr);
    const slot = Number(value);
    if (parseFloat(value) === 0 || parseFloat(this.rewardsStr) === 0) {
      return "Please check your input";
    } else if (
      !!amount &&
      !!slot &&
      new bigDecimal(amount / slot).compareTo(
        new bigDecimal(this.questRestrict?.minValueStr)
      ) < 0
    ) {
      return `Min ${this.questRestrict?.minValueStr}`;
    }
    return undefined;
  };
  // 每份最小值
  getEveryAmountMin = () => {
    return this.questRestrict?.minValueStr;
  };
  checkPerReward = () => {
    const amount = new bigDecimal(this.rewardsStr);
    const slot = new bigDecimal(this.amountStr);
    console.log("result-->111", amount, slot);
    let res = "--";
    /**
    |--------------------------------------------------
    | Deek: 原有逻辑是保留3位小数,如果是 eth 的话，保留3位小数就精度缺失了
    | 所以, 这里需要用 showDecimal 做数值处理
    |--------------------------------------------------
    */
    if (
      slot.compareTo(new bigDecimal(0)) === 0 ||
      amount.compareTo(new bigDecimal(0)) === 0
    ) {
      return res;
    }
    if (!!amount && !!slot) {
      // const result = Math.trunc((amount / slot) * 1000) / 1000;

      const result = amount.divide(slot, this.showDecimal);
      console.log("result-->222", result);
      if (
        result.compareTo(new bigDecimal(this.questRestrict?.minValueStr)) < 0
      ) {
        res = this.questRestrict?.minValueStr || "0.001";
        this.amountError = true;
        this.amountErrorValue = `Min ${this.questRestrict?.minValueStr}`;
      } else {
        this.amountError = false;
        res = trimTrailingZeros(
          result
            .round(this.showDecimal, bigDecimal.RoundingModes.DOWN)
            .getValue()
        );
        // String(parseFloat(result.toFixed(3)));
      }
    }
    console.log("result-->333", res);
    return res;
  };

  clearRewardsError = () => {
    this.rewardsError = false;
    this.rewardsStr = "";
    this.amountError = false;
    this.perReward = "--";
  };
}

export const createStore = new CreateStore();
