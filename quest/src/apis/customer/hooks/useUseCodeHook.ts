import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UseCodeMutationRequest, UseCodeMutationResponse } from "../models/UseCode";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UseCodeClient = typeof client<UseCodeMutationResponse, Error, UseCodeMutationRequest>;
type UseCode = {
    data: UseCodeMutationResponse;
    error: Error;
    request: UseCodeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UseCodeMutationResponse;
    client: {
        parameters: Partial<Parameters<UseCodeClient>[0]>;
        return: Awaited<ReturnType<UseCodeClient>>;
    };
};
/**
 * @summary 使用兑换码
 * @link /v2/customer/code/use
 */
export function useUseCodeHook(options: {
    mutation?: UseMutationOptions<UseCode["response"], UseCode["error"], UseCode["request"]>;
    client?: UseCode["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UseCode["data"], UseCode["error"], UseCode["request"]>({
                method: "post",
                url: `/v2/customer/code/use`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}