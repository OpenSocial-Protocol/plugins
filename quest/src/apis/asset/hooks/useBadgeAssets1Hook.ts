import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BadgeAssets1QueryResponse, BadgeAssets1QueryParams } from "../models/BadgeAssets1";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BadgeAssets1Client = typeof client<BadgeAssets1QueryResponse, Error, never>;
type BadgeAssets1 = {
    data: BadgeAssets1QueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BadgeAssets1QueryParams;
    headerParams: never;
    response: BadgeAssets1QueryResponse;
    client: {
        parameters: Partial<Parameters<BadgeAssets1Client>[0]>;
        return: Awaited<ReturnType<BadgeAssets1Client>>;
    };
};
export const badgeAssets1QueryKey = (params?: BadgeAssets1["queryParams"]) => ["v5", { url: "/v1/assets/nft/badges" }, ...(params ? [params] : [])] as const;
export type BadgeAssets1QueryKey = ReturnType<typeof badgeAssets1QueryKey>;
export function badgeAssets1QueryOptions(params?: BadgeAssets1["queryParams"], options: BadgeAssets1["client"]["parameters"] = {}) {
    const queryKey = badgeAssets1QueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BadgeAssets1["data"], BadgeAssets1["error"]>({
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
export function useBadgeAssets1Hook<TData = BadgeAssets1["response"], TQueryData = BadgeAssets1["response"], TQueryKey extends QueryKey = BadgeAssets1QueryKey>(params?: BadgeAssets1["queryParams"], options: {
    query?: Partial<QueryObserverOptions<BadgeAssets1["response"], BadgeAssets1["error"], TData, TQueryData, TQueryKey>>;
    client?: BadgeAssets1["client"]["parameters"];
} = {}): UseQueryResult<TData, BadgeAssets1["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? badgeAssets1QueryKey(params);
    const query = useQuery({
        ...badgeAssets1QueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BadgeAssets1["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const badgeAssets1SuspenseQueryKey = (params?: BadgeAssets1["queryParams"]) => ["v5", { url: "/v1/assets/nft/badges" }, ...(params ? [params] : [])] as const;
export type BadgeAssets1SuspenseQueryKey = ReturnType<typeof badgeAssets1SuspenseQueryKey>;
export function badgeAssets1SuspenseQueryOptions(params?: BadgeAssets1["queryParams"], options: BadgeAssets1["client"]["parameters"] = {}) {
    const queryKey = badgeAssets1SuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BadgeAssets1["data"], BadgeAssets1["error"]>({
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
export function useBadgeAssets1HookSuspense<TData = BadgeAssets1["response"], TQueryKey extends QueryKey = BadgeAssets1SuspenseQueryKey>(params?: BadgeAssets1["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<BadgeAssets1["response"], BadgeAssets1["error"], TData, TQueryKey>>;
    client?: BadgeAssets1["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BadgeAssets1["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? badgeAssets1SuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...badgeAssets1SuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BadgeAssets1["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}