import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WishDetailQueryResponse, WishDetailPathParams } from "../models/WishDetail";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WishDetailClient = typeof client<WishDetailQueryResponse, Error, never>;
type WishDetail = {
    data: WishDetailQueryResponse;
    error: Error;
    request: never;
    pathParams: WishDetailPathParams;
    queryParams: never;
    headerParams: never;
    response: WishDetailQueryResponse;
    client: {
        parameters: Partial<Parameters<WishDetailClient>[0]>;
        return: Awaited<ReturnType<WishDetailClient>>;
    };
};
export const wishDetailQueryKey = (id: WishDetailPathParams["id"]) => ["v5", { url: "/v1/wish/:id", params: { id: id } }] as const;
export type WishDetailQueryKey = ReturnType<typeof wishDetailQueryKey>;
export function wishDetailQueryOptions(id: WishDetailPathParams["id"], options: WishDetail["client"]["parameters"] = {}) {
    const queryKey = wishDetailQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishDetail["data"], WishDetail["error"]>({
                method: "get",
                url: `/v1/wish/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Wish Detail Information
 * @summary Wish Detail
 * @link /v1/wish/:id
 */
export function useWishDetailHook<TData = WishDetail["response"], TQueryData = WishDetail["response"], TQueryKey extends QueryKey = WishDetailQueryKey>(id: WishDetailPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<WishDetail["response"], WishDetail["error"], TData, TQueryData, TQueryKey>>;
    client?: WishDetail["client"]["parameters"];
} = {}): UseQueryResult<TData, WishDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishDetailQueryKey(id);
    const query = useQuery({
        ...wishDetailQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WishDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const wishDetailSuspenseQueryKey = (id: WishDetailPathParams["id"]) => ["v5", { url: "/v1/wish/:id", params: { id: id } }] as const;
export type WishDetailSuspenseQueryKey = ReturnType<typeof wishDetailSuspenseQueryKey>;
export function wishDetailSuspenseQueryOptions(id: WishDetailPathParams["id"], options: WishDetail["client"]["parameters"] = {}) {
    const queryKey = wishDetailSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishDetail["data"], WishDetail["error"]>({
                method: "get",
                url: `/v1/wish/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Wish Detail Information
 * @summary Wish Detail
 * @link /v1/wish/:id
 */
export function useWishDetailHookSuspense<TData = WishDetail["response"], TQueryKey extends QueryKey = WishDetailSuspenseQueryKey>(id: WishDetailPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<WishDetail["response"], WishDetail["error"], TData, TQueryKey>>;
    client?: WishDetail["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WishDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishDetailSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...wishDetailSuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WishDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}