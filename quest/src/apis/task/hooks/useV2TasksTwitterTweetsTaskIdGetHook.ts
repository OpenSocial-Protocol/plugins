import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksTwitterTweetsTaskIdGetQueryResponse, V2TasksTwitterTweetsTaskIdGetPathParams, V2TasksTwitterTweetsTaskIdGetHeaderParams } from "../models/V2TasksTwitterTweetsTaskIdGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksTwitterTweetsTaskIdGetClient = typeof client<V2TasksTwitterTweetsTaskIdGetQueryResponse, Error, never>;
type V2TasksTwitterTweetsTaskIdGet = {
    data: V2TasksTwitterTweetsTaskIdGetQueryResponse;
    error: Error;
    request: never;
    pathParams: V2TasksTwitterTweetsTaskIdGetPathParams;
    queryParams: never;
    headerParams: V2TasksTwitterTweetsTaskIdGetHeaderParams;
    response: V2TasksTwitterTweetsTaskIdGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksTwitterTweetsTaskIdGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksTwitterTweetsTaskIdGetClient>>;
    };
};
export const v2TasksTwitterTweetsTaskIdGetQueryKey = (taskId: V2TasksTwitterTweetsTaskIdGetPathParams["taskId"]) => ["v5", { url: "/v2/tasks/twitter/tweets/:taskId", params: { taskId: taskId } }] as const;
export type V2TasksTwitterTweetsTaskIdGetQueryKey = ReturnType<typeof v2TasksTwitterTweetsTaskIdGetQueryKey>;
export function v2TasksTwitterTweetsTaskIdGetQueryOptions(taskId: V2TasksTwitterTweetsTaskIdGetPathParams["taskId"], headers: V2TasksTwitterTweetsTaskIdGet["headerParams"], options: V2TasksTwitterTweetsTaskIdGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksTwitterTweetsTaskIdGetQueryKey(taskId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksTwitterTweetsTaskIdGet["data"], V2TasksTwitterTweetsTaskIdGet["error"]>({
                method: "get",
                url: `/v2/tasks/twitter/tweets/${taskId}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 查询twitter最近的帖子
 * @link /v2/tasks/twitter/tweets/:taskId
 */
export function useV2TasksTwitterTweetsTaskIdGetHook<TData = V2TasksTwitterTweetsTaskIdGet["response"], TQueryData = V2TasksTwitterTweetsTaskIdGet["response"], TQueryKey extends QueryKey = V2TasksTwitterTweetsTaskIdGetQueryKey>(taskId: V2TasksTwitterTweetsTaskIdGetPathParams["taskId"], headers: V2TasksTwitterTweetsTaskIdGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<V2TasksTwitterTweetsTaskIdGet["response"], V2TasksTwitterTweetsTaskIdGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksTwitterTweetsTaskIdGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksTwitterTweetsTaskIdGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksTwitterTweetsTaskIdGetQueryKey(taskId);
    const query = useQuery({
        ...v2TasksTwitterTweetsTaskIdGetQueryOptions(taskId, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksTwitterTweetsTaskIdGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksTwitterTweetsTaskIdGetSuspenseQueryKey = (taskId: V2TasksTwitterTweetsTaskIdGetPathParams["taskId"]) => ["v5", { url: "/v2/tasks/twitter/tweets/:taskId", params: { taskId: taskId } }] as const;
export type V2TasksTwitterTweetsTaskIdGetSuspenseQueryKey = ReturnType<typeof v2TasksTwitterTweetsTaskIdGetSuspenseQueryKey>;
export function v2TasksTwitterTweetsTaskIdGetSuspenseQueryOptions(taskId: V2TasksTwitterTweetsTaskIdGetPathParams["taskId"], headers: V2TasksTwitterTweetsTaskIdGet["headerParams"], options: V2TasksTwitterTweetsTaskIdGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksTwitterTweetsTaskIdGetSuspenseQueryKey(taskId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksTwitterTweetsTaskIdGet["data"], V2TasksTwitterTweetsTaskIdGet["error"]>({
                method: "get",
                url: `/v2/tasks/twitter/tweets/${taskId}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 查询twitter最近的帖子
 * @link /v2/tasks/twitter/tweets/:taskId
 */
export function useV2TasksTwitterTweetsTaskIdGetHookSuspense<TData = V2TasksTwitterTweetsTaskIdGet["response"], TQueryKey extends QueryKey = V2TasksTwitterTweetsTaskIdGetSuspenseQueryKey>(taskId: V2TasksTwitterTweetsTaskIdGetPathParams["taskId"], headers: V2TasksTwitterTweetsTaskIdGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksTwitterTweetsTaskIdGet["response"], V2TasksTwitterTweetsTaskIdGet["error"], TData, TQueryKey>>;
    client?: V2TasksTwitterTweetsTaskIdGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksTwitterTweetsTaskIdGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksTwitterTweetsTaskIdGetSuspenseQueryKey(taskId);
    const query = useSuspenseQuery({
        ...v2TasksTwitterTweetsTaskIdGetSuspenseQueryOptions(taskId, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksTwitterTweetsTaskIdGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}