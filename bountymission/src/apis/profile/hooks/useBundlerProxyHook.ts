import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BundlerProxyMutationRequest, BundlerProxyMutationResponse } from "../models/BundlerProxy";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BundlerProxyClient = typeof client<BundlerProxyMutationResponse, Error, BundlerProxyMutationRequest>;
type BundlerProxy = {
    data: BundlerProxyMutationResponse;
    error: Error;
    request: BundlerProxyMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: BundlerProxyMutationResponse;
    client: {
        parameters: Partial<Parameters<BundlerProxyClient>[0]>;
        return: Awaited<ReturnType<BundlerProxyClient>>;
    };
};
/**
 * @description offchain data process
 * @summary /offchain/process
 * @link /v1/offchain/process
 */
export function useBundlerProxyHook(options: {
    mutation?: UseMutationOptions<BundlerProxy["response"], BundlerProxy["error"], BundlerProxy["request"]>;
    client?: BundlerProxy["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<BundlerProxy["data"], BundlerProxy["error"], BundlerProxy["request"]>({
                method: "post",
                url: `/v1/offchain/process`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}