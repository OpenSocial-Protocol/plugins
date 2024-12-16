import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { AssetPwdVerifyMutationResponse, AssetPwdVerifyQueryParams } from "../models/AssetPwdVerify";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AssetPwdVerifyClient = typeof client<AssetPwdVerifyMutationResponse, Error, never>;
type AssetPwdVerify = {
    data: AssetPwdVerifyMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: AssetPwdVerifyQueryParams;
    headerParams: never;
    response: AssetPwdVerifyMutationResponse;
    client: {
        parameters: Partial<Parameters<AssetPwdVerifyClient>[0]>;
        return: Awaited<ReturnType<AssetPwdVerifyClient>>;
    };
};
/**
 * @link /v1/customer/verify/password/asset
 */
export function useAssetPwdVerifyHook(params: AssetPwdVerify["queryParams"], options: {
    mutation?: UseMutationOptions<AssetPwdVerify["response"], AssetPwdVerify["error"], AssetPwdVerify["request"]>;
    client?: AssetPwdVerify["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<AssetPwdVerify["data"], AssetPwdVerify["error"], AssetPwdVerify["request"]>({
                method: "post",
                url: `/v1/customer/verify/password/asset`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}