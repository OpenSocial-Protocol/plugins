import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksDetailGetQueryResponse, V2TasksDetailGetQueryParams } from "../models/V2TasksDetailGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksDetailGetClient = typeof client<V2TasksDetailGetQueryResponse, Error, never>;
type V2TasksDetailGet = {
    data: V2TasksDetailGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksDetailGetQueryParams;
    headerParams: never;
    response: V2TasksDetailGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksDetailGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksDetailGetClient>>;
    };
};
export const v2TasksDetailGetQueryKey = (params?: V2TasksDetailGet["queryParams"]) => ["v5", { url: "/v2/tasks/detail" }, ...(params ? [params] : [])] as const;
export type V2TasksDetailGetQueryKey = ReturnType<typeof v2TasksDetailGetQueryKey>;
export function v2TasksDetailGetQueryOptions(params?: V2TasksDetailGet["queryParams"], options: V2TasksDetailGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksDetailGetQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksDetailGet["data"], V2TasksDetailGet["error"]>({
                method: "get",
                url: `/v2/tasks/detail`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 任务详情
 * @link /v2/tasks/detail
 */
export function useV2TasksDetailGetHook<TData = V2TasksDetailGet["response"], TQueryData = V2TasksDetailGet["response"], TQueryKey extends QueryKey = V2TasksDetailGetQueryKey>(params?: V2TasksDetailGet["queryParams"], options: {
    query?: Partial<QueryObserverOptions<V2TasksDetailGet["response"], V2TasksDetailGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksDetailGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksDetailGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksDetailGetQueryKey(params);
    const query = useQuery({
        ...v2TasksDetailGetQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksDetailGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksDetailGetSuspenseQueryKey = (params?: V2TasksDetailGet["queryParams"]) => ["v5", { url: "/v2/tasks/detail" }, ...(params ? [params] : [])] as const;
export type V2TasksDetailGetSuspenseQueryKey = ReturnType<typeof v2TasksDetailGetSuspenseQueryKey>;
export function v2TasksDetailGetSuspenseQueryOptions(params?: V2TasksDetailGet["queryParams"], options: V2TasksDetailGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksDetailGetSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksDetailGet["data"], V2TasksDetailGet["error"]>({
                method: "get",
                url: `/v2/tasks/detail`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 任务详情
 * @link /v2/tasks/detail
 */
export function useV2TasksDetailGetHookSuspense<TData = V2TasksDetailGet["response"], TQueryKey extends QueryKey = V2TasksDetailGetSuspenseQueryKey>(params?: V2TasksDetailGet["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksDetailGet["response"], V2TasksDetailGet["error"], TData, TQueryKey>>;
    client?: V2TasksDetailGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksDetailGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksDetailGetSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...v2TasksDetailGetSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksDetailGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}