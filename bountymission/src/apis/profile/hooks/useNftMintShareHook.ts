import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NftMintShareQueryResponse, NftMintShareQueryParams } from "../models/NftMintShare";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type NftMintShareClient = typeof client<NftMintShareQueryResponse, Error, never>;
type NftMintShare = {
    data: NftMintShareQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: NftMintShareQueryParams;
    headerParams: never;
    response: NftMintShareQueryResponse;
    client: {
        parameters: Partial<Parameters<NftMintShareClient>[0]>;
        return: Awaited<ReturnType<NftMintShareClient>>;
    };
};
export const nftMintShareQueryKey = (params: NftMintShare["queryParams"]) => ["v5", { url: "/v1/assets/nft/mint/share" }, ...(params ? [params] : [])] as const;
export type NftMintShareQueryKey = ReturnType<typeof nftMintShareQueryKey>;
export function nftMintShareQueryOptions(params: NftMintShare["queryParams"], options: NftMintShare["client"]["parameters"] = {}) {
    const queryKey = nftMintShareQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftMintShare["data"], NftMintShare["error"]>({
                method: "get",
                url: `/v1/assets/nft/mint/share`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT铸造分享
 * @summary NFT铸造分享
 * @link /v1/assets/nft/mint/share
 */
export function useNftMintShareHook<TData = NftMintShare["response"], TQueryData = NftMintShare["response"], TQueryKey extends QueryKey = NftMintShareQueryKey>(params: NftMintShare["queryParams"], options: {
    query?: Partial<QueryObserverOptions<NftMintShare["response"], NftMintShare["error"], TData, TQueryData, TQueryKey>>;
    client?: NftMintShare["client"]["parameters"];
} = {}): UseQueryResult<TData, NftMintShare["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftMintShareQueryKey(params);
    const query = useQuery({
        ...nftMintShareQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, NftMintShare["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const nftMintShareSuspenseQueryKey = (params: NftMintShare["queryParams"]) => ["v5", { url: "/v1/assets/nft/mint/share" }, ...(params ? [params] : [])] as const;
export type NftMintShareSuspenseQueryKey = ReturnType<typeof nftMintShareSuspenseQueryKey>;
export function nftMintShareSuspenseQueryOptions(params: NftMintShare["queryParams"], options: NftMintShare["client"]["parameters"] = {}) {
    const queryKey = nftMintShareSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftMintShare["data"], NftMintShare["error"]>({
                method: "get",
                url: `/v1/assets/nft/mint/share`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT铸造分享
 * @summary NFT铸造分享
 * @link /v1/assets/nft/mint/share
 */
export function useNftMintShareHookSuspense<TData = NftMintShare["response"], TQueryKey extends QueryKey = NftMintShareSuspenseQueryKey>(params: NftMintShare["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<NftMintShare["response"], NftMintShare["error"], TData, TQueryKey>>;
    client?: NftMintShare["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, NftMintShare["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftMintShareSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...nftMintShareSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, NftMintShare["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}