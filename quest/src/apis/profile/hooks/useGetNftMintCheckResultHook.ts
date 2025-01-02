import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetNftMintCheckResultQueryResponse } from "../models/GetNftMintCheckResult";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetNftMintCheckResultClient = typeof client<GetNftMintCheckResultQueryResponse, Error, never>;
type GetNftMintCheckResult = {
    data: GetNftMintCheckResultQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetNftMintCheckResultQueryResponse;
    client: {
        parameters: Partial<Parameters<GetNftMintCheckResultClient>[0]>;
        return: Awaited<ReturnType<GetNftMintCheckResultClient>>;
    };
};
export const getNftMintCheckResultQueryKey = () => ["v5", { url: "/v1/assets/nft/mint/check" }] as const;
export type GetNftMintCheckResultQueryKey = ReturnType<typeof getNftMintCheckResultQueryKey>;
export function getNftMintCheckResultQueryOptions(options: GetNftMintCheckResult["client"]["parameters"] = {}) {
    const queryKey = getNftMintCheckResultQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetNftMintCheckResult["data"], GetNftMintCheckResult["error"]>({
                method: "get",
                url: `/v1/assets/nft/mint/check`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT铸造检查结果查询 包括Badge NFT
 * @summary NFT铸造检查结果查询
 * @link /v1/assets/nft/mint/check
 */
export function useGetNftMintCheckResultHook<TData = GetNftMintCheckResult["response"], TQueryData = GetNftMintCheckResult["response"], TQueryKey extends QueryKey = GetNftMintCheckResultQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetNftMintCheckResult["response"], GetNftMintCheckResult["error"], TData, TQueryData, TQueryKey>>;
    client?: GetNftMintCheckResult["client"]["parameters"];
} = {}): UseQueryResult<TData, GetNftMintCheckResult["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getNftMintCheckResultQueryKey();
    const query = useQuery({
        ...getNftMintCheckResultQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetNftMintCheckResult["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getNftMintCheckResultSuspenseQueryKey = () => ["v5", { url: "/v1/assets/nft/mint/check" }] as const;
export type GetNftMintCheckResultSuspenseQueryKey = ReturnType<typeof getNftMintCheckResultSuspenseQueryKey>;
export function getNftMintCheckResultSuspenseQueryOptions(options: GetNftMintCheckResult["client"]["parameters"] = {}) {
    const queryKey = getNftMintCheckResultSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetNftMintCheckResult["data"], GetNftMintCheckResult["error"]>({
                method: "get",
                url: `/v1/assets/nft/mint/check`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description NFT铸造检查结果查询 包括Badge NFT
 * @summary NFT铸造检查结果查询
 * @link /v1/assets/nft/mint/check
 */
export function useGetNftMintCheckResultHookSuspense<TData = GetNftMintCheckResult["response"], TQueryKey extends QueryKey = GetNftMintCheckResultSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetNftMintCheckResult["response"], GetNftMintCheckResult["error"], TData, TQueryKey>>;
    client?: GetNftMintCheckResult["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetNftMintCheckResult["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getNftMintCheckResultSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getNftMintCheckResultSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetNftMintCheckResult["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}