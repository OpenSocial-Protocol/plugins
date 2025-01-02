import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { SwitchVerifyMutationResponse, SwitchVerifyQueryParams } from "../models/SwitchVerify";
import type { UseMutationOptions } from "@tanstack/react-query";

 type SwitchVerifyClient = typeof client<SwitchVerifyMutationResponse, Error, never>;
type SwitchVerify = {
    data: SwitchVerifyMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: SwitchVerifyQueryParams;
    headerParams: never;
    response: SwitchVerifyMutationResponse;
    client: {
        parameters: Partial<Parameters<SwitchVerifyClient>[0]>;
        return: Awaited<ReturnType<SwitchVerifyClient>>;
    };
};
/**
 * @link /v1/customer/verity/switch
 */
export function useSwitchVerifyHook(params: SwitchVerify["queryParams"], options: {
    mutation?: UseMutationOptions<SwitchVerify["response"], SwitchVerify["error"], SwitchVerify["request"]>;
    client?: SwitchVerify["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<SwitchVerify["data"], SwitchVerify["error"], SwitchVerify["request"]>({
                method: "post",
                url: `/v1/customer/verity/switch`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}