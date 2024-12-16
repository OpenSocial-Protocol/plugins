import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWishTagQueryResponse, GetWishTagQueryParams } from "../models/GetWishTag";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWishTagClient = typeof client<GetWishTagQueryResponse, Error, never>;
type GetWishTag = {
    data: GetWishTagQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetWishTagQueryParams;
    headerParams: never;
    response: GetWishTagQueryResponse;
    client: {
        parameters: Partial<Parameters<GetWishTagClient>[0]>;
        return: Awaited<ReturnType<GetWishTagClient>>;
    };
};
export const getWishTagQueryKey = (params?: GetWishTag["queryParams"]) => ["v5", { url: "/v1/wish/tag" }, ...(params ? [params] : [])] as const;
export type GetWishTagQueryKey = ReturnType<typeof getWishTagQueryKey>;
export function getWishTagQueryOptions(params?: GetWishTag["queryParams"], options: GetWishTag["client"]["parameters"] = {}) {
    const queryKey = getWishTagQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWishTag["data"], GetWishTag["error"]>({
                method: "get",
                url: `/v1/wish/tag`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取wish tag
 * @summary 获取wish tag
 * @link /v1/wish/tag
 */
export function useGetWishTagHook<TData = GetWishTag["response"], TQueryData = GetWishTag["response"], TQueryKey extends QueryKey = GetWishTagQueryKey>(params?: GetWishTag["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetWishTag["response"], GetWishTag["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWishTag["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWishTag["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWishTagQueryKey(params);
    const query = useQuery({
        ...getWishTagQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWishTag["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWishTagSuspenseQueryKey = (params?: GetWishTag["queryParams"]) => ["v5", { url: "/v1/wish/tag" }, ...(params ? [params] : [])] as const;
export type GetWishTagSuspenseQueryKey = ReturnType<typeof getWishTagSuspenseQueryKey>;
export function getWishTagSuspenseQueryOptions(params?: GetWishTag["queryParams"], options: GetWishTag["client"]["parameters"] = {}) {
    const queryKey = getWishTagSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWishTag["data"], GetWishTag["error"]>({
                method: "get",
                url: `/v1/wish/tag`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取wish tag
 * @summary 获取wish tag
 * @link /v1/wish/tag
 */
export function useGetWishTagHookSuspense<TData = GetWishTag["response"], TQueryKey extends QueryKey = GetWishTagSuspenseQueryKey>(params?: GetWishTag["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWishTag["response"], GetWishTag["error"], TData, TQueryKey>>;
    client?: GetWishTag["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWishTag["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWishTagSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getWishTagSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWishTag["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}