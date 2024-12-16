import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WishApplyIdAcquireQueryResponse } from "../models/WishApplyIdAcquire";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WishApplyIdAcquireClient = typeof client<WishApplyIdAcquireQueryResponse, Error, never>;
type WishApplyIdAcquire = {
    data: WishApplyIdAcquireQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: WishApplyIdAcquireQueryResponse;
    client: {
        parameters: Partial<Parameters<WishApplyIdAcquireClient>[0]>;
        return: Awaited<ReturnType<WishApplyIdAcquireClient>>;
    };
};
export const wishApplyIdAcquireQueryKey = () => ["v5", { url: "/v1/wish/acquire/applyId" }] as const;
export type WishApplyIdAcquireQueryKey = ReturnType<typeof wishApplyIdAcquireQueryKey>;
export function wishApplyIdAcquireQueryOptions(options: WishApplyIdAcquire["client"]["parameters"] = {}) {
    const queryKey = wishApplyIdAcquireQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishApplyIdAcquire["data"], WishApplyIdAcquire["error"]>({
                method: "get",
                url: `/v1/wish/acquire/applyId`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Obtaining Next Wish Apply ID
 * @summary Obtaining Next Wish Apply ID
 * @link /v1/wish/acquire/applyId
 */
export function useWishApplyIdAcquireHook<TData = WishApplyIdAcquire["response"], TQueryData = WishApplyIdAcquire["response"], TQueryKey extends QueryKey = WishApplyIdAcquireQueryKey>(options: {
    query?: Partial<QueryObserverOptions<WishApplyIdAcquire["response"], WishApplyIdAcquire["error"], TData, TQueryData, TQueryKey>>;
    client?: WishApplyIdAcquire["client"]["parameters"];
} = {}): UseQueryResult<TData, WishApplyIdAcquire["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishApplyIdAcquireQueryKey();
    const query = useQuery({
        ...wishApplyIdAcquireQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WishApplyIdAcquire["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const wishApplyIdAcquireSuspenseQueryKey = () => ["v5", { url: "/v1/wish/acquire/applyId" }] as const;
export type WishApplyIdAcquireSuspenseQueryKey = ReturnType<typeof wishApplyIdAcquireSuspenseQueryKey>;
export function wishApplyIdAcquireSuspenseQueryOptions(options: WishApplyIdAcquire["client"]["parameters"] = {}) {
    const queryKey = wishApplyIdAcquireSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WishApplyIdAcquire["data"], WishApplyIdAcquire["error"]>({
                method: "get",
                url: `/v1/wish/acquire/applyId`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Obtaining Next Wish Apply ID
 * @summary Obtaining Next Wish Apply ID
 * @link /v1/wish/acquire/applyId
 */
export function useWishApplyIdAcquireHookSuspense<TData = WishApplyIdAcquire["response"], TQueryKey extends QueryKey = WishApplyIdAcquireSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<WishApplyIdAcquire["response"], WishApplyIdAcquire["error"], TData, TQueryKey>>;
    client?: WishApplyIdAcquire["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WishApplyIdAcquire["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? wishApplyIdAcquireSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...wishApplyIdAcquireSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WishApplyIdAcquire["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}