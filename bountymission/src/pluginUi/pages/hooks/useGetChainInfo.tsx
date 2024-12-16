import { ChainConfig, Currency } from "@keccak256-evg/zeek-client";

/**
 *  notice: cannot input symbol and address, canot pass both of them,should be one of them, symbol or address
 * @param symbol:  such as :eth, bera usdt usdc
 * @param address: token (usdt usdc) address, such as: 0x1234567890
 * @returns
 */
const useGetChainInfo = ({
  chainConfig,
  symbol,
  address,
}: {
  chainConfig: ChainConfig;
  symbol?: string;
  address?: string;
}): Currency | null => {
  // console.log("useGetChainInfo", chainConfig);
  if (!chainConfig) {
    return null;
  }
  if (symbol && address) {
    return null;
  }
  if (!chainConfig) {
    return null;
  }
  if (
    symbol?.toLocaleUpperCase() ===
    chainConfig?.nativeCurrency?.symbol?.toLocaleUpperCase()
  ) {
    return chainConfig?.nativeCurrency;
  }
  const tokenList = Object.values(chainConfig?.tokens || {});
  const token = tokenList.find(
    (item) =>
      item.symbol === symbol ||
      item.address?.toLocaleLowerCase() === address?.toLocaleLowerCase()
  );
  return token || null;
};

export default useGetChainInfo;
