import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { GasPolicyMutationRequest, GasPolicyMutationResponse } from "../models/GasPolicy";
import type { UseMutationOptions } from "@tanstack/react-query";

 type GasPolicyClient = typeof client<GasPolicyMutationResponse, Error, GasPolicyMutationRequest>;
type GasPolicy = {
    data: GasPolicyMutationResponse;
    error: Error;
    request: GasPolicyMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GasPolicyMutationResponse;
    client: {
        parameters: Partial<Parameters<GasPolicyClient>[0]>;
        return: Awaited<ReturnType<GasPolicyClient>>;
    };
};
/**
 * @description get gas policy
 * @summary /gas/policy
 * @link /v1/contract/gas/policy
 */
export function useGasPolicyHook(options: {
    mutation?: UseMutationOptions<GasPolicy["response"], GasPolicy["error"], GasPolicy["request"]>;
    client?: GasPolicy["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<GasPolicy["data"], GasPolicy["error"], GasPolicy["request"]>({
                method: "post",
                url: `/v1/contract/gas/policy`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}