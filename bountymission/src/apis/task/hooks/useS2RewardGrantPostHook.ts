import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { S2RewardGrantPostMutationResponse, S2RewardGrantPostQueryParams, S2RewardGrantPostHeaderParams } from "../models/S2RewardGrantPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type S2RewardGrantPostClient = typeof client<S2RewardGrantPostMutationResponse, Error, never>;
type S2RewardGrantPost = {
    data: S2RewardGrantPostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: S2RewardGrantPostQueryParams;
    headerParams: S2RewardGrantPostHeaderParams;
    response: S2RewardGrantPostMutationResponse;
    client: {
        parameters: Partial<Parameters<S2RewardGrantPostClient>[0]>;
        return: Awaited<ReturnType<S2RewardGrantPostClient>>;
    };
};
/**
 * @summary 发放积分
 * @link /s2/reward/grant
 */
export function useS2RewardGrantPostHook(params: S2RewardGrantPost["queryParams"], headers: S2RewardGrantPost["headerParams"], options: {
    mutation?: UseMutationOptions<S2RewardGrantPost["response"], S2RewardGrantPost["error"], S2RewardGrantPost["request"]>;
    client?: S2RewardGrantPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<S2RewardGrantPost["data"], S2RewardGrantPost["error"], S2RewardGrantPost["request"]>({
                method: "post",
                url: `/s2/reward/grant`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}