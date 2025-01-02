import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { AllowClaimQueryResponse, AllowClaimPathParams, AllowClaimHeaderParams } from "../models/AllowClaim";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type AllowClaimClient = typeof client<AllowClaimQueryResponse, Error, never>;
type AllowClaim = {
    data: AllowClaimQueryResponse;
    error: Error;
    request: never;
    pathParams: AllowClaimPathParams;
    queryParams: never;
    headerParams: AllowClaimHeaderParams;
    response: AllowClaimQueryResponse;
    client: {
        parameters: Partial<Parameters<AllowClaimClient>[0]>;
        return: Awaited<ReturnType<AllowClaimClient>>;
    };
};
export const allowClaimQueryKey = (type: AllowClaimPathParams["type"]) => ["v5", { url: "/v2/reward/allow/claim/:type", params: { type: type } }] as const;
export type AllowClaimQueryKey = ReturnType<typeof allowClaimQueryKey>;
export function allowClaimQueryOptions(type: AllowClaimPathParams["type"], headers: AllowClaim["headerParams"], options: AllowClaim["client"]["parameters"] = {}) {
    const queryKey = allowClaimQueryKey(type);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<AllowClaim["data"], AllowClaim["error"]>({
                method: "get",
                url: `/v2/reward/allow/claim/${type}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 判断NFT是否claim过
 * @link /v2/reward/allow/claim/:type
 */
export function useAllowClaimHook<TData = AllowClaim["response"], TQueryData = AllowClaim["response"], TQueryKey extends QueryKey = AllowClaimQueryKey>(type: AllowClaimPathParams["type"], headers: AllowClaim["headerParams"], options: {
    query?: Partial<QueryObserverOptions<AllowClaim["response"], AllowClaim["error"], TData, TQueryData, TQueryKey>>;
    client?: AllowClaim["client"]["parameters"];
} = {}): UseQueryResult<TData, AllowClaim["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? allowClaimQueryKey(type);
    const query = useQuery({
        ...allowClaimQueryOptions(type, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, AllowClaim["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const allowClaimSuspenseQueryKey = (type: AllowClaimPathParams["type"]) => ["v5", { url: "/v2/reward/allow/claim/:type", params: { type: type } }] as const;
export type AllowClaimSuspenseQueryKey = ReturnType<typeof allowClaimSuspenseQueryKey>;
export function allowClaimSuspenseQueryOptions(type: AllowClaimPathParams["type"], headers: AllowClaim["headerParams"], options: AllowClaim["client"]["parameters"] = {}) {
    const queryKey = allowClaimSuspenseQueryKey(type);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<AllowClaim["data"], AllowClaim["error"]>({
                method: "get",
                url: `/v2/reward/allow/claim/${type}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 判断NFT是否claim过
 * @link /v2/reward/allow/claim/:type
 */
export function useAllowClaimHookSuspense<TData = AllowClaim["response"], TQueryKey extends QueryKey = AllowClaimSuspenseQueryKey>(type: AllowClaimPathParams["type"], headers: AllowClaim["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<AllowClaim["response"], AllowClaim["error"], TData, TQueryKey>>;
    client?: AllowClaim["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, AllowClaim["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? allowClaimSuspenseQueryKey(type);
    const query = useSuspenseQuery({
        ...allowClaimSuspenseQueryOptions(type, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, AllowClaim["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}