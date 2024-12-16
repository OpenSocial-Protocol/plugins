import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { RefreshTokenQueryResponse, RefreshTokenQueryParams } from "../models/RefreshToken";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type RefreshTokenClient = typeof client<RefreshTokenQueryResponse, Error, never>;
type RefreshToken = {
    data: RefreshTokenQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: RefreshTokenQueryParams;
    headerParams: never;
    response: RefreshTokenQueryResponse;
    client: {
        parameters: Partial<Parameters<RefreshTokenClient>[0]>;
        return: Awaited<ReturnType<RefreshTokenClient>>;
    };
};
export const refreshTokenQueryKey = (params: RefreshToken["queryParams"]) => ["v5", { url: "/v1/customer/auth/token" }, ...(params ? [params] : [])] as const;
export type RefreshTokenQueryKey = ReturnType<typeof refreshTokenQueryKey>;
export function refreshTokenQueryOptions(params: RefreshToken["queryParams"], options: RefreshToken["client"]["parameters"] = {}) {
    const queryKey = refreshTokenQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<RefreshToken["data"], RefreshToken["error"]>({
                method: "get",
                url: `/v1/customer/auth/token`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取token
 * @summary 获取token
 * @link /v1/customer/auth/token
 */
export function useRefreshTokenHook<TData = RefreshToken["response"], TQueryData = RefreshToken["response"], TQueryKey extends QueryKey = RefreshTokenQueryKey>(params: RefreshToken["queryParams"], options: {
    query?: Partial<QueryObserverOptions<RefreshToken["response"], RefreshToken["error"], TData, TQueryData, TQueryKey>>;
    client?: RefreshToken["client"]["parameters"];
} = {}): UseQueryResult<TData, RefreshToken["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? refreshTokenQueryKey(params);
    const query = useQuery({
        ...refreshTokenQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, RefreshToken["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const refreshTokenSuspenseQueryKey = (params: RefreshToken["queryParams"]) => ["v5", { url: "/v1/customer/auth/token" }, ...(params ? [params] : [])] as const;
export type RefreshTokenSuspenseQueryKey = ReturnType<typeof refreshTokenSuspenseQueryKey>;
export function refreshTokenSuspenseQueryOptions(params: RefreshToken["queryParams"], options: RefreshToken["client"]["parameters"] = {}) {
    const queryKey = refreshTokenSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<RefreshToken["data"], RefreshToken["error"]>({
                method: "get",
                url: `/v1/customer/auth/token`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取token
 * @summary 获取token
 * @link /v1/customer/auth/token
 */
export function useRefreshTokenHookSuspense<TData = RefreshToken["response"], TQueryKey extends QueryKey = RefreshTokenSuspenseQueryKey>(params: RefreshToken["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<RefreshToken["response"], RefreshToken["error"], TData, TQueryKey>>;
    client?: RefreshToken["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, RefreshToken["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? refreshTokenSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...refreshTokenSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, RefreshToken["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}