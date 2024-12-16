import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BindContactsMutationResponse, BindContactsPathParams, BindContactsQueryParams } from "../models/BindContacts";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BindContactsClient = typeof client<BindContactsMutationResponse, Error, never>;
type BindContacts = {
    data: BindContactsMutationResponse;
    error: Error;
    request: never;
    pathParams: BindContactsPathParams;
    queryParams: BindContactsQueryParams;
    headerParams: never;
    response: BindContactsMutationResponse;
    client: {
        parameters: Partial<Parameters<BindContactsClient>[0]>;
        return: Awaited<ReturnType<BindContactsClient>>;
    };
};
/**
 * @description bind contacts
 * @summary /contacts/{type}/bind
 * @link /v1/contacts/:type/bind
 */
export function useBindContactsHook(type: BindContactsPathParams["type"], params?: BindContacts["queryParams"], options: {
    mutation?: UseMutationOptions<BindContacts["response"], BindContacts["error"], BindContacts["request"]>;
    client?: BindContacts["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<BindContacts["data"], BindContacts["error"], BindContacts["request"]>({
                method: "post",
                url: `/v1/contacts/${type}/bind`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}