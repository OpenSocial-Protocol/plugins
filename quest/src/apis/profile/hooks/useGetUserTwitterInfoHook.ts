import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetUserTwitterInfoQueryResponse, GetUserTwitterInfoQueryParams } from "../models/GetUserTwitterInfo";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetUserTwitterInfoClient = typeof client<GetUserTwitterInfoQueryResponse, Error, never>;
type GetUserTwitterInfo = {
    data: GetUserTwitterInfoQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetUserTwitterInfoQueryParams;
    headerParams: never;
    response: GetUserTwitterInfoQueryResponse;
    client: {
        parameters: Partial<Parameters<GetUserTwitterInfoClient>[0]>;
        return: Awaited<ReturnType<GetUserTwitterInfoClient>>;
    };
};
export const getUserTwitterInfoQueryKey = (params?: GetUserTwitterInfo["queryParams"]) => ["v5", { url: "/v1/user/twitter/info" }, ...(params ? [params] : [])] as const;
export type GetUserTwitterInfoQueryKey = ReturnType<typeof getUserTwitterInfoQueryKey>;
export function getUserTwitterInfoQueryOptions(params?: GetUserTwitterInfo["queryParams"], options: GetUserTwitterInfo["client"]["parameters"] = {}) {
    const queryKey = getUserTwitterInfoQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserTwitterInfo["data"], GetUserTwitterInfo["error"]>({
                method: "get",
                url: `/v1/user/twitter/info`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户twitter信息
 * @summary 获取用户twitter信息
 * @link /v1/user/twitter/info
 */
export function useGetUserTwitterInfoHook<TData = GetUserTwitterInfo["response"], TQueryData = GetUserTwitterInfo["response"], TQueryKey extends QueryKey = GetUserTwitterInfoQueryKey>(params?: GetUserTwitterInfo["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetUserTwitterInfo["response"], GetUserTwitterInfo["error"], TData, TQueryData, TQueryKey>>;
    client?: GetUserTwitterInfo["client"]["parameters"];
} = {}): UseQueryResult<TData, GetUserTwitterInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserTwitterInfoQueryKey(params);
    const query = useQuery({
        ...getUserTwitterInfoQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetUserTwitterInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getUserTwitterInfoSuspenseQueryKey = (params?: GetUserTwitterInfo["queryParams"]) => ["v5", { url: "/v1/user/twitter/info" }, ...(params ? [params] : [])] as const;
export type GetUserTwitterInfoSuspenseQueryKey = ReturnType<typeof getUserTwitterInfoSuspenseQueryKey>;
export function getUserTwitterInfoSuspenseQueryOptions(params?: GetUserTwitterInfo["queryParams"], options: GetUserTwitterInfo["client"]["parameters"] = {}) {
    const queryKey = getUserTwitterInfoSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserTwitterInfo["data"], GetUserTwitterInfo["error"]>({
                method: "get",
                url: `/v1/user/twitter/info`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户twitter信息
 * @summary 获取用户twitter信息
 * @link /v1/user/twitter/info
 */
export function useGetUserTwitterInfoHookSuspense<TData = GetUserTwitterInfo["response"], TQueryKey extends QueryKey = GetUserTwitterInfoSuspenseQueryKey>(params?: GetUserTwitterInfo["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetUserTwitterInfo["response"], GetUserTwitterInfo["error"], TData, TQueryKey>>;
    client?: GetUserTwitterInfo["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetUserTwitterInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserTwitterInfoSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getUserTwitterInfoSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetUserTwitterInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}