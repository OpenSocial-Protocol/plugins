import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetSignQueryResponse } from "../models/GetSign";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetSignClient = typeof client<GetSignQueryResponse, Error, never>;
type GetSign = {
    data: GetSignQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetSignQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSignClient>[0]>;
        return: Awaited<ReturnType<GetSignClient>>;
    };
};
export const getSignQueryKey = () => ["v5", { url: "/v1/profile/sign" }] as const;
export type GetSignQueryKey = ReturnType<typeof getSignQueryKey>;
export function getSignQueryOptions(options: GetSign["client"]["parameters"] = {}) {
    const queryKey = getSignQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetSign["data"], GetSign["error"]>({
                method: "get",
                url: `/v1/profile/sign`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get sign hash
 * @summary get sign hash
 * @link /v1/profile/sign
 */
export function useGetSignHook<TData = GetSign["response"], TQueryData = GetSign["response"], TQueryKey extends QueryKey = GetSignQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetSign["response"], GetSign["error"], TData, TQueryData, TQueryKey>>;
    client?: GetSign["client"]["parameters"];
} = {}): UseQueryResult<TData, GetSign["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getSignQueryKey();
    const query = useQuery({
        ...getSignQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetSign["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getSignSuspenseQueryKey = () => ["v5", { url: "/v1/profile/sign" }] as const;
export type GetSignSuspenseQueryKey = ReturnType<typeof getSignSuspenseQueryKey>;
export function getSignSuspenseQueryOptions(options: GetSign["client"]["parameters"] = {}) {
    const queryKey = getSignSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetSign["data"], GetSign["error"]>({
                method: "get",
                url: `/v1/profile/sign`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get sign hash
 * @summary get sign hash
 * @link /v1/profile/sign
 */
export function useGetSignHookSuspense<TData = GetSign["response"], TQueryKey extends QueryKey = GetSignSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetSign["response"], GetSign["error"], TData, TQueryKey>>;
    client?: GetSign["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetSign["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getSignSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getSignSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetSign["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}