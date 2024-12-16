import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { V2TasksVerifyPostMutationResponse, V2TasksVerifyPostQueryParams, V2TasksVerifyPostHeaderParams } from "../models/V2TasksVerifyPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type V2TasksVerifyPostClient = typeof client<V2TasksVerifyPostMutationResponse, Error, never>;
type V2TasksVerifyPost = {
    data: V2TasksVerifyPostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksVerifyPostQueryParams;
    headerParams: V2TasksVerifyPostHeaderParams;
    response: V2TasksVerifyPostMutationResponse;
    client: {
        parameters: Partial<Parameters<V2TasksVerifyPostClient>[0]>;
        return: Awaited<ReturnType<V2TasksVerifyPostClient>>;
    };
};
/**
 * @summary 做任务
 * @link /v2/tasks/verify
 */
export function useV2TasksVerifyPostHook(params: V2TasksVerifyPost["queryParams"], headers: V2TasksVerifyPost["headerParams"], options: {
    mutation?: UseMutationOptions<V2TasksVerifyPost["response"], V2TasksVerifyPost["error"], V2TasksVerifyPost["request"]>;
    client?: V2TasksVerifyPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<V2TasksVerifyPost["data"], V2TasksVerifyPost["error"], V2TasksVerifyPost["request"]>({
                method: "post",
                url: `/v2/tasks/verify`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}