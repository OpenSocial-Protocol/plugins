import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListEmailBadgeWhiteListQueryResponse, ListEmailBadgeWhiteListPathParams } from "../models/ListEmailBadgeWhiteList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListEmailBadgeWhiteListClient = typeof client<ListEmailBadgeWhiteListQueryResponse, Error, never>;
type ListEmailBadgeWhiteList = {
    data: ListEmailBadgeWhiteListQueryResponse;
    error: Error;
    request: never;
    pathParams: ListEmailBadgeWhiteListPathParams;
    queryParams: never;
    headerParams: never;
    response: ListEmailBadgeWhiteListQueryResponse;
    client: {
        parameters: Partial<Parameters<ListEmailBadgeWhiteListClient>[0]>;
        return: Awaited<ReturnType<ListEmailBadgeWhiteListClient>>;
    };
};
export const listEmailBadgeWhiteListQueryKey = (series: ListEmailBadgeWhiteListPathParams["series"]) => ["v5", { url: "/v1/assets/nft/badges/:series/email", params: { series: series } }] as const;
export type ListEmailBadgeWhiteListQueryKey = ReturnType<typeof listEmailBadgeWhiteListQueryKey>;
export function listEmailBadgeWhiteListQueryOptions(series: ListEmailBadgeWhiteListPathParams["series"], options: ListEmailBadgeWhiteList["client"]["parameters"] = {}) {
    const queryKey = listEmailBadgeWhiteListQueryKey(series);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListEmailBadgeWhiteList["data"], ListEmailBadgeWhiteList["error"]>({
                method: "get",
                url: `/v1/assets/nft/badges/${series}/email`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description list email badge whitelist
 * @summary list email badge whitelist
 * @link /v1/assets/nft/badges/:series/email
 */
export function useListEmailBadgeWhiteListHook<TData = ListEmailBadgeWhiteList["response"], TQueryData = ListEmailBadgeWhiteList["response"], TQueryKey extends QueryKey = ListEmailBadgeWhiteListQueryKey>(series: ListEmailBadgeWhiteListPathParams["series"], options: {
    query?: Partial<QueryObserverOptions<ListEmailBadgeWhiteList["response"], ListEmailBadgeWhiteList["error"], TData, TQueryData, TQueryKey>>;
    client?: ListEmailBadgeWhiteList["client"]["parameters"];
} = {}): UseQueryResult<TData, ListEmailBadgeWhiteList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listEmailBadgeWhiteListQueryKey(series);
    const query = useQuery({
        ...listEmailBadgeWhiteListQueryOptions(series, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListEmailBadgeWhiteList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listEmailBadgeWhiteListSuspenseQueryKey = (series: ListEmailBadgeWhiteListPathParams["series"]) => ["v5", { url: "/v1/assets/nft/badges/:series/email", params: { series: series } }] as const;
export type ListEmailBadgeWhiteListSuspenseQueryKey = ReturnType<typeof listEmailBadgeWhiteListSuspenseQueryKey>;
export function listEmailBadgeWhiteListSuspenseQueryOptions(series: ListEmailBadgeWhiteListPathParams["series"], options: ListEmailBadgeWhiteList["client"]["parameters"] = {}) {
    const queryKey = listEmailBadgeWhiteListSuspenseQueryKey(series);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListEmailBadgeWhiteList["data"], ListEmailBadgeWhiteList["error"]>({
                method: "get",
                url: `/v1/assets/nft/badges/${series}/email`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description list email badge whitelist
 * @summary list email badge whitelist
 * @link /v1/assets/nft/badges/:series/email
 */
export function useListEmailBadgeWhiteListHookSuspense<TData = ListEmailBadgeWhiteList["response"], TQueryKey extends QueryKey = ListEmailBadgeWhiteListSuspenseQueryKey>(series: ListEmailBadgeWhiteListPathParams["series"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListEmailBadgeWhiteList["response"], ListEmailBadgeWhiteList["error"], TData, TQueryKey>>;
    client?: ListEmailBadgeWhiteList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListEmailBadgeWhiteList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listEmailBadgeWhiteListSuspenseQueryKey(series);
    const query = useSuspenseQuery({
        ...listEmailBadgeWhiteListSuspenseQueryOptions(series, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListEmailBadgeWhiteList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}