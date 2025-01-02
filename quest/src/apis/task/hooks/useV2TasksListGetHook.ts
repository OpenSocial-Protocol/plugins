import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksListGetQueryResponse, V2TasksListGetQueryParams, V2TasksListGetHeaderParams } from "../models/V2TasksListGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksListGetClient = typeof client<V2TasksListGetQueryResponse, Error, never>;
type V2TasksListGet = {
    data: V2TasksListGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksListGetQueryParams;
    headerParams: V2TasksListGetHeaderParams;
    response: V2TasksListGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksListGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksListGetClient>>;
    };
};
export const v2TasksListGetQueryKey = (params?: V2TasksListGet["queryParams"]) => ["v5", { url: "/v2/tasks/list" }, ...(params ? [params] : [])] as const;
export type V2TasksListGetQueryKey = ReturnType<typeof v2TasksListGetQueryKey>;
export function v2TasksListGetQueryOptions(params?: V2TasksListGet["queryParams"], headers?: V2TasksListGet["headerParams"], options: V2TasksListGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksListGetQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksListGet["data"], V2TasksListGet["error"]>({
                method: "get",
                url: `/v2/tasks/list`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 获取任务列表
 * @link /v2/tasks/list
 */
export function useV2TasksListGetHook<TData = V2TasksListGet["response"], TQueryData = V2TasksListGet["response"], TQueryKey extends QueryKey = V2TasksListGetQueryKey>(params?: V2TasksListGet["queryParams"], headers?: V2TasksListGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<V2TasksListGet["response"], V2TasksListGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksListGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksListGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksListGetQueryKey(params);
    const query = useQuery({
        ...v2TasksListGetQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksListGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksListGetSuspenseQueryKey = (params?: V2TasksListGet["queryParams"]) => ["v5", { url: "/v2/tasks/list" }, ...(params ? [params] : [])] as const;
export type V2TasksListGetSuspenseQueryKey = ReturnType<typeof v2TasksListGetSuspenseQueryKey>;
export function v2TasksListGetSuspenseQueryOptions(params?: V2TasksListGet["queryParams"], headers?: V2TasksListGet["headerParams"], options: V2TasksListGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksListGetSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksListGet["data"], V2TasksListGet["error"]>({
                method: "get",
                url: `/v2/tasks/list`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 获取任务列表
 * @link /v2/tasks/list
 */
export function useV2TasksListGetHookSuspense<TData = V2TasksListGet["response"], TQueryKey extends QueryKey = V2TasksListGetSuspenseQueryKey>(params?: V2TasksListGet["queryParams"], headers?: V2TasksListGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksListGet["response"], V2TasksListGet["error"], TData, TQueryKey>>;
    client?: V2TasksListGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksListGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksListGetSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...v2TasksListGetSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksListGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}