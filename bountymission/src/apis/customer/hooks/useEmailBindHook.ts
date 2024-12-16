import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { EmailBindMutationResponse, EmailBindQueryParams, EmailBindHeaderParams } from "../models/EmailBind";
import type { UseMutationOptions } from "@tanstack/react-query";

 type EmailBindClient = typeof client<EmailBindMutationResponse, Error, never>;
type EmailBind = {
    data: EmailBindMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EmailBindQueryParams;
    headerParams: EmailBindHeaderParams;
    response: EmailBindMutationResponse;
    client: {
        parameters: Partial<Parameters<EmailBindClient>[0]>;
        return: Awaited<ReturnType<EmailBindClient>>;
    };
};
/**
 * @summary 绑定/换绑邮箱
 * @link /v2/customer/bind/email
 */
export function useEmailBindHook(params: EmailBind["queryParams"], headers?: EmailBind["headerParams"], options: {
    mutation?: UseMutationOptions<EmailBind["response"], EmailBind["error"], EmailBind["request"]>;
    client?: EmailBind["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<EmailBind["data"], EmailBind["error"], EmailBind["request"]>({
                method: "post",
                url: `/v2/customer/bind/email`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}