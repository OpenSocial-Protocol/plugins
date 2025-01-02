import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksProgressGetQueryResponse, V2TasksProgressGetQueryParams, V2TasksProgressGetHeaderParams } from "../models/V2TasksProgressGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksProgressGetClient = typeof client<V2TasksProgressGetQueryResponse, Error, never>;
type V2TasksProgressGet = {
    data: V2TasksProgressGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: V2TasksProgressGetQueryParams;
    headerParams: V2TasksProgressGetHeaderParams;
    response: V2TasksProgressGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksProgressGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksProgressGetClient>>;
    };
};
export const v2TasksProgressGetQueryKey = (params: V2TasksProgressGet["queryParams"]) => ["v5", { url: "/v2/tasks/progress" }, ...(params ? [params] : [])] as const;
export type V2TasksProgressGetQueryKey = ReturnType<typeof v2TasksProgressGetQueryKey>;
export function v2TasksProgressGetQueryOptions(params: V2TasksProgressGet["queryParams"], headers: V2TasksProgressGet["headerParams"], options: V2TasksProgressGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksProgressGetQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksProgressGet["data"], V2TasksProgressGet["error"]>({
                method: "get",
                url: `/v2/tasks/progress`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v2/tasks/progress
 */
export function useV2TasksProgressGetHook<TData = V2TasksProgressGet["response"], TQueryData = V2TasksProgressGet["response"], TQueryKey extends QueryKey = V2TasksProgressGetQueryKey>(params: V2TasksProgressGet["queryParams"], headers: V2TasksProgressGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<V2TasksProgressGet["response"], V2TasksProgressGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksProgressGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksProgressGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksProgressGetQueryKey(params);
    const query = useQuery({
        ...v2TasksProgressGetQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksProgressGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksProgressGetSuspenseQueryKey = (params: V2TasksProgressGet["queryParams"]) => ["v5", { url: "/v2/tasks/progress" }, ...(params ? [params] : [])] as const;
export type V2TasksProgressGetSuspenseQueryKey = ReturnType<typeof v2TasksProgressGetSuspenseQueryKey>;
export function v2TasksProgressGetSuspenseQueryOptions(params: V2TasksProgressGet["queryParams"], headers: V2TasksProgressGet["headerParams"], options: V2TasksProgressGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksProgressGetSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksProgressGet["data"], V2TasksProgressGet["error"]>({
                method: "get",
                url: `/v2/tasks/progress`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v2/tasks/progress
 */
export function useV2TasksProgressGetHookSuspense<TData = V2TasksProgressGet["response"], TQueryKey extends QueryKey = V2TasksProgressGetSuspenseQueryKey>(params: V2TasksProgressGet["queryParams"], headers: V2TasksProgressGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksProgressGet["response"], V2TasksProgressGet["error"], TData, TQueryKey>>;
    client?: V2TasksProgressGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksProgressGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksProgressGetSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...v2TasksProgressGetSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksProgressGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}