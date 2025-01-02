import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BundlerProxy1MutationRequest, BundlerProxy1MutationResponse } from "../models/BundlerProxy1";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BundlerProxy1Client = typeof client<BundlerProxy1MutationResponse, Error, BundlerProxy1MutationRequest>;
type BundlerProxy1 = {
    data: BundlerProxy1MutationResponse;
    error: Error;
    request: BundlerProxy1MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: BundlerProxy1MutationResponse;
    client: {
        parameters: Partial<Parameters<BundlerProxy1Client>[0]>;
        return: Awaited<ReturnType<BundlerProxy1Client>>;
    };
};
/**
 * @description erc4337 bundler proxy
 * @summary /erc4337/bundler/proxy
 * @link /v1/erc4337/bundler/proxy
 */
export function useBundlerProxy1Hook(options: {
    mutation?: UseMutationOptions<BundlerProxy1["response"], BundlerProxy1["error"], BundlerProxy1["request"]>;
    client?: BundlerProxy1["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<BundlerProxy1["data"], BundlerProxy1["error"], BundlerProxy1["request"]>({
                method: "post",
                url: `/v1/erc4337/bundler/proxy`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}