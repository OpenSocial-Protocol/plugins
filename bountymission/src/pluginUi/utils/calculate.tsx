import { ChainConfig } from "@keccak256-evg/zeek-client";
import { RoundingModes } from "js-big-decimal/dist/node/roundingModes";
import bigDecimal from "js-big-decimal";
import { useCallback } from "react";

/**
 *  处理原始值，转换为指定小数位数的值
 * @param value
 * @param decimal
 * @param roundingMode
 * @param trailingZero
 * @param format
 * @returns
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

export function useFormatCrypto(config: ChainConfig) {
  const format = useCallback(
    (
      value: number | string,
      symbol: string,
      // 去0
      trailingZero: boolean = true,
      precisionValue?: number,
      roundingMode?: RoundingModes
    ) => {
      value = new bigDecimal(value).getValue();
      // 这里修改为从配置文件中获取精度
      const precision =
        config?.nativeCurrency.symbol === symbol?.toLocaleUpperCase()
          ? config.nativeCurrency.showDecimals
          : config?.tokens[symbol]?.showDecimals || 2;
      value = padZero(value, precisionValue || precision!!, roundingMode);
      value = trailingZero ? trimTrailingZeros(value) : value;
      // 这里是 千分位 格式化展示
      return new bigDecimal(value).getPrettyValue();
    },
    [config]
  );
  return format;
}

export const padZero = (
  truncatedValue: string,
  decimalPlaces: number,
  roundingModes?: RoundingModes
) => {
  const num = new bigDecimal(truncatedValue);
  const numRound1 = num.round(
    decimalPlaces,
    roundingModes || bigDecimal.RoundingModes.DOWN
  );
  return numRound1.getValue();
};

/**
 *  去掉尾部0
 * @param value
 * @returns
 */
export function trimTrailingZeros(value: string): string {
  return value.replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
}
