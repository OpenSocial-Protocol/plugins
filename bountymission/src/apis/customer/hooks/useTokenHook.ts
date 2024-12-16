import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TokenQueryResponse, TokenQueryParams } from "../models/Token";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type TokenClient = typeof client<TokenQueryResponse, Error, never>;
type Token = {
    data: TokenQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: TokenQueryParams;
    headerParams: never;
    response: TokenQueryResponse;
    client: {
        parameters: Partial<Parameters<TokenClient>[0]>;
        return: Awaited<ReturnType<TokenClient>>;
    };
};
export const tokenQueryKey = (params?: Token["queryParams"]) => ["v5", { url: "/v1/customer/credential/token" }, ...(params ? [params] : [])] as const;
export type TokenQueryKey = ReturnType<typeof tokenQueryKey>;
export function tokenQueryOptions(params?: Token["queryParams"], options: Token["client"]["parameters"] = {}) {
    const queryKey = tokenQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Token["data"], Token["error"]>({
                method: "get",
                url: `/v1/customer/credential/token`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 根据类别和资源，获取授权token，进行相应操作
 * @summary 获取资源授权token
 * @link /v1/customer/credential/token
 */
export function useTokenHook<TData = Token["response"], TQueryData = Token["response"], TQueryKey extends QueryKey = TokenQueryKey>(params?: Token["queryParams"], options: {
    query?: Partial<QueryObserverOptions<Token["response"], Token["error"], TData, TQueryData, TQueryKey>>;
    client?: Token["client"]["parameters"];
} = {}): UseQueryResult<TData, Token["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? tokenQueryKey(params);
    const query = useQuery({
        ...tokenQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Token["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const tokenSuspenseQueryKey = (params?: Token["queryParams"]) => ["v5", { url: "/v1/customer/credential/token" }, ...(params ? [params] : [])] as const;
export type TokenSuspenseQueryKey = ReturnType<typeof tokenSuspenseQueryKey>;
export function tokenSuspenseQueryOptions(params?: Token["queryParams"], options: Token["client"]["parameters"] = {}) {
    const queryKey = tokenSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Token["data"], Token["error"]>({
                method: "get",
                url: `/v1/customer/credential/token`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 根据类别和资源，获取授权token，进行相应操作
 * @summary 获取资源授权token
 * @link /v1/customer/credential/token
 */
export function useTokenHookSuspense<TData = Token["response"], TQueryKey extends QueryKey = TokenSuspenseQueryKey>(params?: Token["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<Token["response"], Token["error"], TData, TQueryKey>>;
    client?: Token["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Token["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? tokenSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...tokenSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Token["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}