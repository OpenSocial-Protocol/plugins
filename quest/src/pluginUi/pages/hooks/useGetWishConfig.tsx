import { OspStore, useStore } from "@app/pluginUi/stores";

import { QueryMap } from "@app/pluginUi/utils/queryMap";
import { ZeekClient } from "@keccak256-evg/zeek-client";
import { useQuery } from "@tanstack/react-query";

const useGetWishConfig = (symbol: string, zeekClient: ZeekClient) => {
  // const ospStore = useStore<OspStore>("ospStore");
  // const zeekClient = ospStore.zeekClient;
  const fetchFn = async () => {
    console.log("fetchFn", symbol);
    const res = await zeekClient?.wish.getWishToken(symbol);
    return res;
  };

  const data = useQuery({
    queryKey: [QueryMap.GET_WISH_CONFIG, symbol],
    queryFn: fetchFn,
    enabled: !!zeekClient,
    staleTime: Infinity,
  });

  return data;
};

export default useGetWishConfig;
