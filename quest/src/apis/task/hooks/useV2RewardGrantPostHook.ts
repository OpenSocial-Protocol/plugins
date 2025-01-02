import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { V2RewardGrantPostMutationResponse, V2RewardGrantPostQueryParams, V2RewardGrantPostHeaderParams } from "../models/V2RewardGrantPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type V2RewardGrantPostClient = typeof client<V2RewardGrantPostMutationResponse, Error, never>;
type V2RewardGrantPost = {
    data: V2RewardGrantPostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2RewardGrantPostQueryParams;
    headerParams: V2RewardGrantPostHeaderParams;
    response: V2RewardGrantPostMutationResponse;
    client: {
        parameters: Partial<Parameters<V2RewardGrantPostClient>[0]>;
        return: Awaited<ReturnType<V2RewardGrantPostClient>>;
    };
};
/**
 * @summary 发放积分
 * @link /v2/reward/grant
 */
export function useV2RewardGrantPostHook(params: V2RewardGrantPost["queryParams"], headers: V2RewardGrantPost["headerParams"], options: {
    mutation?: UseMutationOptions<V2RewardGrantPost["response"], V2RewardGrantPost["error"], V2RewardGrantPost["request"]>;
    client?: V2RewardGrantPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<V2RewardGrantPost["data"], V2RewardGrantPost["error"], V2RewardGrantPost["request"]>({
                method: "post",
                url: `/v2/reward/grant`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}