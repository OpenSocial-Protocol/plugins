import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { GasSubsidyMutationRequest, GasSubsidyMutationResponse } from "../models/GasSubsidy";
import type { UseMutationOptions } from "@tanstack/react-query";

 type GasSubsidyClient = typeof client<GasSubsidyMutationResponse, Error, GasSubsidyMutationRequest>;
type GasSubsidy = {
    data: GasSubsidyMutationResponse;
    error: Error;
    request: GasSubsidyMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GasSubsidyMutationResponse;
    client: {
        parameters: Partial<Parameters<GasSubsidyClient>[0]>;
        return: Awaited<ReturnType<GasSubsidyClient>>;
    };
};
/**
 * @description get gas subsidy
 * @summary /gas/subsidy
 * @link /v1/contract/gas/subsidy
 */
export function useGasSubsidyHook(options: {
    mutation?: UseMutationOptions<GasSubsidy["response"], GasSubsidy["error"], GasSubsidy["request"]>;
    client?: GasSubsidy["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<GasSubsidy["data"], GasSubsidy["error"], GasSubsidy["request"]>({
                method: "post",
                url: `/v1/contract/gas/subsidy`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}