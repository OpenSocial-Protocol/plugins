import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WishDetailV1QueryResponse, WishDetailV1PathParams } from "../models/WishDetailV1";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WishDetailV1Client = typeof client<WishDetailV1QueryResponse, Error, never>;
type WishDetailV1 = {
    data: WishDetailV1QueryResponse;
    error: Error;
    request: never;
    pathParams: WishDetailV1PathParams;
    queryParams: never;
    headerParams: never;
    response: WishDetailV1QueryResponse;
    client: {
        parameters: Partial<Parameters<WishDetailV1Client>[0]>;
        return: Awaited<ReturnType<WishDetailV1Client>>;
    };
};
export const wishDetailV1QueryKey = (id: WishDetailV1PathParams["id"]) => ["v5", { url: "/v1/wish/detail/:id", params: { id: id } }] as const;
export type WishDetailV1QueryKey = ReturnType<typeof wishDetailV1QueryKey>;
export function wishDetailV1QueryOptions(id: WishDetailV1PathParams["id"], options: WishDetailV1["client"]["parameters"] = {}) {
    const queryKey = wishDetailV1QueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishDetailV1["data"], WishDetailV1["error"]>({
                method: "get",
                url: `/v1/wish/detail/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Wish Detail Information
 * @summary Wish Detail
 * @link /v1/wish/detail/:id
 */
export function useWishDetailV1Hook<TData = WishDetailV1["response"], TQueryData = WishDetailV1["response"], TQueryKey extends QueryKey = WishDetailV1QueryKey>(id: WishDetailV1PathParams["id"], options: {
    query?: Partial<QueryObserverOptions<WishDetailV1["response"], WishDetailV1["error"], TData, TQueryData, TQueryKey>>;
    client?: WishDetailV1["client"]["parameters"];
} = {}): UseQueryResult<TData, WishDetailV1["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishDetailV1QueryKey(id);
    const query = useQuery({
        ...wishDetailV1QueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WishDetailV1["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const wishDetailV1SuspenseQueryKey = (id: WishDetailV1PathParams["id"]) => ["v5", { url: "/v1/wish/detail/:id", params: { id: id } }] as const;
export type WishDetailV1SuspenseQueryKey = ReturnType<typeof wishDetailV1SuspenseQueryKey>;
export function wishDetailV1SuspenseQueryOptions(id: WishDetailV1PathParams["id"], options: WishDetailV1["client"]["parameters"] = {}) {
    const queryKey = wishDetailV1SuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishDetailV1["data"], WishDetailV1["error"]>({
                method: "get",
                url: `/v1/wish/detail/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Wish Detail Information
 * @summary Wish Detail
 * @link /v1/wish/detail/:id
 */
export function useWishDetailV1HookSuspense<TData = WishDetailV1["response"], TQueryKey extends QueryKey = WishDetailV1SuspenseQueryKey>(id: WishDetailV1PathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<WishDetailV1["response"], WishDetailV1["error"], TData, TQueryKey>>;
    client?: WishDetailV1["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WishDetailV1["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishDetailV1SuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...wishDetailV1SuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WishDetailV1["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}