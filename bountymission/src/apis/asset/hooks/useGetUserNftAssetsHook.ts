import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetUserNftAssetsQueryResponse } from "../models/GetUserNftAssets";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetUserNftAssetsClient = typeof client<GetUserNftAssetsQueryResponse, Error, never>;
type GetUserNftAssets = {
    data: GetUserNftAssetsQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetUserNftAssetsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetUserNftAssetsClient>[0]>;
        return: Awaited<ReturnType<GetUserNftAssetsClient>>;
    };
};
export const getUserNftAssetsQueryKey = () => ["v5", { url: "/v1/assets/nft" }] as const;
export type GetUserNftAssetsQueryKey = ReturnType<typeof getUserNftAssetsQueryKey>;
export function getUserNftAssetsQueryOptions(options: GetUserNftAssets["client"]["parameters"] = {}) {
    const queryKey = getUserNftAssetsQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserNftAssets["data"], GetUserNftAssets["error"]>({
                method: "get",
                url: `/v1/assets/nft`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户NFT以及积分加成
 * @summary 获取用户NFT以及积分加成
 * @link /v1/assets/nft
 */
export function useGetUserNftAssetsHook<TData = GetUserNftAssets["response"], TQueryData = GetUserNftAssets["response"], TQueryKey extends QueryKey = GetUserNftAssetsQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetUserNftAssets["response"], GetUserNftAssets["error"], TData, TQueryData, TQueryKey>>;
    client?: GetUserNftAssets["client"]["parameters"];
} = {}): UseQueryResult<TData, GetUserNftAssets["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserNftAssetsQueryKey();
    const query = useQuery({
        ...getUserNftAssetsQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetUserNftAssets["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getUserNftAssetsSuspenseQueryKey = () => ["v5", { url: "/v1/assets/nft" }] as const;
export type GetUserNftAssetsSuspenseQueryKey = ReturnType<typeof getUserNftAssetsSuspenseQueryKey>;
export function getUserNftAssetsSuspenseQueryOptions(options: GetUserNftAssets["client"]["parameters"] = {}) {
    const queryKey = getUserNftAssetsSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserNftAssets["data"], GetUserNftAssets["error"]>({
                method: "get",
                url: `/v1/assets/nft`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户NFT以及积分加成
 * @summary 获取用户NFT以及积分加成
 * @link /v1/assets/nft
 */
export function useGetUserNftAssetsHookSuspense<TData = GetUserNftAssets["response"], TQueryKey extends QueryKey = GetUserNftAssetsSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetUserNftAssets["response"], GetUserNftAssets["error"], TData, TQueryKey>>;
    client?: GetUserNftAssets["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetUserNftAssets["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserNftAssetsSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getUserNftAssetsSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetUserNftAssets["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}