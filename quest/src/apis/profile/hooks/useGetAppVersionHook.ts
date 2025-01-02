import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetAppVersionQueryResponse, GetAppVersionPathParams, GetAppVersionQueryParams } from "../models/GetAppVersion";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetAppVersionClient = typeof client<GetAppVersionQueryResponse, Error, never>;
type GetAppVersion = {
    data: GetAppVersionQueryResponse;
    error: Error;
    request: never;
    pathParams: GetAppVersionPathParams;
    queryParams: GetAppVersionQueryParams;
    headerParams: never;
    response: GetAppVersionQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAppVersionClient>[0]>;
        return: Awaited<ReturnType<GetAppVersionClient>>;
    };
};
export const getAppVersionQueryKey = (platform: GetAppVersionPathParams["platform"], params?: GetAppVersion["queryParams"]) => ["v5", { url: "/v1/app/version/:platform", params: { platform: platform } }, ...(params ? [params] : [])] as const;
export type GetAppVersionQueryKey = ReturnType<typeof getAppVersionQueryKey>;
export function getAppVersionQueryOptions(platform: GetAppVersionPathParams["platform"], params?: GetAppVersion["queryParams"], options: GetAppVersion["client"]["parameters"] = {}) {
    const queryKey = getAppVersionQueryKey(platform, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAppVersion["data"], GetAppVersion["error"]>({
                method: "get",
                url: `/v1/app/version/${platform}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get app versions
 * @summary /app/version/{platform}
 * @link /v1/app/version/:platform
 */
export function useGetAppVersionHook<TData = GetAppVersion["response"], TQueryData = GetAppVersion["response"], TQueryKey extends QueryKey = GetAppVersionQueryKey>(platform: GetAppVersionPathParams["platform"], params?: GetAppVersion["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetAppVersion["response"], GetAppVersion["error"], TData, TQueryData, TQueryKey>>;
    client?: GetAppVersion["client"]["parameters"];
} = {}): UseQueryResult<TData, GetAppVersion["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAppVersionQueryKey(platform, params);
    const query = useQuery({
        ...getAppVersionQueryOptions(platform, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetAppVersion["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getAppVersionSuspenseQueryKey = (platform: GetAppVersionPathParams["platform"], params?: GetAppVersion["queryParams"]) => ["v5", { url: "/v1/app/version/:platform", params: { platform: platform } }, ...(params ? [params] : [])] as const;
export type GetAppVersionSuspenseQueryKey = ReturnType<typeof getAppVersionSuspenseQueryKey>;
export function getAppVersionSuspenseQueryOptions(platform: GetAppVersionPathParams["platform"], params?: GetAppVersion["queryParams"], options: GetAppVersion["client"]["parameters"] = {}) {
    const queryKey = getAppVersionSuspenseQueryKey(platform, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAppVersion["data"], GetAppVersion["error"]>({
                method: "get",
                url: `/v1/app/version/${platform}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get app versions
 * @summary /app/version/{platform}
 * @link /v1/app/version/:platform
 */
export function useGetAppVersionHookSuspense<TData = GetAppVersion["response"], TQueryKey extends QueryKey = GetAppVersionSuspenseQueryKey>(platform: GetAppVersionPathParams["platform"], params?: GetAppVersion["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetAppVersion["response"], GetAppVersion["error"], TData, TQueryKey>>;
    client?: GetAppVersion["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetAppVersion["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAppVersionSuspenseQueryKey(platform, params);
    const query = useSuspenseQuery({
        ...getAppVersionSuspenseQueryOptions(platform, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetAppVersion["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}