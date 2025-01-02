import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NftSeriesQueryResponse, NftSeriesPathParams } from "../models/NftSeries";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type NftSeriesClient = typeof client<NftSeriesQueryResponse, Error, never>;
type NftSeries = {
    data: NftSeriesQueryResponse;
    error: Error;
    request: never;
    pathParams: NftSeriesPathParams;
    queryParams: never;
    headerParams: never;
    response: NftSeriesQueryResponse;
    client: {
        parameters: Partial<Parameters<NftSeriesClient>[0]>;
        return: Awaited<ReturnType<NftSeriesClient>>;
    };
};
export const nftSeriesQueryKey = (type: NftSeriesPathParams["type"]) => ["v5", { url: "/v1/assets/nft/series/:type", params: { type: type } }] as const;
export type NftSeriesQueryKey = ReturnType<typeof nftSeriesQueryKey>;
export function nftSeriesQueryOptions(type: NftSeriesPathParams["type"], options: NftSeries["client"]["parameters"] = {}) {
    const queryKey = nftSeriesQueryKey(type);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftSeries["data"], NftSeries["error"]>({
                method: "get",
                url: `/v1/assets/nft/series/${type}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get nft series
 * @summary get nft series
 * @link /v1/assets/nft/series/:type
 */
export function useNftSeriesHook<TData = NftSeries["response"], TQueryData = NftSeries["response"], TQueryKey extends QueryKey = NftSeriesQueryKey>(type: NftSeriesPathParams["type"], options: {
    query?: Partial<QueryObserverOptions<NftSeries["response"], NftSeries["error"], TData, TQueryData, TQueryKey>>;
    client?: NftSeries["client"]["parameters"];
} = {}): UseQueryResult<TData, NftSeries["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftSeriesQueryKey(type);
    const query = useQuery({
        ...nftSeriesQueryOptions(type, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, NftSeries["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const nftSeriesSuspenseQueryKey = (type: NftSeriesPathParams["type"]) => ["v5", { url: "/v1/assets/nft/series/:type", params: { type: type } }] as const;
export type NftSeriesSuspenseQueryKey = ReturnType<typeof nftSeriesSuspenseQueryKey>;
export function nftSeriesSuspenseQueryOptions(type: NftSeriesPathParams["type"], options: NftSeries["client"]["parameters"] = {}) {
    const queryKey = nftSeriesSuspenseQueryKey(type);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftSeries["data"], NftSeries["error"]>({
                method: "get",
                url: `/v1/assets/nft/series/${type}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get nft series
 * @summary get nft series
 * @link /v1/assets/nft/series/:type
 */
export function useNftSeriesHookSuspense<TData = NftSeries["response"], TQueryKey extends QueryKey = NftSeriesSuspenseQueryKey>(type: NftSeriesPathParams["type"], options: {
    query?: Partial<UseSuspenseQueryOptions<NftSeries["response"], NftSeries["error"], TData, TQueryKey>>;
    client?: NftSeries["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, NftSeries["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftSeriesSuspenseQueryKey(type);
    const query = useSuspenseQuery({
        ...nftSeriesSuspenseQueryOptions(type, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, NftSeries["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}