import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { S2RewardReceivePostMutationResponse, S2RewardReceivePostQueryParams, S2RewardReceivePostHeaderParams } from "../models/S2RewardReceivePost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type S2RewardReceivePostClient = typeof client<S2RewardReceivePostMutationResponse, Error, never>;
type S2RewardReceivePost = {
    data: S2RewardReceivePostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: S2RewardReceivePostQueryParams;
    headerParams: S2RewardReceivePostHeaderParams;
    response: S2RewardReceivePostMutationResponse;
    client: {
        parameters: Partial<Parameters<S2RewardReceivePostClient>[0]>;
        return: Awaited<ReturnType<S2RewardReceivePostClient>>;
    };
};
/**
 * @summary 领取奖励
 * @link /s2/reward/receive
 */
export function useS2RewardReceivePostHook(params: S2RewardReceivePost["queryParams"], headers: S2RewardReceivePost["headerParams"], options: {
    mutation?: UseMutationOptions<S2RewardReceivePost["response"], S2RewardReceivePost["error"], S2RewardReceivePost["request"]>;
    client?: S2RewardReceivePost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<S2RewardReceivePost["data"], S2RewardReceivePost["error"], S2RewardReceivePost["request"]>({
                method: "post",
                url: `/s2/reward/receive`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}