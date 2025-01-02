import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UserStoryUpsertMutationRequest, UserStoryUpsertMutationResponse } from "../models/UserStoryUpsert";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UserStoryUpsertClient = typeof client<UserStoryUpsertMutationResponse, Error, UserStoryUpsertMutationRequest>;
type UserStoryUpsert = {
    data: UserStoryUpsertMutationResponse;
    error: Error;
    request: UserStoryUpsertMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserStoryUpsertMutationResponse;
    client: {
        parameters: Partial<Parameters<UserStoryUpsertClient>[0]>;
        return: Awaited<ReturnType<UserStoryUpsertClient>>;
    };
};
/**
 * @description 用户story创建&更新
 * @summary 用户story创建&更新
 * @link /v1/user/story/upsert
 * @deprecated
 */
export function useUserStoryUpsertHook(options: {
    mutation?: UseMutationOptions<UserStoryUpsert["response"], UserStoryUpsert["error"], UserStoryUpsert["request"]>;
    client?: UserStoryUpsert["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UserStoryUpsert["data"], UserStoryUpsert["error"], UserStoryUpsert["request"]>({
                method: "post",
                url: `/v1/user/story/upsert`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}