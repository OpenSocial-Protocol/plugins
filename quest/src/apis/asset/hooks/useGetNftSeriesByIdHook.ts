import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetNftSeriesByIdQueryResponse, GetNftSeriesByIdPathParams, GetNftSeriesByIdQueryParams } from "../models/GetNftSeriesById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetNftSeriesByIdClient = typeof client<GetNftSeriesByIdQueryResponse, Error, never>;
type GetNftSeriesById = {
    data: GetNftSeriesByIdQueryResponse;
    error: Error;
    request: never;
    pathParams: GetNftSeriesByIdPathParams;
    queryParams: GetNftSeriesByIdQueryParams;
    headerParams: never;
    response: GetNftSeriesByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetNftSeriesByIdClient>[0]>;
        return: Awaited<ReturnType<GetNftSeriesByIdClient>>;
    };
};
export const getNftSeriesByIdQueryKey = (type: GetNftSeriesByIdPathParams["type"], series: GetNftSeriesByIdPathParams["series"], params?: GetNftSeriesById["queryParams"]) => ["v5", { url: "/v2/assets/nft/series/:type/:series", params: { type: type, series: series } }, ...(params ? [params] : [])] as const;
export type GetNftSeriesByIdQueryKey = ReturnType<typeof getNftSeriesByIdQueryKey>;
export function getNftSeriesByIdQueryOptions(type: GetNftSeriesByIdPathParams["type"], series: GetNftSeriesByIdPathParams["series"], params?: GetNftSeriesById["queryParams"], options: GetNftSeriesById["client"]["parameters"] = {}) {
    const queryKey = getNftSeriesByIdQueryKey(type, series, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetNftSeriesById["data"], GetNftSeriesById["error"]>({
                method: "get",
                url: `/v2/assets/nft/series/${type}/${series}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get nft series by series
 * @summary get nft series by series
 * @link /v2/assets/nft/series/:type/:series
 */
export function useGetNftSeriesByIdHook<TData = GetNftSeriesById["response"], TQueryData = GetNftSeriesById["response"], TQueryKey extends QueryKey = GetNftSeriesByIdQueryKey>(type: GetNftSeriesByIdPathParams["type"], series: GetNftSeriesByIdPathParams["series"], params?: GetNftSeriesById["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetNftSeriesById["response"], GetNftSeriesById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetNftSeriesById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetNftSeriesById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getNftSeriesByIdQueryKey(type, series, params);
    const query = useQuery({
        ...getNftSeriesByIdQueryOptions(type, series, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetNftSeriesById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getNftSeriesByIdSuspenseQueryKey = (type: GetNftSeriesByIdPathParams["type"], series: GetNftSeriesByIdPathParams["series"], params?: GetNftSeriesById["queryParams"]) => ["v5", { url: "/v2/assets/nft/series/:type/:series", params: { type: type, series: series } }, ...(params ? [params] : [])] as const;
export type GetNftSeriesByIdSuspenseQueryKey = ReturnType<typeof getNftSeriesByIdSuspenseQueryKey>;
export function getNftSeriesByIdSuspenseQueryOptions(type: GetNftSeriesByIdPathParams["type"], series: GetNftSeriesByIdPathParams["series"], params?: GetNftSeriesById["queryParams"], options: GetNftSeriesById["client"]["parameters"] = {}) {
    const queryKey = getNftSeriesByIdSuspenseQueryKey(type, series, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetNftSeriesById["data"], GetNftSeriesById["error"]>({
                method: "get",
                url: `/v2/assets/nft/series/${type}/${series}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get nft series by series
 * @summary get nft series by series
 * @link /v2/assets/nft/series/:type/:series
 */
export function useGetNftSeriesByIdHookSuspense<TData = GetNftSeriesById["response"], TQueryKey extends QueryKey = GetNftSeriesByIdSuspenseQueryKey>(type: GetNftSeriesByIdPathParams["type"], series: GetNftSeriesByIdPathParams["series"], params?: GetNftSeriesById["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetNftSeriesById["response"], GetNftSeriesById["error"], TData, TQueryKey>>;
    client?: GetNftSeriesById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetNftSeriesById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getNftSeriesByIdSuspenseQueryKey(type, series, params);
    const query = useSuspenseQuery({
        ...getNftSeriesByIdSuspenseQueryOptions(type, series, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetNftSeriesById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}