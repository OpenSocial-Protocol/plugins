import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetCustomerEmailsQueryResponse, GetCustomerEmailsHeaderParams } from "../models/GetCustomerEmails";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetCustomerEmailsClient = typeof client<GetCustomerEmailsQueryResponse, Error, never>;
type GetCustomerEmails = {
    data: GetCustomerEmailsQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetCustomerEmailsHeaderParams;
    response: GetCustomerEmailsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetCustomerEmailsClient>[0]>;
        return: Awaited<ReturnType<GetCustomerEmailsClient>>;
    };
};
export const getCustomerEmailsQueryKey = () => ["v5", { url: "/v2/customer/emails" }] as const;
export type GetCustomerEmailsQueryKey = ReturnType<typeof getCustomerEmailsQueryKey>;
export function getCustomerEmailsQueryOptions(headers: GetCustomerEmails["headerParams"], options: GetCustomerEmails["client"]["parameters"] = {}) {
    const queryKey = getCustomerEmailsQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCustomerEmails["data"], GetCustomerEmails["error"]>({
                method: "get",
                url: `/v2/customer/emails`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get customer bind emails
 * @summary /customer/emails
 * @link /v2/customer/emails
 */
export function useGetCustomerEmailsHook<TData = GetCustomerEmails["response"], TQueryData = GetCustomerEmails["response"], TQueryKey extends QueryKey = GetCustomerEmailsQueryKey>(headers: GetCustomerEmails["headerParams"], options: {
    query?: Partial<QueryObserverOptions<GetCustomerEmails["response"], GetCustomerEmails["error"], TData, TQueryData, TQueryKey>>;
    client?: GetCustomerEmails["client"]["parameters"];
} = {}): UseQueryResult<TData, GetCustomerEmails["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCustomerEmailsQueryKey();
    const query = useQuery({
        ...getCustomerEmailsQueryOptions(headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetCustomerEmails["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getCustomerEmailsSuspenseQueryKey = () => ["v5", { url: "/v2/customer/emails" }] as const;
export type GetCustomerEmailsSuspenseQueryKey = ReturnType<typeof getCustomerEmailsSuspenseQueryKey>;
export function getCustomerEmailsSuspenseQueryOptions(headers: GetCustomerEmails["headerParams"], options: GetCustomerEmails["client"]["parameters"] = {}) {
    const queryKey = getCustomerEmailsSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCustomerEmails["data"], GetCustomerEmails["error"]>({
                method: "get",
                url: `/v2/customer/emails`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get customer bind emails
 * @summary /customer/emails
 * @link /v2/customer/emails
 */
export function useGetCustomerEmailsHookSuspense<TData = GetCustomerEmails["response"], TQueryKey extends QueryKey = GetCustomerEmailsSuspenseQueryKey>(headers: GetCustomerEmails["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetCustomerEmails["response"], GetCustomerEmails["error"], TData, TQueryKey>>;
    client?: GetCustomerEmails["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetCustomerEmails["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCustomerEmailsSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getCustomerEmailsSuspenseQueryOptions(headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetCustomerEmails["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}