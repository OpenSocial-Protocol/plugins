import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { CreatCheckMutationResponse } from "../models/CreatCheck";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreatCheckClient = typeof client<CreatCheckMutationResponse, Error, never>;
type CreatCheck = {
    data: CreatCheckMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreatCheckMutationResponse;
    client: {
        parameters: Partial<Parameters<CreatCheckClient>[0]>;
        return: Awaited<ReturnType<CreatCheckClient>>;
    };
};
/**
 * @link /v1/kyc/check
 */
export function useCreatCheckHook(options: {
    mutation?: UseMutationOptions<CreatCheck["response"], CreatCheck["error"], CreatCheck["request"]>;
    client?: CreatCheck["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CreatCheck["data"], CreatCheck["error"], CreatCheck["request"]>({
                method: "post",
                url: `/v1/kyc/check`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}