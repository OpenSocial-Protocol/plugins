import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { GetCodeMutationResponse, GetCodeQueryParams } from "../models/GetCode";
import type { UseMutationOptions } from "@tanstack/react-query";

 type GetCodeClient = typeof client<GetCodeMutationResponse, Error, never>;
type GetCode = {
    data: GetCodeMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetCodeQueryParams;
    headerParams: never;
    response: GetCodeMutationResponse;
    client: {
        parameters: Partial<Parameters<GetCodeClient>[0]>;
        return: Awaited<ReturnType<GetCodeClient>>;
    };
};
/**
 * @description 发送邮箱验证码
 * @summary 发送邮箱验证码
 * @link /v1/customer/send/email/code
 */
export function useGetCodeHook(params: GetCode["queryParams"], options: {
    mutation?: UseMutationOptions<GetCode["response"], GetCode["error"], GetCode["request"]>;
    client?: GetCode["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<GetCode["data"], GetCode["error"], GetCode["request"]>({
                method: "post",
                url: `/v1/customer/send/email/code`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}