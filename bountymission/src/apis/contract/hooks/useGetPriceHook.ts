import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetPriceQueryResponse, GetPriceQueryParams } from "../models/GetPrice";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetPriceClient = typeof client<GetPriceQueryResponse, Error, never>;
type GetPrice = {
    data: GetPriceQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetPriceQueryParams;
    headerParams: never;
    response: GetPriceQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPriceClient>[0]>;
        return: Awaited<ReturnType<GetPriceClient>>;
    };
};
export const getPriceQueryKey = (params: GetPrice["queryParams"]) => ["v5", { url: "/v1/price" }, ...(params ? [params] : [])] as const;
export type GetPriceQueryKey = ReturnType<typeof getPriceQueryKey>;
export function getPriceQueryOptions(params: GetPrice["queryParams"], options: GetPrice["client"]["parameters"] = {}) {
    const queryKey = getPriceQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetPrice["data"], GetPrice["error"]>({
                method: "get",
                url: `/v1/price`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get price
 * @summary get price
 * @link /v1/price
 */
export function useGetPriceHook<TData = GetPrice["response"], TQueryData = GetPrice["response"], TQueryKey extends QueryKey = GetPriceQueryKey>(params: GetPrice["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetPrice["response"], GetPrice["error"], TData, TQueryData, TQueryKey>>;
    client?: GetPrice["client"]["parameters"];
} = {}): UseQueryResult<TData, GetPrice["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getPriceQueryKey(params);
    const query = useQuery({
        ...getPriceQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetPrice["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getPriceSuspenseQueryKey = (params: GetPrice["queryParams"]) => ["v5", { url: "/v1/price" }, ...(params ? [params] : [])] as const;
export type GetPriceSuspenseQueryKey = ReturnType<typeof getPriceSuspenseQueryKey>;
export function getPriceSuspenseQueryOptions(params: GetPrice["queryParams"], options: GetPrice["client"]["parameters"] = {}) {
    const queryKey = getPriceSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetPrice["data"], GetPrice["error"]>({
                method: "get",
                url: `/v1/price`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get price
 * @summary get price
 * @link /v1/price
 */
export function useGetPriceHookSuspense<TData = GetPrice["response"], TQueryKey extends QueryKey = GetPriceSuspenseQueryKey>(params: GetPrice["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetPrice["response"], GetPrice["error"], TData, TQueryKey>>;
    client?: GetPrice["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetPrice["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getPriceSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getPriceSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetPrice["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}