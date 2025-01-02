import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { V2TasksEarlyPopGetQueryResponse, V2TasksEarlyPopGetHeaderParams } from "../models/V2TasksEarlyPopGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type V2TasksEarlyPopGetClient = typeof client<V2TasksEarlyPopGetQueryResponse, Error, never>;
type V2TasksEarlyPopGet = {
    data: V2TasksEarlyPopGetQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: V2TasksEarlyPopGetHeaderParams;
    response: V2TasksEarlyPopGetQueryResponse;
    client: {
        parameters: Partial<Parameters<V2TasksEarlyPopGetClient>[0]>;
        return: Awaited<ReturnType<V2TasksEarlyPopGetClient>>;
    };
};
export const v2TasksEarlyPopGetQueryKey = () => ["v5", { url: "/v2/tasks/early/pop" }] as const;
export type V2TasksEarlyPopGetQueryKey = ReturnType<typeof v2TasksEarlyPopGetQueryKey>;
export function v2TasksEarlyPopGetQueryOptions(headers: V2TasksEarlyPopGet["headerParams"], options: V2TasksEarlyPopGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksEarlyPopGetQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksEarlyPopGet["data"], V2TasksEarlyPopGet["error"]>({
                method: "get",
                url: `/v2/tasks/early/pop`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v2/tasks/early/pop
 */
export function useV2TasksEarlyPopGetHook<TData = V2TasksEarlyPopGet["response"], TQueryData = V2TasksEarlyPopGet["response"], TQueryKey extends QueryKey = V2TasksEarlyPopGetQueryKey>(headers: V2TasksEarlyPopGet["headerParams"], options: {
    query?: Partial<QueryObserverOptions<V2TasksEarlyPopGet["response"], V2TasksEarlyPopGet["error"], TData, TQueryData, TQueryKey>>;
    client?: V2TasksEarlyPopGet["client"]["parameters"];
} = {}): UseQueryResult<TData, V2TasksEarlyPopGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksEarlyPopGetQueryKey();
    const query = useQuery({
        ...v2TasksEarlyPopGetQueryOptions(headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, V2TasksEarlyPopGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const v2TasksEarlyPopGetSuspenseQueryKey = () => ["v5", { url: "/v2/tasks/early/pop" }] as const;
export type V2TasksEarlyPopGetSuspenseQueryKey = ReturnType<typeof v2TasksEarlyPopGetSuspenseQueryKey>;
export function v2TasksEarlyPopGetSuspenseQueryOptions(headers: V2TasksEarlyPopGet["headerParams"], options: V2TasksEarlyPopGet["client"]["parameters"] = {}) {
    const queryKey = v2TasksEarlyPopGetSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<V2TasksEarlyPopGet["data"], V2TasksEarlyPopGet["error"]>({
                method: "get",
                url: `/v2/tasks/early/pop`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v2/tasks/early/pop
 */
export function useV2TasksEarlyPopGetHookSuspense<TData = V2TasksEarlyPopGet["response"], TQueryKey extends QueryKey = V2TasksEarlyPopGetSuspenseQueryKey>(headers: V2TasksEarlyPopGet["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<V2TasksEarlyPopGet["response"], V2TasksEarlyPopGet["error"], TData, TQueryKey>>;
    client?: V2TasksEarlyPopGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, V2TasksEarlyPopGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? v2TasksEarlyPopGetSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...v2TasksEarlyPopGetSuspenseQueryOptions(headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, V2TasksEarlyPopGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}