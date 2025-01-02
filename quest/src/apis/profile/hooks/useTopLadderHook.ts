import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TopLadderQueryResponse, TopLadderQueryParams, TopLadderHeaderParams } from "../models/TopLadder";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type TopLadderClient = typeof client<TopLadderQueryResponse, Error, never>;
type TopLadder = {
    data: TopLadderQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: TopLadderQueryParams;
    headerParams: TopLadderHeaderParams;
    response: TopLadderQueryResponse;
    client: {
        parameters: Partial<Parameters<TopLadderClient>[0]>;
        return: Awaited<ReturnType<TopLadderClient>>;
    };
};
export const topLadderQueryKey = (params?: TopLadder["queryParams"]) => ["v5", { url: "/v1/member/top/ladder" }, ...(params ? [params] : [])] as const;
export type TopLadderQueryKey = ReturnType<typeof topLadderQueryKey>;
export function topLadderQueryOptions(headers: TopLadder["headerParams"], params?: TopLadder["queryParams"], options: TopLadder["client"]["parameters"] = {}) {
    const queryKey = topLadderQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TopLadder["data"], TopLadder["error"]>({
                method: "get",
                url: `/v1/member/top/ladder`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 积分排行榜
 * @summary 积分排行榜
 * @link /v1/member/top/ladder
 */
export function useTopLadderHook<TData = TopLadder["response"], TQueryData = TopLadder["response"], TQueryKey extends QueryKey = TopLadderQueryKey>(headers: TopLadder["headerParams"], params?: TopLadder["queryParams"], options: {
    query?: Partial<QueryObserverOptions<TopLadder["response"], TopLadder["error"], TData, TQueryData, TQueryKey>>;
    client?: TopLadder["client"]["parameters"];
} = {}): UseQueryResult<TData, TopLadder["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? topLadderQueryKey(params);
    const query = useQuery({
        ...topLadderQueryOptions(headers, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, TopLadder["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const topLadderSuspenseQueryKey = (params?: TopLadder["queryParams"]) => ["v5", { url: "/v1/member/top/ladder" }, ...(params ? [params] : [])] as const;
export type TopLadderSuspenseQueryKey = ReturnType<typeof topLadderSuspenseQueryKey>;
export function topLadderSuspenseQueryOptions(headers: TopLadder["headerParams"], params?: TopLadder["queryParams"], options: TopLadder["client"]["parameters"] = {}) {
    const queryKey = topLadderSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TopLadder["data"], TopLadder["error"]>({
                method: "get",
                url: `/v1/member/top/ladder`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 积分排行榜
 * @summary 积分排行榜
 * @link /v1/member/top/ladder
 */
export function useTopLadderHookSuspense<TData = TopLadder["response"], TQueryKey extends QueryKey = TopLadderSuspenseQueryKey>(headers: TopLadder["headerParams"], params?: TopLadder["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<TopLadder["response"], TopLadder["error"], TData, TQueryKey>>;
    client?: TopLadder["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, TopLadder["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? topLadderSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...topLadderSuspenseQueryOptions(headers, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, TopLadder["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}