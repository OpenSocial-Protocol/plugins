import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetCurrentSeasonLadderQueryResponse } from "../models/GetCurrentSeasonLadder";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetCurrentSeasonLadderClient = typeof client<GetCurrentSeasonLadderQueryResponse, Error, never>;
type GetCurrentSeasonLadder = {
    data: GetCurrentSeasonLadderQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetCurrentSeasonLadderQueryResponse;
    client: {
        parameters: Partial<Parameters<GetCurrentSeasonLadderClient>[0]>;
        return: Awaited<ReturnType<GetCurrentSeasonLadderClient>>;
    };
};
export const getCurrentSeasonLadderQueryKey = () => ["v5", { url: "/v1/member/season/ladder" }] as const;
export type GetCurrentSeasonLadderQueryKey = ReturnType<typeof getCurrentSeasonLadderQueryKey>;
export function getCurrentSeasonLadderQueryOptions(options: GetCurrentSeasonLadder["client"]["parameters"] = {}) {
    const queryKey = getCurrentSeasonLadderQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCurrentSeasonLadder["data"], GetCurrentSeasonLadder["error"]>({
                method: "get",
                url: `/v1/member/season/ladder`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get current season ladder
 * @summary get current season ladder
 * @link /v1/member/season/ladder
 */
export function useGetCurrentSeasonLadderHook<TData = GetCurrentSeasonLadder["response"], TQueryData = GetCurrentSeasonLadder["response"], TQueryKey extends QueryKey = GetCurrentSeasonLadderQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetCurrentSeasonLadder["response"], GetCurrentSeasonLadder["error"], TData, TQueryData, TQueryKey>>;
    client?: GetCurrentSeasonLadder["client"]["parameters"];
} = {}): UseQueryResult<TData, GetCurrentSeasonLadder["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCurrentSeasonLadderQueryKey();
    const query = useQuery({
        ...getCurrentSeasonLadderQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetCurrentSeasonLadder["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getCurrentSeasonLadderSuspenseQueryKey = () => ["v5", { url: "/v1/member/season/ladder" }] as const;
export type GetCurrentSeasonLadderSuspenseQueryKey = ReturnType<typeof getCurrentSeasonLadderSuspenseQueryKey>;
export function getCurrentSeasonLadderSuspenseQueryOptions(options: GetCurrentSeasonLadder["client"]["parameters"] = {}) {
    const queryKey = getCurrentSeasonLadderSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCurrentSeasonLadder["data"], GetCurrentSeasonLadder["error"]>({
                method: "get",
                url: `/v1/member/season/ladder`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get current season ladder
 * @summary get current season ladder
 * @link /v1/member/season/ladder
 */
export function useGetCurrentSeasonLadderHookSuspense<TData = GetCurrentSeasonLadder["response"], TQueryKey extends QueryKey = GetCurrentSeasonLadderSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetCurrentSeasonLadder["response"], GetCurrentSeasonLadder["error"], TData, TQueryKey>>;
    client?: GetCurrentSeasonLadder["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetCurrentSeasonLadder["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCurrentSeasonLadderSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getCurrentSeasonLadderSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetCurrentSeasonLadder["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}