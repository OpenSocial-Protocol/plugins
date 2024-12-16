import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWishApplyQueryResponse, GetWishApplyQueryParams } from "../models/GetWishApply";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWishApplyClient = typeof client<GetWishApplyQueryResponse, Error, never>;
type GetWishApply = {
    data: GetWishApplyQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: GetWishApplyQueryParams;
    headerParams: never;
    response: GetWishApplyQueryResponse;
    client: {
        parameters: Partial<Parameters<GetWishApplyClient>[0]>;
        return: Awaited<ReturnType<GetWishApplyClient>>;
    };
};
export const getWishApplyQueryKey = (params: GetWishApply["queryParams"]) => ["v5", { url: "/v1/wish/apply" }, ...(params ? [params] : [])] as const;
export type GetWishApplyQueryKey = ReturnType<typeof getWishApplyQueryKey>;
export function getWishApplyQueryOptions(params: GetWishApply["queryParams"], options: GetWishApply["client"]["parameters"] = {}) {
    const queryKey = getWishApplyQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWishApply["data"], GetWishApply["error"]>({
                method: "get",
                url: `/v1/wish/apply`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取apply
 * @summary 获取apply
 * @link /v1/wish/apply
 */
export function useGetWishApplyHook<TData = GetWishApply["response"], TQueryData = GetWishApply["response"], TQueryKey extends QueryKey = GetWishApplyQueryKey>(params: GetWishApply["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetWishApply["response"], GetWishApply["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWishApply["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWishApply["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWishApplyQueryKey(params);
    const query = useQuery({
        ...getWishApplyQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWishApply["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWishApplySuspenseQueryKey = (params: GetWishApply["queryParams"]) => ["v5", { url: "/v1/wish/apply" }, ...(params ? [params] : [])] as const;
export type GetWishApplySuspenseQueryKey = ReturnType<typeof getWishApplySuspenseQueryKey>;
export function getWishApplySuspenseQueryOptions(params: GetWishApply["queryParams"], options: GetWishApply["client"]["parameters"] = {}) {
    const queryKey = getWishApplySuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWishApply["data"], GetWishApply["error"]>({
                method: "get",
                url: `/v1/wish/apply`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取apply
 * @summary 获取apply
 * @link /v1/wish/apply
 */
export function useGetWishApplyHookSuspense<TData = GetWishApply["response"], TQueryKey extends QueryKey = GetWishApplySuspenseQueryKey>(params: GetWishApply["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWishApply["response"], GetWishApply["error"], TData, TQueryKey>>;
    client?: GetWishApply["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWishApply["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWishApplySuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...getWishApplySuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWishApply["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}