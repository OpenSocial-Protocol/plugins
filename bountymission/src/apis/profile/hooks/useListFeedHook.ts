import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListFeedQueryResponse, ListFeedPathParams, ListFeedQueryParams } from "../models/ListFeed";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListFeedClient = typeof client<ListFeedQueryResponse, Error, never>;
type ListFeed = {
    data: ListFeedQueryResponse;
    error: Error;
    request: never;
    pathParams: ListFeedPathParams;
    queryParams: ListFeedQueryParams;
    headerParams: never;
    response: ListFeedQueryResponse;
    client: {
        parameters: Partial<Parameters<ListFeedClient>[0]>;
        return: Awaited<ReturnType<ListFeedClient>>;
    };
};
export const listFeedQueryKey = (feedType: ListFeedPathParams["feed_type"], feedMode: ListFeedPathParams["feed_mode"], params?: ListFeed["queryParams"]) => ["v5", { url: "/v1/feed/:feed_type/:feed_mode", params: { feedType: feedType, feedMode: feedMode } }, ...(params ? [params] : [])] as const;
export type ListFeedQueryKey = ReturnType<typeof listFeedQueryKey>;
export function listFeedQueryOptions(feedType: ListFeedPathParams["feed_type"], feedMode: ListFeedPathParams["feed_mode"], params?: ListFeed["queryParams"], options: ListFeed["client"]["parameters"] = {}) {
    const queryKey = listFeedQueryKey(feedType, feedMode, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListFeed["data"], ListFeed["error"]>({
                method: "get",
                url: `/v1/feed/${feedType}/${feedMode}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get feed list
 * @summary /feed/{feed_type}/{feed_mode}
 * @link /v1/feed/:feed_type/:feed_mode
 */
export function useListFeedHook<TData = ListFeed["response"], TQueryData = ListFeed["response"], TQueryKey extends QueryKey = ListFeedQueryKey>(feedType: ListFeedPathParams["feed_type"], feedMode: ListFeedPathParams["feed_mode"], params?: ListFeed["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListFeed["response"], ListFeed["error"], TData, TQueryData, TQueryKey>>;
    client?: ListFeed["client"]["parameters"];
} = {}): UseQueryResult<TData, ListFeed["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listFeedQueryKey(feedType, feedMode, params);
    const query = useQuery({
        ...listFeedQueryOptions(feedType, feedMode, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListFeed["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listFeedSuspenseQueryKey = (feedType: ListFeedPathParams["feed_type"], feedMode: ListFeedPathParams["feed_mode"], params?: ListFeed["queryParams"]) => ["v5", { url: "/v1/feed/:feed_type/:feed_mode", params: { feedType: feedType, feedMode: feedMode } }, ...(params ? [params] : [])] as const;
export type ListFeedSuspenseQueryKey = ReturnType<typeof listFeedSuspenseQueryKey>;
export function listFeedSuspenseQueryOptions(feedType: ListFeedPathParams["feed_type"], feedMode: ListFeedPathParams["feed_mode"], params?: ListFeed["queryParams"], options: ListFeed["client"]["parameters"] = {}) {
    const queryKey = listFeedSuspenseQueryKey(feedType, feedMode, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListFeed["data"], ListFeed["error"]>({
                method: "get",
                url: `/v1/feed/${feedType}/${feedMode}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get feed list
 * @summary /feed/{feed_type}/{feed_mode}
 * @link /v1/feed/:feed_type/:feed_mode
 */
export function useListFeedHookSuspense<TData = ListFeed["response"], TQueryKey extends QueryKey = ListFeedSuspenseQueryKey>(feedType: ListFeedPathParams["feed_type"], feedMode: ListFeedPathParams["feed_mode"], params?: ListFeed["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListFeed["response"], ListFeed["error"], TData, TQueryKey>>;
    client?: ListFeed["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListFeed["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listFeedSuspenseQueryKey(feedType, feedMode, params);
    const query = useSuspenseQuery({
        ...listFeedSuspenseQueryOptions(feedType, feedMode, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListFeed["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}