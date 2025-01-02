import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksRewardByCodeGetQueryResponse, V2TasksRewardByCodeGetQueryParams, V2TasksRewardByCodeGetHeaderParams } from "../models/V2TasksRewardByCodeGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksRewardByCodeGetClient = typeof client<V2TasksRewardByCodeGetQueryResponse, Error, never>;
type V2TasksRewardByCodeGet = {
    data: V2TasksRewardByCodeGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksRewardByCodeGetQueryParams;
    headerParams: V2TasksRewardByCodeGetHeaderParams;
    response: V2TasksRewardByCodeGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksRewardByCodeGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksRewardByCodeGetClient>>;
    };
};
export const v2TasksRewardByCodeGetQueryKey = (params: V2TasksRewardByCodeGet["queryParams"]) => ["v5", { url: "/v2/tasks/reward/by/code" }, ...(params ? [params] : [])] as const;
export type V2TasksRewardByCodeGetQueryKey = ReturnType<typeof v2TasksRewardByCodeGetQueryKey>;
export function v2TasksRewardByCodeGetQueryOptions(params: V2TasksRewardByCodeGet["queryParams"], headers: V2TasksRewardByCodeGet["headerParams"], options: V2TasksRewardByCodeGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksRewardByCodeGetQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksRewardByCodeGet["data"], V2TasksRewardByCodeGet["error"]>({
                method: "get",
                url: `/v2/tasks/reward/by/code`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v2/tasks/reward/by/code
 */
export function useV2TasksRewardByCodeGetHook<TData = V2TasksRewardByCodeGet["response"], TQueryData = V2TasksRewardByCodeGet["response"], TQueryKey extends QueryKey = V2TasksRewardByCodeGetQueryKey>(params: V2TasksRewardByCodeGet["queryParams"], headers: V2TasksRewardByCodeGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<V2TasksRewardByCodeGet["response"], V2TasksRewardByCodeGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksRewardByCodeGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksRewardByCodeGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksRewardByCodeGetQueryKey(params);
    const query = useQuery({
        ...v2TasksRewardByCodeGetQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksRewardByCodeGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksRewardByCodeGetSuspenseQueryKey = (params: V2TasksRewardByCodeGet["queryParams"]) => ["v5", { url: "/v2/tasks/reward/by/code" }, ...(params ? [params] : [])] as const;
export type V2TasksRewardByCodeGetSuspenseQueryKey = ReturnType<typeof v2TasksRewardByCodeGetSuspenseQueryKey>;
export function v2TasksRewardByCodeGetSuspenseQueryOptions(params: V2TasksRewardByCodeGet["queryParams"], headers: V2TasksRewardByCodeGet["headerParams"], options: V2TasksRewardByCodeGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksRewardByCodeGetSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksRewardByCodeGet["data"], V2TasksRewardByCodeGet["error"]>({
                method: "get",
                url: `/v2/tasks/reward/by/code`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v2/tasks/reward/by/code
 */
export function useV2TasksRewardByCodeGetHookSuspense<TData = V2TasksRewardByCodeGet["response"], TQueryKey extends QueryKey = V2TasksRewardByCodeGetSuspenseQueryKey>(params: V2TasksRewardByCodeGet["queryParams"], headers: V2TasksRewardByCodeGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksRewardByCodeGet["response"], V2TasksRewardByCodeGet["error"], TData, TQueryKey>>;
    client?: V2TasksRewardByCodeGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksRewardByCodeGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksRewardByCodeGetSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...v2TasksRewardByCodeGetSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksRewardByCodeGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}