import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListPaymentTermsQueryResponse, ListPaymentTermsQueryParams } from "../models/ListPaymentTerms";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListPaymentTermsClient = typeof client<ListPaymentTermsQueryResponse, Error, never>;
type ListPaymentTerms = {
    data: ListPaymentTermsQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ListPaymentTermsQueryParams;
    headerParams: never;
    response: ListPaymentTermsQueryResponse;
    client: {
        parameters: Partial<Parameters<ListPaymentTermsClient>[0]>;
        return: Awaited<ReturnType<ListPaymentTermsClient>>;
    };
};
export const listPaymentTermsQueryKey = (params: ListPaymentTerms["queryParams"]) => ["v5", { url: "/v1/customer/payment/terms" }, ...(params ? [params] : [])] as const;
export type ListPaymentTermsQueryKey = ReturnType<typeof listPaymentTermsQueryKey>;
export function listPaymentTermsQueryOptions(params: ListPaymentTerms["queryParams"], options: ListPaymentTerms["client"]["parameters"] = {}) {
    const queryKey = listPaymentTermsQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListPaymentTerms["data"], ListPaymentTerms["error"]>({
                method: "get",
                url: `/v1/customer/payment/terms`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 根据卡用途查询卡列表
 * @summary 根据卡用途查询卡列表
 * @link /v1/customer/payment/terms
 */
export function useListPaymentTermsHook<TData = ListPaymentTerms["response"], TQueryData = ListPaymentTerms["response"], TQueryKey extends QueryKey = ListPaymentTermsQueryKey>(params: ListPaymentTerms["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListPaymentTerms["response"], ListPaymentTerms["error"], TData, TQueryData, TQueryKey>>;
    client?: ListPaymentTerms["client"]["parameters"];
} = {}): UseQueryResult<TData, ListPaymentTerms["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listPaymentTermsQueryKey(params);
    const query = useQuery({
        ...listPaymentTermsQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListPaymentTerms["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listPaymentTermsSuspenseQueryKey = (params: ListPaymentTerms["queryParams"]) => ["v5", { url: "/v1/customer/payment/terms" }, ...(params ? [params] : [])] as const;
export type ListPaymentTermsSuspenseQueryKey = ReturnType<typeof listPaymentTermsSuspenseQueryKey>;
export function listPaymentTermsSuspenseQueryOptions(params: ListPaymentTerms["queryParams"], options: ListPaymentTerms["client"]["parameters"] = {}) {
    const queryKey = listPaymentTermsSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListPaymentTerms["data"], ListPaymentTerms["error"]>({
                method: "get",
                url: `/v1/customer/payment/terms`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 根据卡用途查询卡列表
 * @summary 根据卡用途查询卡列表
 * @link /v1/customer/payment/terms
 */
export function useListPaymentTermsHookSuspense<TData = ListPaymentTerms["response"], TQueryKey extends QueryKey = ListPaymentTermsSuspenseQueryKey>(params: ListPaymentTerms["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListPaymentTerms["response"], ListPaymentTerms["error"], TData, TQueryKey>>;
    client?: ListPaymentTerms["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListPaymentTerms["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listPaymentTermsSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...listPaymentTermsSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListPaymentTerms["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}