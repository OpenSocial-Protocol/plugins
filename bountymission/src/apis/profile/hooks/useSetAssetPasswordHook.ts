import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { SetAssetPasswordMutationResponse, SetAssetPasswordQueryParams } from "../models/SetAssetPassword";
import type { UseMutationOptions } from "@tanstack/react-query";

 type SetAssetPasswordClient = typeof client<SetAssetPasswordMutationResponse, Error, never>;
type SetAssetPassword = {
    data: SetAssetPasswordMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: SetAssetPasswordQueryParams;
    headerParams: never;
    response: SetAssetPasswordMutationResponse;
    client: {
        parameters: Partial<Parameters<SetAssetPasswordClient>[0]>;
        return: Awaited<ReturnType<SetAssetPasswordClient>>;
    };
};
/**
 * @link /v1/customer/password/asset
 */
export function useSetAssetPasswordHook(params: SetAssetPassword["queryParams"], options: {
    mutation?: UseMutationOptions<SetAssetPassword["response"], SetAssetPassword["error"], SetAssetPassword["request"]>;
    client?: SetAssetPassword["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<SetAssetPassword["data"], SetAssetPassword["error"], SetAssetPassword["request"]>({
                method: "post",
                url: `/v1/customer/password/asset`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}