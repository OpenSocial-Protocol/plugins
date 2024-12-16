import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksCodeCodeGetQueryResponse, V2TasksCodeCodeGetPathParams } from "../models/V2TasksCodeCodeGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksCodeCodeGetClient = typeof client<V2TasksCodeCodeGetQueryResponse, Error, never>;
type V2TasksCodeCodeGet = {
    data: V2TasksCodeCodeGetQueryResponse;
    error: Error;
    request: never;
    pathParams: V2TasksCodeCodeGetPathParams;
    queryParams: never;
    headerParams: never;
    response: V2TasksCodeCodeGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksCodeCodeGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksCodeCodeGetClient>>;
    };
};
export const v2TasksCodeCodeGetQueryKey = (code: V2TasksCodeCodeGetPathParams["code"]) => ["v5", { url: "/v2/tasks/code/:code", params: { code: code } }] as const;
export type V2TasksCodeCodeGetQueryKey = ReturnType<typeof v2TasksCodeCodeGetQueryKey>;
export function v2TasksCodeCodeGetQueryOptions(code: V2TasksCodeCodeGetPathParams["code"], options: V2TasksCodeCodeGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksCodeCodeGetQueryKey(code);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksCodeCodeGet["data"], V2TasksCodeCodeGet["error"]>({
                method: "get",
                url: `/v2/tasks/code/${code}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 根据code查询任务详情
 * @link /v2/tasks/code/:code
 */
export function useV2TasksCodeCodeGetHook<TData = V2TasksCodeCodeGet["response"], TQueryData = V2TasksCodeCodeGet["response"], TQueryKey extends QueryKey = V2TasksCodeCodeGetQueryKey>(code: V2TasksCodeCodeGetPathParams["code"], options: {
    query?: Partial<QueryObserverOptions<V2TasksCodeCodeGet["response"], V2TasksCodeCodeGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksCodeCodeGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksCodeCodeGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksCodeCodeGetQueryKey(code);
    const query = useQuery({
        ...v2TasksCodeCodeGetQueryOptions(code, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksCodeCodeGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksCodeCodeGetSuspenseQueryKey = (code: V2TasksCodeCodeGetPathParams["code"]) => ["v5", { url: "/v2/tasks/code/:code", params: { code: code } }] as const;
export type V2TasksCodeCodeGetSuspenseQueryKey = ReturnType<typeof v2TasksCodeCodeGetSuspenseQueryKey>;
export function v2TasksCodeCodeGetSuspenseQueryOptions(code: V2TasksCodeCodeGetPathParams["code"], options: V2TasksCodeCodeGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksCodeCodeGetSuspenseQueryKey(code);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksCodeCodeGet["data"], V2TasksCodeCodeGet["error"]>({
                method: "get",
                url: `/v2/tasks/code/${code}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 根据code查询任务详情
 * @link /v2/tasks/code/:code
 */
export function useV2TasksCodeCodeGetHookSuspense<TData = V2TasksCodeCodeGet["response"], TQueryKey extends QueryKey = V2TasksCodeCodeGetSuspenseQueryKey>(code: V2TasksCodeCodeGetPathParams["code"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksCodeCodeGet["response"], V2TasksCodeCodeGet["error"], TData, TQueryKey>>;
    client?: V2TasksCodeCodeGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksCodeCodeGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksCodeCodeGetSuspenseQueryKey(code);
    const query = useSuspenseQuery({
        ...v2TasksCodeCodeGetSuspenseQueryOptions(code, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksCodeCodeGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}