import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetGasAccountQueryResponse } from "../models/GetGasAccount";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetGasAccountClient = typeof client<GetGasAccountQueryResponse, Error, never>;
type GetGasAccount = {
    data: GetGasAccountQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetGasAccountQueryResponse;
    client: {
        parameters: Partial<Parameters<GetGasAccountClient>[0]>;
        return: Awaited<ReturnType<GetGasAccountClient>>;
    };
};
export const getGasAccountQueryKey = () => ["v5", { url: "/v1/contract/gas/account" }] as const;
export type GetGasAccountQueryKey = ReturnType<typeof getGasAccountQueryKey>;
export function getGasAccountQueryOptions(options: GetGasAccount["client"]["parameters"] = {}) {
    const queryKey = getGasAccountQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetGasAccount["data"], GetGasAccount["error"]>({
                method: "get",
                url: `/v1/contract/gas/account`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get gas account
 * @summary get gas account
 * @link /v1/contract/gas/account
 */
export function useGetGasAccountHook<TData = GetGasAccount["response"], TQueryData = GetGasAccount["response"], TQueryKey extends QueryKey = GetGasAccountQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetGasAccount["response"], GetGasAccount["error"], TData, TQueryData, TQueryKey>>;
    client?: GetGasAccount["client"]["parameters"];
} = {}): UseQueryResult<TData, GetGasAccount["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getGasAccountQueryKey();
    const query = useQuery({
        ...getGasAccountQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetGasAccount["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getGasAccountSuspenseQueryKey = () => ["v5", { url: "/v1/contract/gas/account" }] as const;
export type GetGasAccountSuspenseQueryKey = ReturnType<typeof getGasAccountSuspenseQueryKey>;
export function getGasAccountSuspenseQueryOptions(options: GetGasAccount["client"]["parameters"] = {}) {
    const queryKey = getGasAccountSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetGasAccount["data"], GetGasAccount["error"]>({
                method: "get",
                url: `/v1/contract/gas/account`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get gas account
 * @summary get gas account
 * @link /v1/contract/gas/account
 */
export function useGetGasAccountHookSuspense<TData = GetGasAccount["response"], TQueryKey extends QueryKey = GetGasAccountSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetGasAccount["response"], GetGasAccount["error"], TData, TQueryKey>>;
    client?: GetGasAccount["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetGasAccount["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getGasAccountSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getGasAccountSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetGasAccount["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}