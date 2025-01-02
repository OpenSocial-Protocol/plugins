import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetUserTransactionListQueryResponse, GetUserTransactionListQueryParams } from "../models/GetUserTransactionList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetUserTransactionListClient = typeof client<GetUserTransactionListQueryResponse, Error, never>;
type GetUserTransactionList = {
    data: GetUserTransactionListQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetUserTransactionListQueryParams;
    headerParams: never;
    response: GetUserTransactionListQueryResponse;
    client: {
        parameters: Partial<Parameters<GetUserTransactionListClient>[0]>;
        return: Awaited<ReturnType<GetUserTransactionListClient>>;
    };
};
export const getUserTransactionListQueryKey = (params?: GetUserTransactionList["queryParams"]) => ["v5", { url: "/v1/user/transaction" }, ...(params ? [params] : [])] as const;
export type GetUserTransactionListQueryKey = ReturnType<typeof getUserTransactionListQueryKey>;
export function getUserTransactionListQueryOptions(params?: GetUserTransactionList["queryParams"], options: GetUserTransactionList["client"]["parameters"] = {}) {
    const queryKey = getUserTransactionListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserTransactionList["data"], GetUserTransactionList["error"]>({
                method: "get",
                url: `/v1/user/transaction`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户流水
 * @summary 获取用户流水
 * @link /v1/user/transaction
 */
export function useGetUserTransactionListHook<TData = GetUserTransactionList["response"], TQueryData = GetUserTransactionList["response"], TQueryKey extends QueryKey = GetUserTransactionListQueryKey>(params?: GetUserTransactionList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetUserTransactionList["response"], GetUserTransactionList["error"], TData, TQueryData, TQueryKey>>;
    client?: GetUserTransactionList["client"]["parameters"];
} = {}): UseQueryResult<TData, GetUserTransactionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserTransactionListQueryKey(params);
    const query = useQuery({
        ...getUserTransactionListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetUserTransactionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getUserTransactionListSuspenseQueryKey = (params?: GetUserTransactionList["queryParams"]) => ["v5", { url: "/v1/user/transaction" }, ...(params ? [params] : [])] as const;
export type GetUserTransactionListSuspenseQueryKey = ReturnType<typeof getUserTransactionListSuspenseQueryKey>;
export function getUserTransactionListSuspenseQueryOptions(params?: GetUserTransactionList["queryParams"], options: GetUserTransactionList["client"]["parameters"] = {}) {
    const queryKey = getUserTransactionListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserTransactionList["data"], GetUserTransactionList["error"]>({
                method: "get",
                url: `/v1/user/transaction`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户流水
 * @summary 获取用户流水
 * @link /v1/user/transaction
 */
export function useGetUserTransactionListHookSuspense<TData = GetUserTransactionList["response"], TQueryKey extends QueryKey = GetUserTransactionListSuspenseQueryKey>(params?: GetUserTransactionList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetUserTransactionList["response"], GetUserTransactionList["error"], TData, TQueryKey>>;
    client?: GetUserTransactionList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetUserTransactionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserTransactionListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getUserTransactionListSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetUserTransactionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}