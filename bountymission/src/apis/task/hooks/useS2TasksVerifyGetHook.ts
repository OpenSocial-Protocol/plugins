import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { S2TasksVerifyGetQueryResponse, S2TasksVerifyGetQueryParams, S2TasksVerifyGetHeaderParams } from "../models/S2TasksVerifyGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type S2TasksVerifyGetClient = typeof client<S2TasksVerifyGetQueryResponse, Error, never>;
type S2TasksVerifyGet = {
    data: S2TasksVerifyGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: S2TasksVerifyGetQueryParams;
    headerParams: S2TasksVerifyGetHeaderParams;
    response: S2TasksVerifyGetQueryResponse;
    client: {
        parameters: Partial<Parameters<S2TasksVerifyGetClient>[0]>;
        return: Awaited<ReturnType<S2TasksVerifyGetClient>>;
    };
};
export const s2TasksVerifyGetQueryKey = (params: S2TasksVerifyGet["queryParams"]) => ["v5", { url: "/s2/tasks/verify" }, ...(params ? [params] : [])] as const;
export type S2TasksVerifyGetQueryKey = ReturnType<typeof s2TasksVerifyGetQueryKey>;
export function s2TasksVerifyGetQueryOptions(params: S2TasksVerifyGet["queryParams"], headers: S2TasksVerifyGet["headerParams"], options: S2TasksVerifyGet["client"]["parameters"] = {}) {
    const queryKey = s2TasksVerifyGetQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<S2TasksVerifyGet["data"], S2TasksVerifyGet["error"]>({
                method: "get",
                url: `/s2/tasks/verify`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 验证用户是否完成某个操作
 * @link /s2/tasks/verify
 */
export function useS2TasksVerifyGetHook<TData = S2TasksVerifyGet["response"], TQueryData = S2TasksVerifyGet["response"], TQueryKey extends QueryKey = S2TasksVerifyGetQueryKey>(params: S2TasksVerifyGet["queryParams"], headers: S2TasksVerifyGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<S2TasksVerifyGet["response"], S2TasksVerifyGet["error"], TData, TQueryData, TQueryKey>>;
    client?: S2TasksVerifyGet["client"]["parameters"];
} = {}): UseQueryResult<TData, S2TasksVerifyGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? s2TasksVerifyGetQueryKey(params);
    const query = useQuery({
        ...s2TasksVerifyGetQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, S2TasksVerifyGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const s2TasksVerifyGetSuspenseQueryKey = (params: S2TasksVerifyGet["queryParams"]) => ["v5", { url: "/s2/tasks/verify" }, ...(params ? [params] : [])] as const;
export type S2TasksVerifyGetSuspenseQueryKey = ReturnType<typeof s2TasksVerifyGetSuspenseQueryKey>;
export function s2TasksVerifyGetSuspenseQueryOptions(params: S2TasksVerifyGet["queryParams"], headers: S2TasksVerifyGet["headerParams"], options: S2TasksVerifyGet["client"]["parameters"] = {}) {
    const queryKey = s2TasksVerifyGetSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<S2TasksVerifyGet["data"], S2TasksVerifyGet["error"]>({
                method: "get",
                url: `/s2/tasks/verify`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 验证用户是否完成某个操作
 * @link /s2/tasks/verify
 */
export function useS2TasksVerifyGetHookSuspense<TData = S2TasksVerifyGet["response"], TQueryKey extends QueryKey = S2TasksVerifyGetSuspenseQueryKey>(params: S2TasksVerifyGet["queryParams"], headers: S2TasksVerifyGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<S2TasksVerifyGet["response"], S2TasksVerifyGet["error"], TData, TQueryKey>>;
    client?: S2TasksVerifyGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, S2TasksVerifyGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? s2TasksVerifyGetSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...s2TasksVerifyGetSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, S2TasksVerifyGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}