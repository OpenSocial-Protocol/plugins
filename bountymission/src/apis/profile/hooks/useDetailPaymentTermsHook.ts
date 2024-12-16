import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { DetailPaymentTermsQueryResponse, DetailPaymentTermsPathParams } from "../models/DetailPaymentTerms";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type DetailPaymentTermsClient = typeof client<DetailPaymentTermsQueryResponse, Error, never>;
type DetailPaymentTerms = {
    data: DetailPaymentTermsQueryResponse;
    error: Error;
    request: never;
    pathParams: DetailPaymentTermsPathParams;
    queryParams: never;
    headerParams: never;
    response: DetailPaymentTermsQueryResponse;
    client: {
        parameters: Partial<Parameters<DetailPaymentTermsClient>[0]>;
        return: Awaited<ReturnType<DetailPaymentTermsClient>>;
    };
};
export const detailPaymentTermsQueryKey = (id: DetailPaymentTermsPathParams["id"]) => ["v5", { url: "/v1/customer/payment/terms/:id", params: { id: id } }] as const;
export type DetailPaymentTermsQueryKey = ReturnType<typeof detailPaymentTermsQueryKey>;
export function detailPaymentTermsQueryOptions(id: DetailPaymentTermsPathParams["id"], options: DetailPaymentTerms["client"]["parameters"] = {}) {
    const queryKey = detailPaymentTermsQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<DetailPaymentTerms["data"], DetailPaymentTerms["error"]>({
                method: "get",
                url: `/v1/customer/payment/terms/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 查询卡明细
 * @summary 查询卡明细
 * @link /v1/customer/payment/terms/:id
 */
export function useDetailPaymentTermsHook<TData = DetailPaymentTerms["response"], TQueryData = DetailPaymentTerms["response"], TQueryKey extends QueryKey = DetailPaymentTermsQueryKey>(id: DetailPaymentTermsPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<DetailPaymentTerms["response"], DetailPaymentTerms["error"], TData, TQueryData, TQueryKey>>;
    client?: DetailPaymentTerms["client"]["parameters"];
} = {}): UseQueryResult<TData, DetailPaymentTerms["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? detailPaymentTermsQueryKey(id);
    const query = useQuery({
        ...detailPaymentTermsQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, DetailPaymentTerms["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const detailPaymentTermsSuspenseQueryKey = (id: DetailPaymentTermsPathParams["id"]) => ["v5", { url: "/v1/customer/payment/terms/:id", params: { id: id } }] as const;
export type DetailPaymentTermsSuspenseQueryKey = ReturnType<typeof detailPaymentTermsSuspenseQueryKey>;
export function detailPaymentTermsSuspenseQueryOptions(id: DetailPaymentTermsPathParams["id"], options: DetailPaymentTerms["client"]["parameters"] = {}) {
    const queryKey = detailPaymentTermsSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<DetailPaymentTerms["data"], DetailPaymentTerms["error"]>({
                method: "get",
                url: `/v1/customer/payment/terms/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 查询卡明细
 * @summary 查询卡明细
 * @link /v1/customer/payment/terms/:id
 */
export function useDetailPaymentTermsHookSuspense<TData = DetailPaymentTerms["response"], TQueryKey extends QueryKey = DetailPaymentTermsSuspenseQueryKey>(id: DetailPaymentTermsPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<DetailPaymentTerms["response"], DetailPaymentTerms["error"], TData, TQueryKey>>;
    client?: DetailPaymentTerms["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, DetailPaymentTerms["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? detailPaymentTermsSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...detailPaymentTermsSuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, DetailPaymentTerms["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}