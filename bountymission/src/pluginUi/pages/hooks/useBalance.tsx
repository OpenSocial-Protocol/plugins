import { ChainConfig, ZeekClient } from "@keccak256-evg/zeek-client";
import { OspStore, useStore } from "@app/pluginUi/stores";

import { IBalance } from "@app/types/balance";
import { formatPow } from "@app/pluginUi/utils/calculate";
import { useCallback } from "react";
import useChainConfig from "./chainInfo";
import { useQuery } from "@tanstack/react-query";

export async function fetchBalance(
  address: string,
  symbol: string,
  client: ZeekClient
) {
  const config = client?.config as ChainConfig;
  if (
    symbol.toLocaleLowerCase() ===
    config.nativeCurrency.symbol.toLocaleLowerCase()
  ) {
    const balance = await client.account.getNativeBalance();
    const balanceStr = formatPow(
      balance?.toString(),
      config.nativeCurrency.decimals
    );
    return Promise.resolve({
      balance: balanceStr,
      contractAddress: "",
      name: config.nativeCurrency.name,
      symbol,
      decimals: config.nativeCurrency.decimals,
    });
  }
  if (config.tokens[symbol]) {
    const token = config.tokens[symbol];
    const balance = await client.account.getBalance(token.address);
    const balanceStr = formatPow(balance?.toString(), token?.decimals);
    return Promise.resolve({
      balance: balanceStr,
      contractAddress: token.address,
      name: token.name,
      symbol: token.symbol,
      decimals: token.decimals,
    });
  }
  return {};
}

function useBalance(address: string, zeekClient: ZeekClient, symbol?: string) {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["balance", address, symbol],
    queryFn: async () => {
      if (symbol && address) {
        const data = await fetchBalance(address, symbol, zeekClient!!);
        return data as IBalance;
      }
      return {} as {
        balance: string;
        contractAddress: string;
        name: string;
        symbol: string;
        decimals: number;
      };
    },
    enabled: !!address && !!symbol,
    staleTime: 60 * 1000, // 缓存过期时间设置为 1 分钟
  });

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    refreshing: isRefetching,
    onRefresh,
    isLoading,
  };
}

export default useBalance;
