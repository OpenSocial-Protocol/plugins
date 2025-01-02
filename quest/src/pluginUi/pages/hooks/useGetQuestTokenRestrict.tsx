import { QueryMap } from "@app/pluginUi/utils/queryMap";
import { ZeekClient } from "@keccak256-evg/zeek-client";
import { useQuery } from "@tanstack/react-query";

export const useGetQuestTokenRestrict = (
  symbol: string,
  zeekClient: ZeekClient
) => {
  const fetchFn = async () => {
    const res = await zeekClient?.quest.getQuestTokenRestrict(symbol);
    return res;
  };

  const data = useQuery({
    queryKey: [QueryMap.GET_QUEST_TOKEN_RESTRICT, symbol],
    queryFn: fetchFn,
    enabled: !!zeekClient,
    staleTime: Infinity,
  });

  return data;
};
