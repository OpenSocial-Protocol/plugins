import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ConfigSearchQueryResponse, ConfigSearchPathParams, ConfigSearchQueryParams } from "../models/ConfigSearch";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ConfigSearchClient = typeof client<ConfigSearchQueryResponse, Error, never>;
type ConfigSearch = {
    data: ConfigSearchQueryResponse;
    error: Error;
    request: never;
    pathParams: ConfigSearchPathParams;
    queryParams: ConfigSearchQueryParams;
    headerParams: never;
    response: ConfigSearchQueryResponse;
    client: {
        parameters: Partial<Parameters<ConfigSearchClient>[0]>;
        return: Awaited<ReturnType<ConfigSearchClient>>;
    };
};
export const configSearchQueryKey = (configName: ConfigSearchPathParams["config_name"], params?: ConfigSearch["queryParams"]) => ["v5", { url: "/v1/config/search/:config_name", params: { configName: configName } }, ...(params ? [params] : [])] as const;
export type ConfigSearchQueryKey = ReturnType<typeof configSearchQueryKey>;
export function configSearchQueryOptions(configName: ConfigSearchPathParams["config_name"], params?: ConfigSearch["queryParams"], options: ConfigSearch["client"]["parameters"] = {}) {
    const queryKey = configSearchQueryKey(configName, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ConfigSearch["data"], ConfigSearch["error"]>({
                method: "get",
                url: `/v1/config/search/${configName}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description config search
 * @summary config search
 * @link /v1/config/search/:config_name
 */
export function useConfigSearchHook<TData = ConfigSearch["response"], TQueryData = ConfigSearch["response"], TQueryKey extends QueryKey = ConfigSearchQueryKey>(configName: ConfigSearchPathParams["config_name"], params?: ConfigSearch["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ConfigSearch["response"], ConfigSearch["error"], TData, TQueryData, TQueryKey>>;
    client?: ConfigSearch["client"]["parameters"];
} = {}): UseQueryResult<TData, ConfigSearch["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? configSearchQueryKey(configName, params);
    const query = useQuery({
        ...configSearchQueryOptions(configName, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ConfigSearch["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const configSearchSuspenseQueryKey = (configName: ConfigSearchPathParams["config_name"], params?: ConfigSearch["queryParams"]) => ["v5", { url: "/v1/config/search/:config_name", params: { configName: configName } }, ...(params ? [params] : [])] as const;
export type ConfigSearchSuspenseQueryKey = ReturnType<typeof configSearchSuspenseQueryKey>;
export function configSearchSuspenseQueryOptions(configName: ConfigSearchPathParams["config_name"], params?: ConfigSearch["queryParams"], options: ConfigSearch["client"]["parameters"] = {}) {
    const queryKey = configSearchSuspenseQueryKey(configName, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ConfigSearch["data"], ConfigSearch["error"]>({
                method: "get",
                url: `/v1/config/search/${configName}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description config search
 * @summary config search
 * @link /v1/config/search/:config_name
 */
export function useConfigSearchHookSuspense<TData = ConfigSearch["response"], TQueryKey extends QueryKey = ConfigSearchSuspenseQueryKey>(configName: ConfigSearchPathParams["config_name"], params?: ConfigSearch["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ConfigSearch["response"], ConfigSearch["error"], TData, TQueryKey>>;
    client?: ConfigSearch["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ConfigSearch["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? configSearchSuspenseQueryKey(configName, params);
    const query = useSuspenseQuery({
        ...configSearchSuspenseQueryOptions(configName, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ConfigSearch["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}