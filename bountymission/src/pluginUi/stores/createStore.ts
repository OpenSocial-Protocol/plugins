import { computed, makeObservable, observable } from "mobx";

import { TINPUT_TYPE } from "@app/types";
import bigDecimal from "js-big-decimal";
import { isNumber } from "lodash";
import rcTool from "../utils/rcTool";

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

  // Confirm button
  @observable allowConfirm: boolean = false;
  // disable button
  @observable disableBtn: boolean = true;

  @observable amountMinValue: string = "--";

  private questRestrict: any;
  private minIssueTokensValue: string = "";
  private balance: string = "";
  constructor() {
    makeObservable(this);
  }
  setInitInfo(
    balance: string,
    minIssueTokensValue: string,
    questRestrict: any
  ) {
    this.questRestrict = questRestrict;
    this.minIssueTokensValue = minIssueTokensValue;
    this.balance = balance;
  }
  strTrue = (value: string) => {
    return rcTool.isTrue(value);
  };
  checkConfirm = () => {
    if (
      this.strTrue(this.handleStr) &&
      this.strTrue(this.rewardsStr) &&
      this.strTrue(this.amountStr)
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

  // 格式化 总奖金  和  每份奖金
  formatPositiveNumber = (value: string | number): string => {
    let _value = String(value);
    // 使用正则表达式来匹配允许的字符，纯整数；带有最多两位小数的浮点数；不能以0和小数点开头
    const regExp = /^(?!0\d)\d*(?:\.\d{0,2})?$/;
    if (_value.startsWith(".")) {
      _value = "";
    }
    return regExp.test(_value) ? _value : _value.slice(0, -1);
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
    if (parseFloat(currentValue) < +this.minIssueTokensValue) {
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
    const amount = Number(this.amountStr);
    const slot = Number(value);
    if (parseFloat(value) === 0) {
      return "Please check your input";
    } else if (
      !!amount &&
      !!slot &&
      new bigDecimal(amount / slot).compareTo(
        new bigDecimal(this.questRestrict?.minValueStr)
      ) < 0
    ) {
      return "Rewards are on the low side";
    }
    return undefined;
  };
  // 每份最小值
  getEveryAmountMin = () => {
    const amount = Number(this.rewardsStr);
    const slot = Number(this.amountStr);
    let res = "--";
    if (!!amount && !!slot) {
      const result = Math.trunc((amount / slot) * 1000) / 1000;
      if (
        new bigDecimal(result).compareTo(
          new bigDecimal(this.questRestrict?.minValueStr)
        ) < 0
      ) {
        res = this.questRestrict?.minValueStr || "0.001";
      } else {
        res = String(parseFloat(result.toFixed(3))); // 保留三位小数
      }
    }
    return res;
  };
  clearRewardsError = () => {
    this.rewardsError = false;
    this.rewardsStr = "";
  };
}

export const createStore = new CreateStore();
