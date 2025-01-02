import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ContactsQueryResponse, ContactsQueryParams } from "../models/Contacts";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ContactsClient = typeof client<ContactsQueryResponse, Error, never>;
type Contacts = {
    data: ContactsQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ContactsQueryParams;
    headerParams: never;
    response: ContactsQueryResponse;
    client: {
        parameters: Partial<Parameters<ContactsClient>[0]>;
        return: Awaited<ReturnType<ContactsClient>>;
    };
};
export const contactsQueryKey = (params: Contacts["queryParams"]) => ["v5", { url: "/v1/contacts" }, ...(params ? [params] : [])] as const;
export type ContactsQueryKey = ReturnType<typeof contactsQueryKey>;
export function contactsQueryOptions(params: Contacts["queryParams"], options: Contacts["client"]["parameters"] = {}) {
    const queryKey = contactsQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Contacts["data"], Contacts["error"]>({
                method: "get",
                url: `/v1/contacts`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get contacts
 * @summary /contacts
 * @link /v1/contacts
 */
export function useContactsHook<TData = Contacts["response"], TQueryData = Contacts["response"], TQueryKey extends QueryKey = ContactsQueryKey>(params: Contacts["queryParams"], options: {
    query?: Partial<QueryObserverOptions<Contacts["response"], Contacts["error"], TData, TQueryData, TQueryKey>>;
    client?: Contacts["client"]["parameters"];
} = {}): UseQueryResult<TData, Contacts["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contactsQueryKey(params);
    const query = useQuery({
        ...contactsQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Contacts["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const contactsSuspenseQueryKey = (params: Contacts["queryParams"]) => ["v5", { url: "/v1/contacts" }, ...(params ? [params] : [])] as const;
export type ContactsSuspenseQueryKey = ReturnType<typeof contactsSuspenseQueryKey>;
export function contactsSuspenseQueryOptions(params: Contacts["queryParams"], options: Contacts["client"]["parameters"] = {}) {
    const queryKey = contactsSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Contacts["data"], Contacts["error"]>({
                method: "get",
                url: `/v1/contacts`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get contacts
 * @summary /contacts
 * @link /v1/contacts
 */
export function useContactsHookSuspense<TData = Contacts["response"], TQueryKey extends QueryKey = ContactsSuspenseQueryKey>(params: Contacts["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<Contacts["response"], Contacts["error"], TData, TQueryKey>>;
    client?: Contacts["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Contacts["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contactsSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...contactsSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Contacts["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}