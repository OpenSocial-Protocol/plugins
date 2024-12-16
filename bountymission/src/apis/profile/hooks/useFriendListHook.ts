import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { FriendListQueryResponse, FriendListPathParams, FriendListQueryParams } from "../models/FriendList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type FriendListClient = typeof client<FriendListQueryResponse, Error, never>;
type FriendList = {
    data: FriendListQueryResponse;
    error: Error;
    request: never;
    pathParams: FriendListPathParams;
    queryParams: FriendListQueryParams;
    headerParams: never;
    response: FriendListQueryResponse;
    client: {
        parameters: Partial<Parameters<FriendListClient>[0]>;
        return: Awaited<ReturnType<FriendListClient>>;
    };
};
export const friendListQueryKey = (type: FriendListPathParams["type"], params?: FriendList["queryParams"]) => ["v5", { url: "/v1/friend/:type/list", params: { type: type } }, ...(params ? [params] : [])] as const;
export type FriendListQueryKey = ReturnType<typeof friendListQueryKey>;
export function friendListQueryOptions(type: FriendListPathParams["type"], params?: FriendList["queryParams"], options: FriendList["client"]["parameters"] = {}) {
    const queryKey = friendListQueryKey(type, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<FriendList["data"], FriendList["error"]>({
                method: "get",
                url: `/v1/friend/${type}/list`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 好友列表查询
 * @summary 好友列表查询
 * @link /v1/friend/:type/list
 * @deprecated
 */
export function useFriendListHook<TData = FriendList["response"], TQueryData = FriendList["response"], TQueryKey extends QueryKey = FriendListQueryKey>(type: FriendListPathParams["type"], params?: FriendList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<FriendList["response"], FriendList["error"], TData, TQueryData, TQueryKey>>;
    client?: FriendList["client"]["parameters"];
} = {}): UseQueryResult<TData, FriendList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? friendListQueryKey(type, params);
    const query = useQuery({
        ...friendListQueryOptions(type, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, FriendList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const friendListSuspenseQueryKey = (type: FriendListPathParams["type"], params?: FriendList["queryParams"]) => ["v5", { url: "/v1/friend/:type/list", params: { type: type } }, ...(params ? [params] : [])] as const;
export type FriendListSuspenseQueryKey = ReturnType<typeof friendListSuspenseQueryKey>;
export function friendListSuspenseQueryOptions(type: FriendListPathParams["type"], params?: FriendList["queryParams"], options: FriendList["client"]["parameters"] = {}) {
    const queryKey = friendListSuspenseQueryKey(type, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<FriendList["data"], FriendList["error"]>({
                method: "get",
                url: `/v1/friend/${type}/list`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 好友列表查询
 * @summary 好友列表查询
 * @link /v1/friend/:type/list
 * @deprecated
 */
export function useFriendListHookSuspense<TData = FriendList["response"], TQueryKey extends QueryKey = FriendListSuspenseQueryKey>(type: FriendListPathParams["type"], params?: FriendList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<FriendList["response"], FriendList["error"], TData, TQueryKey>>;
    client?: FriendList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, FriendList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? friendListSuspenseQueryKey(type, params);
    const query = useSuspenseQuery({
        ...friendListSuspenseQueryOptions(type, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, FriendList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}