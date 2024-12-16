import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { FriendApplyDetailQueryResponse, FriendApplyDetailQueryParams } from "../models/FriendApplyDetail";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type FriendApplyDetailClient = typeof client<FriendApplyDetailQueryResponse, Error, never>;
type FriendApplyDetail = {
    data: FriendApplyDetailQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: FriendApplyDetailQueryParams;
    headerParams: never;
    response: FriendApplyDetailQueryResponse;
    client: {
        parameters: Partial<Parameters<FriendApplyDetailClient>[0]>;
        return: Awaited<ReturnType<FriendApplyDetailClient>>;
    };
};
export const friendApplyDetailQueryKey = (params: FriendApplyDetail["queryParams"]) => ["v5", { url: "/v1/friend/apply/detail" }, ...(params ? [params] : [])] as const;
export type FriendApplyDetailQueryKey = ReturnType<typeof friendApplyDetailQueryKey>;
export function friendApplyDetailQueryOptions(params: FriendApplyDetail["queryParams"], options: FriendApplyDetail["client"]["parameters"] = {}) {
    const queryKey = friendApplyDetailQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<FriendApplyDetail["data"], FriendApplyDetail["error"]>({
                method: "get",
                url: `/v1/friend/apply/detail`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 好友申请详情
 * @summary 好友申请详情
 * @link /v1/friend/apply/detail
 * @deprecated
 */
export function useFriendApplyDetailHook<TData = FriendApplyDetail["response"], TQueryData = FriendApplyDetail["response"], TQueryKey extends QueryKey = FriendApplyDetailQueryKey>(params: FriendApplyDetail["queryParams"], options: {
    query?: Partial<QueryObserverOptions<FriendApplyDetail["response"], FriendApplyDetail["error"], TData, TQueryData, TQueryKey>>;
    client?: FriendApplyDetail["client"]["parameters"];
} = {}): UseQueryResult<TData, FriendApplyDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? friendApplyDetailQueryKey(params);
    const query = useQuery({
        ...friendApplyDetailQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, FriendApplyDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const friendApplyDetailSuspenseQueryKey = (params: FriendApplyDetail["queryParams"]) => ["v5", { url: "/v1/friend/apply/detail" }, ...(params ? [params] : [])] as const;
export type FriendApplyDetailSuspenseQueryKey = ReturnType<typeof friendApplyDetailSuspenseQueryKey>;
export function friendApplyDetailSuspenseQueryOptions(params: FriendApplyDetail["queryParams"], options: FriendApplyDetail["client"]["parameters"] = {}) {
    const queryKey = friendApplyDetailSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<FriendApplyDetail["data"], FriendApplyDetail["error"]>({
                method: "get",
                url: `/v1/friend/apply/detail`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 好友申请详情
 * @summary 好友申请详情
 * @link /v1/friend/apply/detail
 * @deprecated
 */
export function useFriendApplyDetailHookSuspense<TData = FriendApplyDetail["response"], TQueryKey extends QueryKey = FriendApplyDetailSuspenseQueryKey>(params: FriendApplyDetail["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<FriendApplyDetail["response"], FriendApplyDetail["error"], TData, TQueryKey>>;
    client?: FriendApplyDetail["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, FriendApplyDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? friendApplyDetailSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...friendApplyDetailSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, FriendApplyDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}