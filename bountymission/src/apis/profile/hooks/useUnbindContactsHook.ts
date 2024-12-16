import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UnbindContactsMutationResponse, UnbindContactsPathParams } from "../models/UnbindContacts";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UnbindContactsClient = typeof client<UnbindContactsMutationResponse, Error, never>;
type UnbindContacts = {
    data: UnbindContactsMutationResponse;
    error: Error;
    request: never;
    pathParams: UnbindContactsPathParams;
    queryParams: never;
    headerParams: never;
    response: UnbindContactsMutationResponse;
    client: {
        parameters: Partial<Parameters<UnbindContactsClient>[0]>;
        return: Awaited<ReturnType<UnbindContactsClient>>;
    };
};
/**
 * @description unbind contacts
 * @summary /contacts/{type}/unbind
 * @link /v1/contacts/:type/unbind
 */
export function useUnbindContactsHook(type: UnbindContactsPathParams["type"], options: {
    mutation?: UseMutationOptions<UnbindContacts["response"], UnbindContacts["error"], UnbindContacts["request"]>;
    client?: UnbindContacts["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<UnbindContacts["data"], UnbindContacts["error"], UnbindContacts["request"]>({
                method: "post",
                url: `/v1/contacts/${type}/unbind`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}