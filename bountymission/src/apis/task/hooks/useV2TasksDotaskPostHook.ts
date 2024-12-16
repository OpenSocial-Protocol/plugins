import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { V2TasksDotaskPostMutationResponse, V2TasksDotaskPostQueryParams } from "../models/V2TasksDotaskPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type V2TasksDotaskPostClient = typeof client<V2TasksDotaskPostMutationResponse, Error, never>;
type V2TasksDotaskPost = {
    data: V2TasksDotaskPostMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksDotaskPostQueryParams;
    headerParams: never;
    response: V2TasksDotaskPostMutationResponse;
    client: {
        parameters: Partial<Parameters<V2TasksDotaskPostClient>[0]>;
        return: Awaited<ReturnType<V2TasksDotaskPostClient>>;
    };
};
/**
 * @summary 做任务
 * @link /v2/tasks/dotask
 */
export function useV2TasksDotaskPostHook(params: V2TasksDotaskPost["queryParams"], options: {
    mutation?: UseMutationOptions<V2TasksDotaskPost["response"], V2TasksDotaskPost["error"], V2TasksDotaskPost["request"]>;
    client?: V2TasksDotaskPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<V2TasksDotaskPost["data"], V2TasksDotaskPost["error"], V2TasksDotaskPost["request"]>({
                method: "post",
                url: `/v2/tasks/dotask`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}