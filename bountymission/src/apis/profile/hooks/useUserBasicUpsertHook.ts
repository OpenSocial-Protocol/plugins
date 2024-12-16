import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UserBasicUpsertMutationRequest, UserBasicUpsertMutationResponse } from "../models/UserBasicUpsert";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UserBasicUpsertClient = typeof client<UserBasicUpsertMutationResponse, Error, UserBasicUpsertMutationRequest>;
type UserBasicUpsert = {
    data: UserBasicUpsertMutationResponse;
    error: Error;
    request: UserBasicUpsertMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserBasicUpsertMutationResponse;
    client: {
        parameters: Partial<Parameters<UserBasicUpsertClient>[0]>;
        return: Awaited<ReturnType<UserBasicUpsertClient>>;
    };
};
/**
 * @description 用户基础信息创建&更新
 * @summary 用户基础信息创建&更新
 * @link /v1/user/basic/upsert
 * @deprecated
 */
export function useUserBasicUpsertHook(options: {
    mutation?: UseMutationOptions<UserBasicUpsert["response"], UserBasicUpsert["error"], UserBasicUpsert["request"]>;
    client?: UserBasicUpsert["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UserBasicUpsert["data"], UserBasicUpsert["error"], UserBasicUpsert["request"]>({
                method: "post",
                url: `/v1/user/basic/upsert`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}