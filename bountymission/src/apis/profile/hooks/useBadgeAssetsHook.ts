import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BadgeAssetsQueryResponse, BadgeAssetsQueryParams } from "../models/BadgeAssets";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BadgeAssetsClient = typeof client<BadgeAssetsQueryResponse, Error, never>;
type BadgeAssets = {
    data: BadgeAssetsQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BadgeAssetsQueryParams;
    headerParams: never;
    response: BadgeAssetsQueryResponse;
    client: {
        parameters: Partial<Parameters<BadgeAssetsClient>[0]>;
        return: Awaited<ReturnType<BadgeAssetsClient>>;
    };
};
export const badgeAssetsQueryKey = (params?: BadgeAssets["queryParams"]) => ["v5", { url: "/v1/assets/nft/badges" }, ...(params ? [params] : [])] as const;
export type BadgeAssetsQueryKey = ReturnType<typeof badgeAssetsQueryKey>;
export function badgeAssetsQueryOptions(params?: BadgeAssets["queryParams"], options: BadgeAssets["client"]["parameters"] = {}) {
    const queryKey = badgeAssetsQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BadgeAssets["data"], BadgeAssets["error"]>({
                method: "get",
                url: `/v1/assets/nft/badges`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description query user claimable or claimed Badges
 * @summary query user claimable or claimed Badges
 * @link /v1/assets/nft/badges
 */
export function useBadgeAssetsHook<TData = BadgeAssets["response"], TQueryData = BadgeAssets["response"], TQueryKey extends QueryKey = BadgeAssetsQueryKey>(params?: BadgeAssets["queryParams"], options: {
    query?: Partial<QueryObserverOptions<BadgeAssets["response"], BadgeAssets["error"], TData, TQueryData, TQueryKey>>;
    client?: BadgeAssets["client"]["parameters"];
} = {}): UseQueryResult<TData, BadgeAssets["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? badgeAssetsQueryKey(params);
    const query = useQuery({
        ...badgeAssetsQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BadgeAssets["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const badgeAssetsSuspenseQueryKey = (params?: BadgeAssets["queryParams"]) => ["v5", { url: "/v1/assets/nft/badges" }, ...(params ? [params] : [])] as const;
export type BadgeAssetsSuspenseQueryKey = ReturnType<typeof badgeAssetsSuspenseQueryKey>;
export function badgeAssetsSuspenseQueryOptions(params?: BadgeAssets["queryParams"], options: BadgeAssets["client"]["parameters"] = {}) {
    const queryKey = badgeAssetsSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BadgeAssets["data"], BadgeAssets["error"]>({
                method: "get",
                url: `/v1/assets/nft/badges`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description query user claimable or claimed Badges
 * @summary query user claimable or claimed Badges
 * @link /v1/assets/nft/badges
 */
export function useBadgeAssetsHookSuspense<TData = BadgeAssets["response"], TQueryKey extends QueryKey = BadgeAssetsSuspenseQueryKey>(params?: BadgeAssets["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<BadgeAssets["response"], BadgeAssets["error"], TData, TQueryKey>>;
    client?: BadgeAssets["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BadgeAssets["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? badgeAssetsSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...badgeAssetsSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BadgeAssets["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}