import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { V2TasksDoquestsPostMutationResponse, V2TasksDoquestsPostQueryParams, V2TasksDoquestsPostHeaderParams } from "../models/V2TasksDoquestsPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type V2TasksDoquestsPostClient = typeof client<V2TasksDoquestsPostMutationResponse, Error, never>;
type V2TasksDoquestsPost = {
    data: V2TasksDoquestsPostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksDoquestsPostQueryParams;
    headerParams: V2TasksDoquestsPostHeaderParams;
    response: V2TasksDoquestsPostMutationResponse;
    client: {
        parameters: Partial<Parameters<V2TasksDoquestsPostClient>[0]>;
        return: Awaited<ReturnType<V2TasksDoquestsPostClient>>;
    };
};
/**
 * @summary 做任务
 * @link /v2/tasks/doquests
 */
export function useV2TasksDoquestsPostHook(params: V2TasksDoquestsPost["queryParams"], headers: V2TasksDoquestsPost["headerParams"], options: {
    mutation?: UseMutationOptions<V2TasksDoquestsPost["response"], V2TasksDoquestsPost["error"], V2TasksDoquestsPost["request"]>;
    client?: V2TasksDoquestsPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<V2TasksDoquestsPost["data"], V2TasksDoquestsPost["error"], V2TasksDoquestsPost["request"]>({
                method: "post",
                url: `/v2/tasks/doquests`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}