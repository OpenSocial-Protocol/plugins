import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BindAuthMutationResponse, BindAuthQueryParams, BindAuthHeaderParams } from "../models/BindAuth";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BindAuthClient = typeof client<BindAuthMutationResponse, Error, never>;
type BindAuth = {
    data: BindAuthMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BindAuthQueryParams;
    headerParams: BindAuthHeaderParams;
    response: BindAuthMutationResponse;
    client: {
        parameters: Partial<Parameters<BindAuthClient>[0]>;
        return: Awaited<ReturnType<BindAuthClient>>;
    };
};
/**
 * @summary 绑定wallet
 * @link /v2/customer/bind/auth
 */
export function useBindAuthHook(params: BindAuth["queryParams"], headers?: BindAuth["headerParams"], options: {
    mutation?: UseMutationOptions<BindAuth["response"], BindAuth["error"], BindAuth["request"]>;
    client?: BindAuth["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<BindAuth["data"], BindAuth["error"], BindAuth["request"]>({
                method: "post",
                url: `/v2/customer/bind/auth`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}