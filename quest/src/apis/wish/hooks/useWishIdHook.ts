import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WishIdQueryResponse } from "../models/WishId";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WishIdClient = typeof client<WishIdQueryResponse, Error, never>;
type WishId = {
    data: WishIdQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: WishIdQueryResponse;
    client: {
        parameters: Partial<Parameters<WishIdClient>[0]>;
        return: Awaited<ReturnType<WishIdClient>>;
    };
};
export const wishIdQueryKey = () => ["v5", { url: "/v1/wish/acquire/id" }] as const;
export type WishIdQueryKey = ReturnType<typeof wishIdQueryKey>;
export function wishIdQueryOptions(options: WishId["client"]["parameters"] = {}) {
    const queryKey = wishIdQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishId["data"], WishId["error"]>({
                method: "get",
                url: `/v1/wish/acquire/id`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Fetch wish id
 * @summary Fetch wish id
 * @link /v1/wish/acquire/id
 */
export function useWishIdHook<TData = WishId["response"], TQueryData = WishId["response"], TQueryKey extends QueryKey = WishIdQueryKey>(options: {
    query?: Partial<QueryObserverOptions<WishId["response"], WishId["error"], TData, TQueryData, TQueryKey>>;
    client?: WishId["client"]["parameters"];
} = {}): UseQueryResult<TData, WishId["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishIdQueryKey();
    const query = useQuery({
        ...wishIdQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WishId["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const wishIdSuspenseQueryKey = () => ["v5", { url: "/v1/wish/acquire/id" }] as const;
export type WishIdSuspenseQueryKey = ReturnType<typeof wishIdSuspenseQueryKey>;
export function wishIdSuspenseQueryOptions(options: WishId["client"]["parameters"] = {}) {
    const queryKey = wishIdSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishId["data"], WishId["error"]>({
                method: "get",
                url: `/v1/wish/acquire/id`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Fetch wish id
 * @summary Fetch wish id
 * @link /v1/wish/acquire/id
 */
export function useWishIdHookSuspense<TData = WishId["response"], TQueryKey extends QueryKey = WishIdSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<WishId["response"], WishId["error"], TData, TQueryKey>>;
    client?: WishId["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WishId["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishIdSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...wishIdSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WishId["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}