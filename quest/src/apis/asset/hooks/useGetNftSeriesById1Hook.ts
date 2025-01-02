import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetNftSeriesById1QueryResponse, GetNftSeriesById1PathParams, GetNftSeriesById1QueryParams } from "../models/GetNftSeriesById1";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetNftSeriesById1Client = typeof client<GetNftSeriesById1QueryResponse, Error, never>;
type GetNftSeriesById1 = {
    data: GetNftSeriesById1QueryResponse;
    error: Error;
    request: never;
    pathParams: GetNftSeriesById1PathParams;
    queryParams: GetNftSeriesById1QueryParams;
    headerParams: never;
    response: GetNftSeriesById1QueryResponse;
    client: {
        parameters: Partial<Parameters<GetNftSeriesById1Client>[0]>;
        return: Awaited<ReturnType<GetNftSeriesById1Client>>;
    };
};
export const getNftSeriesById1QueryKey = (type: GetNftSeriesById1PathParams["type"], address: GetNftSeriesById1PathParams["address"], params?: GetNftSeriesById1["queryParams"]) => ["v5", { url: "/v1/assets/nft/series/:type/:address", params: { type: type, address: address } }, ...(params ? [params] : [])] as const;
export type GetNftSeriesById1QueryKey = ReturnType<typeof getNftSeriesById1QueryKey>;
export function getNftSeriesById1QueryOptions(type: GetNftSeriesById1PathParams["type"], address: GetNftSeriesById1PathParams["address"], params?: GetNftSeriesById1["queryParams"], options: GetNftSeriesById1["client"]["parameters"] = {}) {
    const queryKey = getNftSeriesById1QueryKey(type, address, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetNftSeriesById1["data"], GetNftSeriesById1["error"]>({
                method: "get",
                url: `/v1/assets/nft/series/${type}/${address}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get nft series by id
 * @summary get nft series by id
 * @link /v1/assets/nft/series/:type/:address
 */
export function useGetNftSeriesById1Hook<TData = GetNftSeriesById1["response"], TQueryData = GetNftSeriesById1["response"], TQueryKey extends QueryKey = GetNftSeriesById1QueryKey>(type: GetNftSeriesById1PathParams["type"], address: GetNftSeriesById1PathParams["address"], params?: GetNftSeriesById1["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetNftSeriesById1["response"], GetNftSeriesById1["error"], TData, TQueryData, TQueryKey>>;
    client?: GetNftSeriesById1["client"]["parameters"];
} = {}): UseQueryResult<TData, GetNftSeriesById1["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getNftSeriesById1QueryKey(type, address, params);
    const query = useQuery({
        ...getNftSeriesById1QueryOptions(type, address, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetNftSeriesById1["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getNftSeriesById1SuspenseQueryKey = (type: GetNftSeriesById1PathParams["type"], address: GetNftSeriesById1PathParams["address"], params?: GetNftSeriesById1["queryParams"]) => ["v5", { url: "/v1/assets/nft/series/:type/:address", params: { type: type, address: address } }, ...(params ? [params] : [])] as const;
export type GetNftSeriesById1SuspenseQueryKey = ReturnType<typeof getNftSeriesById1SuspenseQueryKey>;
export function getNftSeriesById1SuspenseQueryOptions(type: GetNftSeriesById1PathParams["type"], address: GetNftSeriesById1PathParams["address"], params?: GetNftSeriesById1["queryParams"], options: GetNftSeriesById1["client"]["parameters"] = {}) {
    const queryKey = getNftSeriesById1SuspenseQueryKey(type, address, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetNftSeriesById1["data"], GetNftSeriesById1["error"]>({
                method: "get",
                url: `/v1/assets/nft/series/${type}/${address}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get nft series by id
 * @summary get nft series by id
 * @link /v1/assets/nft/series/:type/:address
 */
export function useGetNftSeriesById1HookSuspense<TData = GetNftSeriesById1["response"], TQueryKey extends QueryKey = GetNftSeriesById1SuspenseQueryKey>(type: GetNftSeriesById1PathParams["type"], address: GetNftSeriesById1PathParams["address"], params?: GetNftSeriesById1["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetNftSeriesById1["response"], GetNftSeriesById1["error"], TData, TQueryKey>>;
    client?: GetNftSeriesById1["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetNftSeriesById1["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getNftSeriesById1SuspenseQueryKey(type, address, params);
    const query = useSuspenseQuery({
        ...getNftSeriesById1SuspenseQueryOptions(type, address, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetNftSeriesById1["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}