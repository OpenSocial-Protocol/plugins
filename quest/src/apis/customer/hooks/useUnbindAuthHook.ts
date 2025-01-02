import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UnbindAuthMutationResponse, UnbindAuthQueryParams } from "../models/UnbindAuth";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UnbindAuthClient = typeof client<UnbindAuthMutationResponse, Error, never>;
type UnbindAuth = {
    data: UnbindAuthMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: UnbindAuthQueryParams;
    headerParams: never;
    response: UnbindAuthMutationResponse;
    client: {
        parameters: Partial<Parameters<UnbindAuthClient>[0]>;
        return: Awaited<ReturnType<UnbindAuthClient>>;
    };
};
/**
 * @summary 用户解绑钱包
 * @link /v2/customer/unbind/auth
 */
export function useUnbindAuthHook(params: UnbindAuth["queryParams"], options: {
    mutation?: UseMutationOptions<UnbindAuth["response"], UnbindAuth["error"], UnbindAuth["request"]>;
    client?: UnbindAuth["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<UnbindAuth["data"], UnbindAuth["error"], UnbindAuth["request"]>({
                method: "post",
                url: `/v2/customer/unbind/auth`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}