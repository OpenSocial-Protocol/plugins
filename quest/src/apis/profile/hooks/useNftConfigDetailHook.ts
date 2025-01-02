import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NftConfigDetailQueryResponse, NftConfigDetailPathParams } from "../models/NftConfigDetail";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type NftConfigDetailClient = typeof client<NftConfigDetailQueryResponse, Error, never>;
type NftConfigDetail = {
    data: NftConfigDetailQueryResponse;
    error: Error;
    request: never;
    pathParams: NftConfigDetailPathParams;
    queryParams: never;
    headerParams: never;
    response: NftConfigDetailQueryResponse;
    client: {
        parameters: Partial<Parameters<NftConfigDetailClient>[0]>;
        return: Awaited<ReturnType<NftConfigDetailClient>>;
    };
};
export const nftConfigDetailQueryKey = (contractAddress: NftConfigDetailPathParams["contractAddress"]) => ["v5", { url: "/v1/assets/nft/config/:contractAddress", params: { contractAddress: contractAddress } }] as const;
export type NftConfigDetailQueryKey = ReturnType<typeof nftConfigDetailQueryKey>;
export function nftConfigDetailQueryOptions(contractAddress: NftConfigDetailPathParams["contractAddress"], options: NftConfigDetail["client"]["parameters"] = {}) {
    const queryKey = nftConfigDetailQueryKey(contractAddress);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftConfigDetail["data"], NftConfigDetail["error"]>({
                method: "get",
                url: `/v1/assets/nft/config/${contractAddress}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT配置详情
 * @summary NFT配置详情
 * @link /v1/assets/nft/config/:contractAddress
 */
export function useNftConfigDetailHook<TData = NftConfigDetail["response"], TQueryData = NftConfigDetail["response"], TQueryKey extends QueryKey = NftConfigDetailQueryKey>(contractAddress: NftConfigDetailPathParams["contractAddress"], options: {
    query?: Partial<QueryObserverOptions<NftConfigDetail["response"], NftConfigDetail["error"], TData, TQueryData, TQueryKey>>;
    client?: NftConfigDetail["client"]["parameters"];
} = {}): UseQueryResult<TData, NftConfigDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftConfigDetailQueryKey(contractAddress);
    const query = useQuery({
        ...nftConfigDetailQueryOptions(contractAddress, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, NftConfigDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const nftConfigDetailSuspenseQueryKey = (contractAddress: NftConfigDetailPathParams["contractAddress"]) => ["v5", { url: "/v1/assets/nft/config/:contractAddress", params: { contractAddress: contractAddress } }] as const;
export type NftConfigDetailSuspenseQueryKey = ReturnType<typeof nftConfigDetailSuspenseQueryKey>;
export function nftConfigDetailSuspenseQueryOptions(contractAddress: NftConfigDetailPathParams["contractAddress"], options: NftConfigDetail["client"]["parameters"] = {}) {
    const queryKey = nftConfigDetailSuspenseQueryKey(contractAddress);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftConfigDetail["data"], NftConfigDetail["error"]>({
                method: "get",
                url: `/v1/assets/nft/config/${contractAddress}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT配置详情
 * @summary NFT配置详情
 * @link /v1/assets/nft/config/:contractAddress
 */
export function useNftConfigDetailHookSuspense<TData = NftConfigDetail["response"], TQueryKey extends QueryKey = NftConfigDetailSuspenseQueryKey>(contractAddress: NftConfigDetailPathParams["contractAddress"], options: {
    query?: Partial<UseSuspenseQueryOptions<NftConfigDetail["response"], NftConfigDetail["error"], TData, TQueryKey>>;
    client?: NftConfigDetail["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, NftConfigDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftConfigDetailSuspenseQueryKey(contractAddress);
    const query = useSuspenseQuery({
        ...nftConfigDetailSuspenseQueryOptions(contractAddress, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, NftConfigDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}