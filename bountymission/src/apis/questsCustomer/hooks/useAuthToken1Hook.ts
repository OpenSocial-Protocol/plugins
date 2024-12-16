import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { AuthToken1MutationResponse, AuthToken1QueryParams, AuthToken1HeaderParams } from "../models/AuthToken1";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AuthToken1Client = typeof client<AuthToken1MutationResponse, Error, never>;
type AuthToken1 = {
    data: AuthToken1MutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: AuthToken1QueryParams;
    headerParams: AuthToken1HeaderParams;
    response: AuthToken1MutationResponse;
    client: {
        parameters: Partial<Parameters<AuthToken1Client>[0]>;
        return: Awaited<ReturnType<AuthToken1Client>>;
    };
};
/**
 * @summary get twitter/discord token
 * @link /s2/customer/oauth/social/token
 */
export function useAuthToken1Hook(params: AuthToken1["queryParams"], headers: AuthToken1["headerParams"], options: {
    mutation?: UseMutationOptions<AuthToken1["response"], AuthToken1["error"], AuthToken1["request"]>;
    client?: AuthToken1["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<AuthToken1["data"], AuthToken1["error"], AuthToken1["request"]>({
                method: "post",
                url: `/s2/customer/oauth/social/token`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}