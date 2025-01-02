import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { AuthChallengeMutationResponse, AuthChallengeQueryParams } from "../models/AuthChallenge";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AuthChallengeClient = typeof client<AuthChallengeMutationResponse, Error, never>;
type AuthChallenge = {
    data: AuthChallengeMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: AuthChallengeQueryParams;
    headerParams: never;
    response: AuthChallengeMutationResponse;
    client: {
        parameters: Partial<Parameters<AuthChallengeClient>[0]>;
        return: Awaited<ReturnType<AuthChallengeClient>>;
    };
};
/**
 * @summary 获取签名信息
 * @link /v2/customer/auth/challenge
 */
export function useAuthChallengeHook(params: AuthChallenge["queryParams"], options: {
    mutation?: UseMutationOptions<AuthChallenge["response"], AuthChallenge["error"], AuthChallenge["request"]>;
    client?: AuthChallenge["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<AuthChallenge["data"], AuthChallenge["error"], AuthChallenge["request"]>({
                method: "post",
                url: `/v2/customer/auth/challenge`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}