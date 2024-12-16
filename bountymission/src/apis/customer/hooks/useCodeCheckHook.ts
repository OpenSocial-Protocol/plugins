import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { CodeCheckMutationRequest, CodeCheckMutationResponse } from "../models/CodeCheck";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CodeCheckClient = typeof client<CodeCheckMutationResponse, Error, CodeCheckMutationRequest>;
type CodeCheck = {
    data: CodeCheckMutationResponse;
    error: Error;
    request: CodeCheckMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CodeCheckMutationResponse;
    client: {
        parameters: Partial<Parameters<CodeCheckClient>[0]>;
        return: Awaited<ReturnType<CodeCheckClient>>;
    };
};
/**
 * @summary 码校验
 * @link /v2/customer/code/check
 */
export function useCodeCheckHook(options: {
    mutation?: UseMutationOptions<CodeCheck["response"], CodeCheck["error"], CodeCheck["request"]>;
    client?: CodeCheck["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CodeCheck["data"], CodeCheck["error"], CodeCheck["request"]>({
                method: "post",
                url: `/v2/customer/code/check`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}