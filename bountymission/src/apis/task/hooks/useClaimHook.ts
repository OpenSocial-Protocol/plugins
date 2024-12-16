import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { ClaimMutationResponse, ClaimPathParams, ClaimQueryParams, ClaimHeaderParams } from "../models/Claim";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ClaimClient = typeof client<ClaimMutationResponse, Error, never>;
type Claim = {
    data: ClaimMutationResponse;
    error: Error;
    request: never;
    pathParams: ClaimPathParams;
    queryParams: ClaimQueryParams;
    headerParams: ClaimHeaderParams;
    response: ClaimMutationResponse;
    client: {
        parameters: Partial<Parameters<ClaimClient>[0]>;
        return: Awaited<ReturnType<ClaimClient>>;
    };
};
/**
 * @summary 使用nft/兑换码兑换积分
 * @link /v2/reward/claim/:type
 */
export function useClaimHook(type: ClaimPathParams["type"], headers: Claim["headerParams"], params?: Claim["queryParams"], options: {
    mutation?: UseMutationOptions<Claim["response"], Claim["error"], Claim["request"]>;
    client?: Claim["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Claim["data"], Claim["error"], Claim["request"]>({
                method: "post",
                url: `/v2/reward/claim/${type}`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}