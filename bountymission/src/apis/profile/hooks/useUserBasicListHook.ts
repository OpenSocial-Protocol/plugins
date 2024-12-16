import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UserBasicListMutationRequest, UserBasicListMutationResponse } from "../models/UserBasicList";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UserBasicListClient = typeof client<UserBasicListMutationResponse, Error, UserBasicListMutationRequest>;
type UserBasicList = {
    data: UserBasicListMutationResponse;
    error: Error;
    request: UserBasicListMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserBasicListMutationResponse;
    client: {
        parameters: Partial<Parameters<UserBasicListClient>[0]>;
        return: Awaited<ReturnType<UserBasicListClient>>;
    };
};
/**
 * @description 用户基础信息批量查询
 * @summary 用户基础信息批量查询
 * @link /v1/user/basic/list
 * @deprecated
 */
export function useUserBasicListHook(options: {
    mutation?: UseMutationOptions<UserBasicList["response"], UserBasicList["error"], UserBasicList["request"]>;
    client?: UserBasicList["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UserBasicList["data"], UserBasicList["error"], UserBasicList["request"]>({
                method: "post",
                url: `/v1/user/basic/list`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}