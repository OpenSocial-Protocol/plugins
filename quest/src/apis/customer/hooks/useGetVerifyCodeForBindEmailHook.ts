import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { GetVerifyCodeForBindEmailMutationResponse, GetVerifyCodeForBindEmailQueryParams, GetVerifyCodeForBindEmailHeaderParams } from "../models/GetVerifyCodeForBindEmail";
import type { UseMutationOptions } from "@tanstack/react-query";

 type GetVerifyCodeForBindEmailClient = typeof client<GetVerifyCodeForBindEmailMutationResponse, Error, never>;
type GetVerifyCodeForBindEmail = {
    data: GetVerifyCodeForBindEmailMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetVerifyCodeForBindEmailQueryParams;
    headerParams: GetVerifyCodeForBindEmailHeaderParams;
    response: GetVerifyCodeForBindEmailMutationResponse;
    client: {
        parameters: Partial<Parameters<GetVerifyCodeForBindEmailClient>[0]>;
        return: Awaited<ReturnType<GetVerifyCodeForBindEmailClient>>;
    };
};
/**
 * @description get verify code for bind email
 * @summary /customer/send/email/code
 * @link /v2/customer/send/email/code
 */
export function useGetVerifyCodeForBindEmailHook(params: GetVerifyCodeForBindEmail["queryParams"], headers: GetVerifyCodeForBindEmail["headerParams"], options: {
    mutation?: UseMutationOptions<GetVerifyCodeForBindEmail["response"], GetVerifyCodeForBindEmail["error"], GetVerifyCodeForBindEmail["request"]>;
    client?: GetVerifyCodeForBindEmail["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<GetVerifyCodeForBindEmail["data"], GetVerifyCodeForBindEmail["error"], GetVerifyCodeForBindEmail["request"]>({
                method: "post",
                url: `/v2/customer/send/email/code`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}