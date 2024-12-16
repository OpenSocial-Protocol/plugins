import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListSeasonConfigQueryResponse } from "../models/ListSeasonConfig";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListSeasonConfigClient = typeof client<ListSeasonConfigQueryResponse, Error, never>;
type ListSeasonConfig = {
    data: ListSeasonConfigQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ListSeasonConfigQueryResponse;
    client: {
        parameters: Partial<Parameters<ListSeasonConfigClient>[0]>;
        return: Awaited<ReturnType<ListSeasonConfigClient>>;
    };
};
export const listSeasonConfigQueryKey = () => ["v5", { url: "/v1/member/season" }] as const;
export type ListSeasonConfigQueryKey = ReturnType<typeof listSeasonConfigQueryKey>;
export function listSeasonConfigQueryOptions(options: ListSeasonConfig["client"]["parameters"] = {}) {
    const queryKey = listSeasonConfigQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListSeasonConfig["data"], ListSeasonConfig["error"]>({
                method: "get",
                url: `/v1/member/season`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description list season config
 * @summary list season config
 * @link /v1/member/season
 */
export function useListSeasonConfigHook<TData = ListSeasonConfig["response"], TQueryData = ListSeasonConfig["response"], TQueryKey extends QueryKey = ListSeasonConfigQueryKey>(options: {
    query?: Partial<QueryObserverOptions<ListSeasonConfig["response"], ListSeasonConfig["error"], TData, TQueryData, TQueryKey>>;
    client?: ListSeasonConfig["client"]["parameters"];
} = {}): UseQueryResult<TData, ListSeasonConfig["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listSeasonConfigQueryKey();
    const query = useQuery({
        ...listSeasonConfigQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListSeasonConfig["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listSeasonConfigSuspenseQueryKey = () => ["v5", { url: "/v1/member/season" }] as const;
export type ListSeasonConfigSuspenseQueryKey = ReturnType<typeof listSeasonConfigSuspenseQueryKey>;
export function listSeasonConfigSuspenseQueryOptions(options: ListSeasonConfig["client"]["parameters"] = {}) {
    const queryKey = listSeasonConfigSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListSeasonConfig["data"], ListSeasonConfig["error"]>({
                method: "get",
                url: `/v1/member/season`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description list season config
 * @summary list season config
 * @link /v1/member/season
 */
export function useListSeasonConfigHookSuspense<TData = ListSeasonConfig["response"], TQueryKey extends QueryKey = ListSeasonConfigSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<ListSeasonConfig["response"], ListSeasonConfig["error"], TData, TQueryKey>>;
    client?: ListSeasonConfig["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListSeasonConfig["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listSeasonConfigSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...listSeasonConfigSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListSeasonConfig["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}