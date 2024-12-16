import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWalletTransactionQueryResponse, GetWalletTransactionQueryParams } from "../models/GetWalletTransaction";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWalletTransactionClient = typeof client<GetWalletTransactionQueryResponse, Error, never>;
type GetWalletTransaction = {
    data: GetWalletTransactionQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetWalletTransactionQueryParams;
    headerParams: never;
    response: GetWalletTransactionQueryResponse;
    client: {
        parameters: Partial<Parameters<GetWalletTransactionClient>[0]>;
        return: Awaited<ReturnType<GetWalletTransactionClient>>;
    };
};
export const getWalletTransactionQueryKey = (params: GetWalletTransaction["queryParams"]) => ["v5", { url: "/v1/assets/wallet/transaction" }, ...(params ? [params] : [])] as const;
export type GetWalletTransactionQueryKey = ReturnType<typeof getWalletTransactionQueryKey>;
export function getWalletTransactionQueryOptions(params: GetWalletTransaction["queryParams"], options: GetWalletTransaction["client"]["parameters"] = {}) {
    const queryKey = getWalletTransactionQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWalletTransaction["data"], GetWalletTransaction["error"]>({
                method: "get",
                url: `/v1/assets/wallet/transaction`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get wallet transactions
 * @summary /assets/wallet/transaction
 * @link /v1/assets/wallet/transaction
 */
export function useGetWalletTransactionHook<TData = GetWalletTransaction["response"], TQueryData = GetWalletTransaction["response"], TQueryKey extends QueryKey = GetWalletTransactionQueryKey>(params: GetWalletTransaction["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetWalletTransaction["response"], GetWalletTransaction["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWalletTransaction["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWalletTransaction["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWalletTransactionQueryKey(params);
    const query = useQuery({
        ...getWalletTransactionQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWalletTransaction["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWalletTransactionSuspenseQueryKey = (params: GetWalletTransaction["queryParams"]) => ["v5", { url: "/v1/assets/wallet/transaction" }, ...(params ? [params] : [])] as const;
export type GetWalletTransactionSuspenseQueryKey = ReturnType<typeof getWalletTransactionSuspenseQueryKey>;
export function getWalletTransactionSuspenseQueryOptions(params: GetWalletTransaction["queryParams"], options: GetWalletTransaction["client"]["parameters"] = {}) {
    const queryKey = getWalletTransactionSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWalletTransaction["data"], GetWalletTransaction["error"]>({
                method: "get",
                url: `/v1/assets/wallet/transaction`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get wallet transactions
 * @summary /assets/wallet/transaction
 * @link /v1/assets/wallet/transaction
 */
export function useGetWalletTransactionHookSuspense<TData = GetWalletTransaction["response"], TQueryKey extends QueryKey = GetWalletTransactionSuspenseQueryKey>(params: GetWalletTransaction["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWalletTransaction["response"], GetWalletTransaction["error"], TData, TQueryKey>>;
    client?: GetWalletTransaction["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWalletTransaction["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWalletTransactionSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getWalletTransactionSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWalletTransaction["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}