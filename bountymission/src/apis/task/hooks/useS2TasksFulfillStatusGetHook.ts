import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { S2TasksFulfillStatusGetQueryResponse, S2TasksFulfillStatusGetQueryParams, S2TasksFulfillStatusGetHeaderParams } from "../models/S2TasksFulfillStatusGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type S2TasksFulfillStatusGetClient = typeof client<S2TasksFulfillStatusGetQueryResponse, Error, never>;
type S2TasksFulfillStatusGet = {
    data: S2TasksFulfillStatusGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: S2TasksFulfillStatusGetQueryParams;
    headerParams: S2TasksFulfillStatusGetHeaderParams;
    response: S2TasksFulfillStatusGetQueryResponse;
    client: {
        parameters: Partial<Parameters<S2TasksFulfillStatusGetClient>[0]>;
        return: Awaited<ReturnType<S2TasksFulfillStatusGetClient>>;
    };
};
export const s2TasksFulfillStatusGetQueryKey = (params: S2TasksFulfillStatusGet["queryParams"]) => ["v5", { url: "/s2/tasks/fulfill/status" }, ...(params ? [params] : [])] as const;
export type S2TasksFulfillStatusGetQueryKey = ReturnType<typeof s2TasksFulfillStatusGetQueryKey>;
export function s2TasksFulfillStatusGetQueryOptions(params: S2TasksFulfillStatusGet["queryParams"], headers: S2TasksFulfillStatusGet["headerParams"], options: S2TasksFulfillStatusGet["client"]["parameters"] = {}) {
    const queryKey = s2TasksFulfillStatusGetQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<S2TasksFulfillStatusGet["data"], S2TasksFulfillStatusGet["error"]>({
                method: "get",
                url: `/s2/tasks/fulfill/status`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 任务状态查询
 * @link /s2/tasks/fulfill/status
 */
export function useS2TasksFulfillStatusGetHook<TData = S2TasksFulfillStatusGet["response"], TQueryData = S2TasksFulfillStatusGet["response"], TQueryKey extends QueryKey = S2TasksFulfillStatusGetQueryKey>(params: S2TasksFulfillStatusGet["queryParams"], headers: S2TasksFulfillStatusGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<S2TasksFulfillStatusGet["response"], S2TasksFulfillStatusGet["error"], TData, TQueryData, TQueryKey>>;
    client?: S2TasksFulfillStatusGet["client"]["parameters"];
} = {}): UseQueryResult<TData, S2TasksFulfillStatusGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? s2TasksFulfillStatusGetQueryKey(params);
    const query = useQuery({
        ...s2TasksFulfillStatusGetQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, S2TasksFulfillStatusGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const s2TasksFulfillStatusGetSuspenseQueryKey = (params: S2TasksFulfillStatusGet["queryParams"]) => ["v5", { url: "/s2/tasks/fulfill/status" }, ...(params ? [params] : [])] as const;
export type S2TasksFulfillStatusGetSuspenseQueryKey = ReturnType<typeof s2TasksFulfillStatusGetSuspenseQueryKey>;
export function s2TasksFulfillStatusGetSuspenseQueryOptions(params: S2TasksFulfillStatusGet["queryParams"], headers: S2TasksFulfillStatusGet["headerParams"], options: S2TasksFulfillStatusGet["client"]["parameters"] = {}) {
    const queryKey = s2TasksFulfillStatusGetSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<S2TasksFulfillStatusGet["data"], S2TasksFulfillStatusGet["error"]>({
                method: "get",
                url: `/s2/tasks/fulfill/status`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 任务状态查询
 * @link /s2/tasks/fulfill/status
 */
export function useS2TasksFulfillStatusGetHookSuspense<TData = S2TasksFulfillStatusGet["response"], TQueryKey extends QueryKey = S2TasksFulfillStatusGetSuspenseQueryKey>(params: S2TasksFulfillStatusGet["queryParams"], headers: S2TasksFulfillStatusGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<S2TasksFulfillStatusGet["response"], S2TasksFulfillStatusGet["error"], TData, TQueryKey>>;
    client?: S2TasksFulfillStatusGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, S2TasksFulfillStatusGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? s2TasksFulfillStatusGetSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...s2TasksFulfillStatusGetSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, S2TasksFulfillStatusGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}