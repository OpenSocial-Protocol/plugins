import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { OauthLoginMutationResponse, OauthLoginQueryParams, OauthLoginHeaderParams } from "../models/OauthLogin";
import type { UseMutationOptions } from "@tanstack/react-query";

 type OauthLoginClient = typeof client<OauthLoginMutationResponse, Error, never>;
type OauthLogin = {
    data: OauthLoginMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: OauthLoginQueryParams;
    headerParams: OauthLoginHeaderParams;
    response: OauthLoginMutationResponse;
    client: {
        parameters: Partial<Parameters<OauthLoginClient>[0]>;
        return: Awaited<ReturnType<OauthLoginClient>>;
    };
};
/**
 * @summary 三方认证登录
 * @link /v2/customer/login/oauth
 */
export function useOauthLoginHook(params: OauthLogin["queryParams"], headers?: OauthLogin["headerParams"], options: {
    mutation?: UseMutationOptions<OauthLogin["response"], OauthLogin["error"], OauthLogin["request"]>;
    client?: OauthLogin["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<OauthLogin["data"], OauthLogin["error"], OauthLogin["request"]>({
                method: "post",
                url: `/v2/customer/login/oauth`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}