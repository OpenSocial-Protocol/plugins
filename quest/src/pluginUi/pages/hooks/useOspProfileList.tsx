import { OspClient } from "@open-social-protocol/osp-client";
import { useQuery } from "@tanstack/react-query";

/**
 * 批量查 osp profile
 * @param ospClient
 * @param ids
 * @returns
 */
export const useOspProfileList = (ospClient: OspClient, ids: string[]) => {
  const hexArray = ids?.slice(0, 3).map((str) => {
    if (str.startsWith("0x")) {
      return str;
    }
    const decimalValue = parseInt(str, 10);
    const hexValue = "0x" + decimalValue.toString(16);
    return hexValue;
  });
  console.log("hexArray", hexArray);
  const { data, ...rest } = useQuery({
    queryKey: ["ospProfiles", "list", ids],
    queryFn: async () => {
      try {
        const response = await ospClient?.profile.getProfiles({
          ids: hexArray,
          limit: ids.length,
        });
        console.log("profile list--->", response, ids);
        return response || { rows: [] }; // 确保返回一个非 undefined 的值
      } catch (err) {
        console.error("useOspProfileList error:", err);
        return { rows: [] };
      }
    },
    enabled: !!hexArray && hexArray.length > 0 && !!ospClient,
    select: (data) => {
      return data?.rows || [];
    },
  });
  return {
    data,
    ...rest,
  };
};
