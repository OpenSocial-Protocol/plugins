import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListBanksQueryResponse } from "../models/ListBanks";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListBanksClient = typeof client<ListBanksQueryResponse, Error, never>;
type ListBanks = {
    data: ListBanksQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ListBanksQueryResponse;
    client: {
        parameters: Partial<Parameters<ListBanksClient>[0]>;
        return: Awaited<ReturnType<ListBanksClient>>;
    };
};
export const listBanksQueryKey = () => ["v5", { url: "/v1/customer/payment/banks" }] as const;
export type ListBanksQueryKey = ReturnType<typeof listBanksQueryKey>;
export function listBanksQueryOptions(options: ListBanks["client"]["parameters"] = {}) {
    const queryKey = listBanksQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListBanks["data"], ListBanks["error"]>({
                method: "get",
                url: `/v1/customer/payment/banks`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 查询用户所有卡
 * @summary 查询用户所有卡
 * @link /v1/customer/payment/banks
 */
export function useListBanksHook<TData = ListBanks["response"], TQueryData = ListBanks["response"], TQueryKey extends QueryKey = ListBanksQueryKey>(options: {
    query?: Partial<QueryObserverOptions<ListBanks["response"], ListBanks["error"], TData, TQueryData, TQueryKey>>;
    client?: ListBanks["client"]["parameters"];
} = {}): UseQueryResult<TData, ListBanks["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listBanksQueryKey();
    const query = useQuery({
        ...listBanksQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListBanks["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listBanksSuspenseQueryKey = () => ["v5", { url: "/v1/customer/payment/banks" }] as const;
export type ListBanksSuspenseQueryKey = ReturnType<typeof listBanksSuspenseQueryKey>;
export function listBanksSuspenseQueryOptions(options: ListBanks["client"]["parameters"] = {}) {
    const queryKey = listBanksSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListBanks["data"], ListBanks["error"]>({
                method: "get",
                url: `/v1/customer/payment/banks`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 查询用户所有卡
 * @summary 查询用户所有卡
 * @link /v1/customer/payment/banks
 */
export function useListBanksHookSuspense<TData = ListBanks["response"], TQueryKey extends QueryKey = ListBanksSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<ListBanks["response"], ListBanks["error"], TData, TQueryKey>>;
    client?: ListBanks["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListBanks["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listBanksSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...listBanksSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListBanks["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}