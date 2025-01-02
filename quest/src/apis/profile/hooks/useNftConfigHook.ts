import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NftConfigQueryResponse } from "../models/NftConfig";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type NftConfigClient = typeof client<NftConfigQueryResponse, Error, never>;
type NftConfig = {
    data: NftConfigQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: NftConfigQueryResponse;
    client: {
        parameters: Partial<Parameters<NftConfigClient>[0]>;
        return: Awaited<ReturnType<NftConfigClient>>;
    };
};
export const nftConfigQueryKey = () => ["v5", { url: "/v1/assets/nft/config" }] as const;
export type NftConfigQueryKey = ReturnType<typeof nftConfigQueryKey>;
export function nftConfigQueryOptions(options: NftConfig["client"]["parameters"] = {}) {
    const queryKey = nftConfigQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftConfig["data"], NftConfig["error"]>({
                method: "get",
                url: `/v1/assets/nft/config`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT配置
 * @summary NFT配置
 * @link /v1/assets/nft/config
 */
export function useNftConfigHook<TData = NftConfig["response"], TQueryData = NftConfig["response"], TQueryKey extends QueryKey = NftConfigQueryKey>(options: {
    query?: Partial<QueryObserverOptions<NftConfig["response"], NftConfig["error"], TData, TQueryData, TQueryKey>>;
    client?: NftConfig["client"]["parameters"];
} = {}): UseQueryResult<TData, NftConfig["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftConfigQueryKey();
    const query = useQuery({
        ...nftConfigQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, NftConfig["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const nftConfigSuspenseQueryKey = () => ["v5", { url: "/v1/assets/nft/config" }] as const;
export type NftConfigSuspenseQueryKey = ReturnType<typeof nftConfigSuspenseQueryKey>;
export function nftConfigSuspenseQueryOptions(options: NftConfig["client"]["parameters"] = {}) {
    const queryKey = nftConfigSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NftConfig["data"], NftConfig["error"]>({
                method: "get",
                url: `/v1/assets/nft/config`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT配置
 * @summary NFT配置
 * @link /v1/assets/nft/config
 */
export function useNftConfigHookSuspense<TData = NftConfig["response"], TQueryKey extends QueryKey = NftConfigSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<NftConfig["response"], NftConfig["error"], TData, TQueryKey>>;
    client?: NftConfig["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, NftConfig["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? nftConfigSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...nftConfigSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, NftConfig["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}