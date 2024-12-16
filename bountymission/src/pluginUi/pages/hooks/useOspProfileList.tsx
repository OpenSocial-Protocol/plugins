import { OspClient } from "@open-social-protocol/osp-client";
import { useQuery } from "@tanstack/react-query";

/**
 * 批量查 osp profile
 * @param ospClient
 * @param handles
 * @returns
 */
export const useOspProfileList = (ospClient: OspClient, handles: string[]) => {
  const { data, ...rest } = useQuery({
    queryKey: ["ospProfiles", "list", handles],
    queryFn: async () => {
      const response = await ospClient?.profile.getProfiles({
        handles,
        limit: handles.length,
      });
      return response || { rows: [] }; // 确保返回一个非 undefined 的值
    },
    enabled: !!handles && handles.length > 0,
    select: (data) => {
      return data?.rows || [];
    },
  });
  return {
    data,
    ...rest,
  };
};
