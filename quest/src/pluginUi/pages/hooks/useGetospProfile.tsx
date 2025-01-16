import { OspClient } from "@open-social-protocol/osp-client";
import { useQuery } from "@tanstack/react-query";

export const useOspProfile = (ospClient: OspClient) => {
  const { data, ...rest } = useQuery({
    queryKey: ["ospProfile", "profile"],
    queryFn: async () => {
      try {
        const response = await ospClient?.profile.get();
        console.log("get my own osp profile: ", response);
        return response || {}; // 确保返回一个非 undefined 的值
      } catch (err) {
        console.error("useOspProfile error:", err);
        return {};
      }
    },
    enabled: !!ospClient,
  });
  return {
    data,
    ...rest,
  };
};
