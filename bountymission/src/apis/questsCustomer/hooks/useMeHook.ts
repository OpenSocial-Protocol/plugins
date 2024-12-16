import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MeQueryResponse, MeQueryParams, MeHeaderParams } from "../models/Me";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MeClient = typeof client<MeQueryResponse, Error, never>;
type Me = {
    data: MeQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MeQueryParams;
    headerParams: MeHeaderParams;
    response: MeQueryResponse;
    client: {
        parameters: Partial<Parameters<MeClient>[0]>;
        return: Awaited<ReturnType<MeClient>>;
    };
};
export const meQueryKey = (params?: Me["queryParams"]) => ["v5", { url: "/v2/customer/me" }, ...(params ? [params] : [])] as const;
export type MeQueryKey = ReturnType<typeof meQueryKey>;
export function meQueryOptions(params?: Me["queryParams"], headers?: Me["headerParams"], options: Me["client"]["parameters"] = {}) {
    const queryKey = meQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Me["data"], Me["error"]>({
                method: "get",
                url: `/v2/customer/me`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get current time
 * @link /v2/customer/me
 */
export function useMeHook<TData = Me["response"], TQueryData = Me["response"], TQueryKey extends QueryKey = MeQueryKey>(params?: Me["queryParams"], headers?: Me["headerParams"], options: {
    query?: Partial<QueryObserverOptions<Me["response"], Me["error"], TData, TQueryData, TQueryKey>>;
    client?: Me["client"]["parameters"];
} = {}): UseQueryResult<TData, Me["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? meQueryKey(params);
    const query = useQuery({
        ...meQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Me["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const meSuspenseQueryKey = (params?: Me["queryParams"]) => ["v5", { url: "/v2/customer/me" }, ...(params ? [params] : [])] as const;
export type MeSuspenseQueryKey = ReturnType<typeof meSuspenseQueryKey>;
export function meSuspenseQueryOptions(params?: Me["queryParams"], headers?: Me["headerParams"], options: Me["client"]["parameters"] = {}) {
    const queryKey = meSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Me["data"], Me["error"]>({
                method: "get",
                url: `/v2/customer/me`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get current time
 * @link /v2/customer/me
 */
export function useMeHookSuspense<TData = Me["response"], TQueryKey extends QueryKey = MeSuspenseQueryKey>(params?: Me["queryParams"], headers?: Me["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<Me["response"], Me["error"], TData, TQueryKey>>;
    client?: Me["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Me["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? meSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...meSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Me["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}