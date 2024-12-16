import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { FriendOperateMutationRequest, FriendOperateMutationResponse, FriendOperatePathParams } from "../models/FriendOperate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type FriendOperateClient = typeof client<FriendOperateMutationResponse, Error, FriendOperateMutationRequest>;
type FriendOperate = {
    data: FriendOperateMutationResponse;
    error: Error;
    request: FriendOperateMutationRequest;
    pathParams: FriendOperatePathParams;
    queryParams: never;
    headerParams: never;
    response: FriendOperateMutationResponse;
    client: {
        parameters: Partial<Parameters<FriendOperateClient>[0]>;
        return: Awaited<ReturnType<FriendOperateClient>>;
    };
};
/**
 * @description 好友操作
 * @summary 好友操作
 * @link /v1/friend/apply/:operate
 * @deprecated
 */
export function useFriendOperateHook(operate: FriendOperatePathParams["operate"], options: {
    mutation?: UseMutationOptions<FriendOperate["response"], FriendOperate["error"], FriendOperate["request"]>;
    client?: FriendOperate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<FriendOperate["data"], FriendOperate["error"], FriendOperate["request"]>({
                method: "post",
                url: `/v1/friend/apply/${operate}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}