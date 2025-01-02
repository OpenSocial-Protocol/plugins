import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { FillUserOerationMutationRequest, FillUserOerationMutationResponse } from "../models/FillUserOeration";
import type { UseMutationOptions } from "@tanstack/react-query";

 type FillUserOerationClient = typeof client<FillUserOerationMutationResponse, Error, FillUserOerationMutationRequest>;
type FillUserOeration = {
    data: FillUserOerationMutationResponse;
    error: Error;
    request: FillUserOerationMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: FillUserOerationMutationResponse;
    client: {
        parameters: Partial<Parameters<FillUserOerationClient>[0]>;
        return: Awaited<ReturnType<FillUserOerationClient>>;
    };
};
/**
 * @description get paymaster and data by user operation
 * @summary /erc4337/fill
 * @link /v1/erc4337/fill
 */
export function useFillUserOerationHook(options: {
    mutation?: UseMutationOptions<FillUserOeration["response"], FillUserOeration["error"], FillUserOeration["request"]>;
    client?: FillUserOeration["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<FillUserOeration["data"], FillUserOeration["error"], FillUserOeration["request"]>({
                method: "post",
                url: `/v1/erc4337/fill`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}