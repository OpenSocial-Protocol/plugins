import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { LoginMutationRequest, LoginMutationResponse, LoginHeaderParams } from "../models/Login";
import type { UseMutationOptions } from "@tanstack/react-query";

 type LoginClient = typeof client<LoginMutationResponse, Error, LoginMutationRequest>;
type Login = {
    data: LoginMutationResponse;
    error: Error;
    request: LoginMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: LoginHeaderParams;
    response: LoginMutationResponse;
    client: {
        parameters: Partial<Parameters<LoginClient>[0]>;
        return: Awaited<ReturnType<LoginClient>>;
    };
};
/**
 * @summary 登录
 * @link /v2/customer/login
 */
export function useLoginHook(headers?: Login["headerParams"], options: {
    mutation?: UseMutationOptions<Login["response"], Login["error"], Login["request"]>;
    client?: Login["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<Login["data"], Login["error"], Login["request"]>({
                method: "post",
                url: `/v2/customer/login`,
                data,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}