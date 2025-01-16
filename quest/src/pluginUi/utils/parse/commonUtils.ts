import { ConfigManager } from "@app/config/configManager";
import { RoundingModes } from "js-big-decimal/dist/node/roundingModes";
import bigDecimal from "js-big-decimal";

export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function validURL(str: string): boolean {
  var pattern = new RegExp(
    "^(https?:\\/\\/)" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

export const openURL = async ({
  scheme,
  url,
}: {
  scheme: string;
  url: string;
}) => {
  if (isSafari) {
    // https://stackoverflow.com/questions/20696041/window-openurl-blank-not-working-on-imac-safari
    // Safari 正在阻止任何在异步调用中对 window.open() 进行的调用
    setTimeout(() => {
      window.open(scheme, "_blank");
    });
    return;
  }
  window.open(scheme, "_blank");
  return;
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent
);

export const getStartTime = () => {
  return Math.floor(Date.now() / 1000);
};

/**
 * 获取未来某个时间点
 * @param deadLine 距今多少天 默认30天
 */
export const getDeadLineTime = (deadLine: number = 30) => {
  const currentDate = new Date();
  let millisecondsInADay = 0;
  const isProd = ConfigManager.getInstance().env === "prod";
  if (isProd) {
    millisecondsInADay = 24 * 60 * 60 * 1000;
  } else {
    millisecondsInADay = (60 * 1000) / 3;
  }
  console.log("millisecondsInADay", millisecondsInADay);
  const futureDate = new Date(
    currentDate.getTime() + deadLine * millisecondsInADay
  );
  return Math.floor(futureDate.getTime() / 1000);
};

export function amountBigDecimal(amount: number | string, decimal: number) {
  const amountBigDecimal = new bigDecimal(amount);
  const multiplier = new bigDecimal(Math.pow(10, decimal).toString());
  const result = amountBigDecimal.multiply(multiplier);
  return result.getValue();
}

/**
 * 格式化给定的数值，将其除以10的指定次幂，并根据要求进行四舍五入和格式化处理
 *
 * @param value 输入的数值，可以是数字或字符串形式
 * @param decimal 指定幂次，默认为2，即除以100
 * @param roundingMode 可选的四舍五入模式，默认为HALF_UP（四舍五入）
 * @param trailingZero 是否保留末尾的零，默认为true，保留零
 * @param format 是否以格式化的方式返回结果，默认为true
 * @returns 格式化后的字符串或原始计算结果，如果输入不合法则返回'--'
 */
export const formatPow = (
  value: number | string,
  decimal: number = 2,
  roundingMode?: RoundingModes.HALF_UP,
  trailingZero: boolean = true,
  format: boolean = false
) => {
  try {
    if (isNaN(Number(value))) {
      return "--";
    }
    const data = new bigDecimal(value)
      .divide(new bigDecimal(Math.pow(10, decimal).toString()), roundingMode)
      .getValue();
    const reDeatl = trailingZero ? trimTrailingZeros(data) : data;
    return format ? new bigDecimal(reDeatl).getPrettyValue() : reDeatl;
  } catch (error) {
    return "--";
  }
};

/**
 *  去掉尾部0
 * @param value
 * @returns
 */
export function trimTrailingZeros(value: string): string {
  return value.replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
}

export const formatKMBNumber = (
  num: number | string,
  decimal: number = 2,
  roundingMode?: RoundingModes
) => {
  const number = Number(num);
  const mode = roundingMode || bigDecimal.RoundingModes.DOWN;
  if (number >= 1000000000) {
    const formattedNumber = number / 1000000000;
    return `${new bigDecimal(formattedNumber)
      .round(decimal, mode)
      .getValue()}B`;
  } else if (number >= 1000000) {
    const formattedNumber = number / 1000000;
    return `${new bigDecimal(formattedNumber)
      .round(decimal, mode)
      .getValue()}M`;
  } else if (number >= 1000) {
    const formattedNumber = number / 1000;
    return `${new bigDecimal(formattedNumber)
      .round(decimal, mode)
      .getValue()}K`;
  } else {
    return number.toString();
  }
};

export const formatNumberPrecision = (
  value: number | string,
  decimal: number = 2,
  roundingMode?: RoundingModes,
  trailingZero: boolean = true,
  format: boolean = false
) => {
  try {
    if (isNaN(Number(value))) {
      return "--";
    }
    const data = new bigDecimal(value).round(decimal, roundingMode).getValue();
    const reDeatl = trailingZero ? trimTrailingZeros(data) : data;
    return format ? new bigDecimal(reDeatl).getPrettyValue() : reDeatl;
  } catch (error) {
    return "--";
  }
};

export const QuestRowStatus = {
  Audience: "", // 路人视角
  OWNER: "OWNER", // 发布者
  PARTICIPANT_CLAIMED: "PARTICIPANT_CLAIMED", // 已参与已领奖
  PARTICIPANT_UNCLAIM: "PARTICIPANT_UNCLAIM", // 已参与未领奖
};

export const QuestStatus = {
  Initial: "Initial", // 没有链上信息
  Pending: "Pending", // 链上信息不完整
  Active: "Active",
  Finished: "Finished", // 结束
  Closed: "Closed", // 关闭
};

export function dp2px(n: number): string {
  return `${n / 3.93}vw`;
}
