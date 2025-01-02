import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetChainConfigQueryResponse, GetChainConfigQueryParams } from "../models/GetChainConfig";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetChainConfigClient = typeof client<GetChainConfigQueryResponse, Error, never>;
type GetChainConfig = {
    data: GetChainConfigQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetChainConfigQueryParams;
    headerParams: never;
    response: GetChainConfigQueryResponse;
    client: {
        parameters: Partial<Parameters<GetChainConfigClient>[0]>;
        return: Awaited<ReturnType<GetChainConfigClient>>;
    };
};
export const getChainConfigQueryKey = (params?: GetChainConfig["queryParams"]) => ["v5", { url: "/v1/contract/chainConfig" }, ...(params ? [params] : [])] as const;
export type GetChainConfigQueryKey = ReturnType<typeof getChainConfigQueryKey>;
export function getChainConfigQueryOptions(params?: GetChainConfig["queryParams"], options: GetChainConfig["client"]["parameters"] = {}) {
    const queryKey = getChainConfigQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetChainConfig["data"], GetChainConfig["error"]>({
                method: "get",
                url: `/v1/contract/chainConfig`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get contract chain config
 * @summary /contract/chainConfig
 * @link /v1/contract/chainConfig
 */
export function useGetChainConfigHook<TData = GetChainConfig["response"], TQueryData = GetChainConfig["response"], TQueryKey extends QueryKey = GetChainConfigQueryKey>(params?: GetChainConfig["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetChainConfig["response"], GetChainConfig["error"], TData, TQueryData, TQueryKey>>;
    client?: GetChainConfig["client"]["parameters"];
} = {}): UseQueryResult<TData, GetChainConfig["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getChainConfigQueryKey(params);
    const query = useQuery({
        ...getChainConfigQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetChainConfig["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getChainConfigSuspenseQueryKey = (params?: GetChainConfig["queryParams"]) => ["v5", { url: "/v1/contract/chainConfig" }, ...(params ? [params] : [])] as const;
export type GetChainConfigSuspenseQueryKey = ReturnType<typeof getChainConfigSuspenseQueryKey>;
export function getChainConfigSuspenseQueryOptions(params?: GetChainConfig["queryParams"], options: GetChainConfig["client"]["parameters"] = {}) {
    const queryKey = getChainConfigSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetChainConfig["data"], GetChainConfig["error"]>({
                method: "get",
                url: `/v1/contract/chainConfig`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get contract chain config
 * @summary /contract/chainConfig
 * @link /v1/contract/chainConfig
 */
export function useGetChainConfigHookSuspense<TData = GetChainConfig["response"], TQueryKey extends QueryKey = GetChainConfigSuspenseQueryKey>(params?: GetChainConfig["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetChainConfig["response"], GetChainConfig["error"], TData, TQueryKey>>;
    client?: GetChainConfig["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetChainConfig["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getChainConfigSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getChainConfigSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetChainConfig["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}