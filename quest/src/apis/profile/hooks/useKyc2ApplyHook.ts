import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { Kyc2ApplyMutationResponse, Kyc2ApplyQueryParams } from "../models/Kyc2Apply";
import type { UseMutationOptions } from "@tanstack/react-query";

 type Kyc2ApplyClient = typeof client<Kyc2ApplyMutationResponse, Error, never>;
type Kyc2Apply = {
    data: Kyc2ApplyMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: Kyc2ApplyQueryParams;
    headerParams: never;
    response: Kyc2ApplyMutationResponse;
    client: {
        parameters: Partial<Parameters<Kyc2ApplyClient>[0]>;
        return: Awaited<ReturnType<Kyc2ApplyClient>>;
    };
};
/**
 * @description KYC2申请
 * @summary KYC2申请
 * @link /v1/kyc/level2/apply
 */
export function useKyc2ApplyHook(params: Kyc2Apply["queryParams"], options: {
    mutation?: UseMutationOptions<Kyc2Apply["response"], Kyc2Apply["error"], Kyc2Apply["request"]>;
    client?: Kyc2Apply["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Kyc2Apply["data"], Kyc2Apply["error"], Kyc2Apply["request"]>({
                method: "post",
                url: `/v1/kyc/level2/apply`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}