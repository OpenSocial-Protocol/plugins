import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { CodeUseCdkInviteMutationRequest, CodeUseCdkInviteMutationResponse } from "../models/CodeUseCdkInvite";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CodeUseCdkInviteClient = typeof client<CodeUseCdkInviteMutationResponse, Error, CodeUseCdkInviteMutationRequest>;
type CodeUseCdkInvite = {
    data: CodeUseCdkInviteMutationResponse;
    error: Error;
    request: CodeUseCdkInviteMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CodeUseCdkInviteMutationResponse;
    client: {
        parameters: Partial<Parameters<CodeUseCdkInviteClient>[0]>;
        return: Awaited<ReturnType<CodeUseCdkInviteClient>>;
    };
};
/**
 * @description 查询code列表
 * @summary 使用cdkInvite
 * @link /v1/code/use/cdkInvite
 * @deprecated
 */
export function useCodeUseCdkInviteHook(options: {
    mutation?: UseMutationOptions<CodeUseCdkInvite["response"], CodeUseCdkInvite["error"], CodeUseCdkInvite["request"]>;
    client?: CodeUseCdkInvite["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CodeUseCdkInvite["data"], CodeUseCdkInvite["error"], CodeUseCdkInvite["request"]>({
                method: "post",
                url: `/v1/code/use/cdkInvite`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}