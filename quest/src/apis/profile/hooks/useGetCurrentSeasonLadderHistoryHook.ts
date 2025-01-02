import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetCurrentSeasonLadderHistoryQueryResponse, GetCurrentSeasonLadderHistoryPathParams } from "../models/GetCurrentSeasonLadderHistory";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetCurrentSeasonLadderHistoryClient = typeof client<GetCurrentSeasonLadderHistoryQueryResponse, Error, never>;
type GetCurrentSeasonLadderHistory = {
    data: GetCurrentSeasonLadderHistoryQueryResponse;
    error: Error;
    request: never;
    pathParams: GetCurrentSeasonLadderHistoryPathParams;
    queryParams: never;
    headerParams: never;
    response: GetCurrentSeasonLadderHistoryQueryResponse;
    client: {
        parameters: Partial<Parameters<GetCurrentSeasonLadderHistoryClient>[0]>;
        return: Awaited<ReturnType<GetCurrentSeasonLadderHistoryClient>>;
    };
};
export const getCurrentSeasonLadderHistoryQueryKey = (cycleId: GetCurrentSeasonLadderHistoryPathParams["cycleId"]) => ["v5", { url: "/v1/member/season/ladder/history/:cycleId", params: { cycleId: cycleId } }] as const;
export type GetCurrentSeasonLadderHistoryQueryKey = ReturnType<typeof getCurrentSeasonLadderHistoryQueryKey>;
export function getCurrentSeasonLadderHistoryQueryOptions(cycleId: GetCurrentSeasonLadderHistoryPathParams["cycleId"], options: GetCurrentSeasonLadderHistory["client"]["parameters"] = {}) {
    const queryKey = getCurrentSeasonLadderHistoryQueryKey(cycleId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCurrentSeasonLadderHistory["data"], GetCurrentSeasonLadderHistory["error"]>({
                method: "get",
                url: `/v1/member/season/ladder/history/${cycleId}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get current season ladder history
 * @summary get current season ladder history
 * @link /v1/member/season/ladder/history/:cycleId
 */
export function useGetCurrentSeasonLadderHistoryHook<TData = GetCurrentSeasonLadderHistory["response"], TQueryData = GetCurrentSeasonLadderHistory["response"], TQueryKey extends QueryKey = GetCurrentSeasonLadderHistoryQueryKey>(cycleId: GetCurrentSeasonLadderHistoryPathParams["cycleId"], options: {
    query?: Partial<QueryObserverOptions<GetCurrentSeasonLadderHistory["response"], GetCurrentSeasonLadderHistory["error"], TData, TQueryData, TQueryKey>>;
    client?: GetCurrentSeasonLadderHistory["client"]["parameters"];
} = {}): UseQueryResult<TData, GetCurrentSeasonLadderHistory["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCurrentSeasonLadderHistoryQueryKey(cycleId);
    const query = useQuery({
        ...getCurrentSeasonLadderHistoryQueryOptions(cycleId, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetCurrentSeasonLadderHistory["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getCurrentSeasonLadderHistorySuspenseQueryKey = (cycleId: GetCurrentSeasonLadderHistoryPathParams["cycleId"]) => ["v5", { url: "/v1/member/season/ladder/history/:cycleId", params: { cycleId: cycleId } }] as const;
export type GetCurrentSeasonLadderHistorySuspenseQueryKey = ReturnType<typeof getCurrentSeasonLadderHistorySuspenseQueryKey>;
export function getCurrentSeasonLadderHistorySuspenseQueryOptions(cycleId: GetCurrentSeasonLadderHistoryPathParams["cycleId"], options: GetCurrentSeasonLadderHistory["client"]["parameters"] = {}) {
    const queryKey = getCurrentSeasonLadderHistorySuspenseQueryKey(cycleId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCurrentSeasonLadderHistory["data"], GetCurrentSeasonLadderHistory["error"]>({
                method: "get",
                url: `/v1/member/season/ladder/history/${cycleId}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get current season ladder history
 * @summary get current season ladder history
 * @link /v1/member/season/ladder/history/:cycleId
 */
export function useGetCurrentSeasonLadderHistoryHookSuspense<TData = GetCurrentSeasonLadderHistory["response"], TQueryKey extends QueryKey = GetCurrentSeasonLadderHistorySuspenseQueryKey>(cycleId: GetCurrentSeasonLadderHistoryPathParams["cycleId"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetCurrentSeasonLadderHistory["response"], GetCurrentSeasonLadderHistory["error"], TData, TQueryKey>>;
    client?: GetCurrentSeasonLadderHistory["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetCurrentSeasonLadderHistory["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCurrentSeasonLadderHistorySuspenseQueryKey(cycleId);
    const query = useSuspenseQuery({
        ...getCurrentSeasonLadderHistorySuspenseQueryOptions(cycleId, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetCurrentSeasonLadderHistory["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}