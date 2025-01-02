import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { V2RewardReceivePostMutationResponse, V2RewardReceivePostQueryParams, V2RewardReceivePostHeaderParams } from "../models/V2RewardReceivePost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type V2RewardReceivePostClient = typeof client<V2RewardReceivePostMutationResponse, Error, never>;
type V2RewardReceivePost = {
    data: V2RewardReceivePostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2RewardReceivePostQueryParams;
    headerParams: V2RewardReceivePostHeaderParams;
    response: V2RewardReceivePostMutationResponse;
    client: {
        parameters: Partial<Parameters<V2RewardReceivePostClient>[0]>;
        return: Awaited<ReturnType<V2RewardReceivePostClient>>;
    };
};
/**
 * @summary 领取奖励
 * @link /v2/reward/receive
 */
export function useV2RewardReceivePostHook(params: V2RewardReceivePost["queryParams"], headers: V2RewardReceivePost["headerParams"], options: {
    mutation?: UseMutationOptions<V2RewardReceivePost["response"], V2RewardReceivePost["error"], V2RewardReceivePost["request"]>;
    client?: V2RewardReceivePost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<V2RewardReceivePost["data"], V2RewardReceivePost["error"], V2RewardReceivePost["request"]>({
                method: "post",
                url: `/v2/reward/receive`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}