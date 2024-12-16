import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WishCountQueryResponse, WishCountQueryParams } from "../models/WishCount";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WishCountClient = typeof client<WishCountQueryResponse, Error, never>;
type WishCount = {
    data: WishCountQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: WishCountQueryParams;
    headerParams: never;
    response: WishCountQueryResponse;
    client: {
        parameters: Partial<Parameters<WishCountClient>[0]>;
        return: Awaited<ReturnType<WishCountClient>>;
    };
};
export const wishCountQueryKey = (params?: WishCount["queryParams"]) => ["v5", { url: "/v1/wish/count" }, ...(params ? [params] : [])] as const;
export type WishCountQueryKey = ReturnType<typeof wishCountQueryKey>;
export function wishCountQueryOptions(params?: WishCount["queryParams"], options: WishCount["client"]["parameters"] = {}) {
    const queryKey = wishCountQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishCount["data"], WishCount["error"]>({
                method: "get",
                url: `/v1/wish/count`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description wish参与信息统计
 * @summary wish参与信息统计
 * @link /v1/wish/count
 */
export function useWishCountHook<TData = WishCount["response"], TQueryData = WishCount["response"], TQueryKey extends QueryKey = WishCountQueryKey>(params?: WishCount["queryParams"], options: {
    query?: Partial<QueryObserverOptions<WishCount["response"], WishCount["error"], TData, TQueryData, TQueryKey>>;
    client?: WishCount["client"]["parameters"];
} = {}): UseQueryResult<TData, WishCount["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishCountQueryKey(params);
    const query = useQuery({
        ...wishCountQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WishCount["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const wishCountSuspenseQueryKey = (params?: WishCount["queryParams"]) => ["v5", { url: "/v1/wish/count" }, ...(params ? [params] : [])] as const;
export type WishCountSuspenseQueryKey = ReturnType<typeof wishCountSuspenseQueryKey>;
export function wishCountSuspenseQueryOptions(params?: WishCount["queryParams"], options: WishCount["client"]["parameters"] = {}) {
    const queryKey = wishCountSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishCount["data"], WishCount["error"]>({
                method: "get",
                url: `/v1/wish/count`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description wish参与信息统计
 * @summary wish参与信息统计
 * @link /v1/wish/count
 */
export function useWishCountHookSuspense<TData = WishCount["response"], TQueryKey extends QueryKey = WishCountSuspenseQueryKey>(params?: WishCount["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<WishCount["response"], WishCount["error"], TData, TQueryKey>>;
    client?: WishCount["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WishCount["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishCountSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...wishCountSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WishCount["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}