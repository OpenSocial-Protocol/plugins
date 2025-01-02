import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetUserAuthInfoQueryResponse, GetUserAuthInfoQueryParams } from "../models/GetUserAuthInfo";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetUserAuthInfoClient = typeof client<GetUserAuthInfoQueryResponse, Error, never>;
type GetUserAuthInfo = {
    data: GetUserAuthInfoQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetUserAuthInfoQueryParams;
    headerParams: never;
    response: GetUserAuthInfoQueryResponse;
    client: {
        parameters: Partial<Parameters<GetUserAuthInfoClient>[0]>;
        return: Awaited<ReturnType<GetUserAuthInfoClient>>;
    };
};
export const getUserAuthInfoQueryKey = (params?: GetUserAuthInfo["queryParams"]) => ["v5", { url: "/v1/user/auth/info" }, ...(params ? [params] : [])] as const;
export type GetUserAuthInfoQueryKey = ReturnType<typeof getUserAuthInfoQueryKey>;
export function getUserAuthInfoQueryOptions(params?: GetUserAuthInfo["queryParams"], options: GetUserAuthInfo["client"]["parameters"] = {}) {
    const queryKey = getUserAuthInfoQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserAuthInfo["data"], GetUserAuthInfo["error"]>({
                method: "get",
                url: `/v1/user/auth/info`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户三方认证信息
 * @summary 获取用户三方认证信息
 * @link /v1/user/auth/info
 */
export function useGetUserAuthInfoHook<TData = GetUserAuthInfo["response"], TQueryData = GetUserAuthInfo["response"], TQueryKey extends QueryKey = GetUserAuthInfoQueryKey>(params?: GetUserAuthInfo["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetUserAuthInfo["response"], GetUserAuthInfo["error"], TData, TQueryData, TQueryKey>>;
    client?: GetUserAuthInfo["client"]["parameters"];
} = {}): UseQueryResult<TData, GetUserAuthInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserAuthInfoQueryKey(params);
    const query = useQuery({
        ...getUserAuthInfoQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetUserAuthInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getUserAuthInfoSuspenseQueryKey = (params?: GetUserAuthInfo["queryParams"]) => ["v5", { url: "/v1/user/auth/info" }, ...(params ? [params] : [])] as const;
export type GetUserAuthInfoSuspenseQueryKey = ReturnType<typeof getUserAuthInfoSuspenseQueryKey>;
export function getUserAuthInfoSuspenseQueryOptions(params?: GetUserAuthInfo["queryParams"], options: GetUserAuthInfo["client"]["parameters"] = {}) {
    const queryKey = getUserAuthInfoSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserAuthInfo["data"], GetUserAuthInfo["error"]>({
                method: "get",
                url: `/v1/user/auth/info`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户三方认证信息
 * @summary 获取用户三方认证信息
 * @link /v1/user/auth/info
 */
export function useGetUserAuthInfoHookSuspense<TData = GetUserAuthInfo["response"], TQueryKey extends QueryKey = GetUserAuthInfoSuspenseQueryKey>(params?: GetUserAuthInfo["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetUserAuthInfo["response"], GetUserAuthInfo["error"], TData, TQueryKey>>;
    client?: GetUserAuthInfo["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetUserAuthInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserAuthInfoSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getUserAuthInfoSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetUserAuthInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}