import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { GetContactsCodeMutationResponse, GetContactsCodePathParams, GetContactsCodeQueryParams } from "../models/GetContactsCode";
import type { UseMutationOptions } from "@tanstack/react-query";

 type GetContactsCodeClient = typeof client<GetContactsCodeMutationResponse, Error, never>;
type GetContactsCode = {
    data: GetContactsCodeMutationResponse;
    error: Error;
    request: never;
    pathParams: GetContactsCodePathParams;
    queryParams: GetContactsCodeQueryParams;
    headerParams: never;
    response: GetContactsCodeMutationResponse;
    client: {
        parameters: Partial<Parameters<GetContactsCodeClient>[0]>;
        return: Awaited<ReturnType<GetContactsCodeClient>>;
    };
};
/**
 * @description get email code
 * @summary /contacts/{type}/code
 * @link /v1/contacts/:type/code
 */
export function useGetContactsCodeHook(type: GetContactsCodePathParams["type"], params: GetContactsCode["queryParams"], options: {
    mutation?: UseMutationOptions<GetContactsCode["response"], GetContactsCode["error"], GetContactsCode["request"]>;
    client?: GetContactsCode["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<GetContactsCode["data"], GetContactsCode["error"], GetContactsCode["request"]>({
                method: "post",
                url: `/v1/contacts/${type}/code`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}