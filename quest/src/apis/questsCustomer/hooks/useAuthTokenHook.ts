import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { AuthTokenMutationResponse, AuthTokenQueryParams, AuthTokenHeaderParams } from "../models/AuthToken";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AuthTokenClient = typeof client<AuthTokenMutationResponse, Error, never>;
type AuthToken = {
    data: AuthTokenMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: AuthTokenQueryParams;
    headerParams: AuthTokenHeaderParams;
    response: AuthTokenMutationResponse;
    client: {
        parameters: Partial<Parameters<AuthTokenClient>[0]>;
        return: Awaited<ReturnType<AuthTokenClient>>;
    };
};
/**
 * @summary get twitter/discord token
 * @link /v2/customer/oauth/social/token
 */
export function useAuthTokenHook(params: AuthToken["queryParams"], headers?: AuthToken["headerParams"], options: {
    mutation?: UseMutationOptions<AuthToken["response"], AuthToken["error"], AuthToken["request"]>;
    client?: AuthToken["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<AuthToken["data"], AuthToken["error"], AuthToken["request"]>({
                method: "post",
                url: `/v2/customer/oauth/social/token`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}