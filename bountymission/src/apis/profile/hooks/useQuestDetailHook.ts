import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { QuestDetailQueryResponse, QuestDetailPathParams, QuestDetailQueryParams } from "../models/QuestDetail";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type QuestDetailClient = typeof client<QuestDetailQueryResponse, Error, never>;
type QuestDetail = {
    data: QuestDetailQueryResponse;
    error: Error;
    request: never;
    pathParams: QuestDetailPathParams;
    queryParams: QuestDetailQueryParams;
    headerParams: never;
    response: QuestDetailQueryResponse;
    client: {
        parameters: Partial<Parameters<QuestDetailClient>[0]>;
        return: Awaited<ReturnType<QuestDetailClient>>;
    };
};
export const questDetailQueryKey = (id: QuestDetailPathParams["id"], params?: QuestDetail["queryParams"]) => ["v5", { url: "/v1/quest/detail/:id", params: { id: id } }, ...(params ? [params] : [])] as const;
export type QuestDetailQueryKey = ReturnType<typeof questDetailQueryKey>;
export function questDetailQueryOptions(id: QuestDetailPathParams["id"], params?: QuestDetail["queryParams"], options: QuestDetail["client"]["parameters"] = {}) {
    const queryKey = questDetailQueryKey(id, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<QuestDetail["data"], QuestDetail["error"]>({
                method: "get",
                url: `/v1/quest/detail/${id}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /v1/quest/detail/:id
 */
export function useQuestDetailHook<TData = QuestDetail["response"], TQueryData = QuestDetail["response"], TQueryKey extends QueryKey = QuestDetailQueryKey>(id: QuestDetailPathParams["id"], params?: QuestDetail["queryParams"], options: {
    query?: Partial<QueryObserverOptions<QuestDetail["response"], QuestDetail["error"], TData, TQueryData, TQueryKey>>;
    client?: QuestDetail["client"]["parameters"];
} = {}): UseQueryResult<TData, QuestDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? questDetailQueryKey(id, params);
    const query = useQuery({
        ...questDetailQueryOptions(id, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, QuestDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const questDetailSuspenseQueryKey = (id: QuestDetailPathParams["id"], params?: QuestDetail["queryParams"]) => ["v5", { url: "/v1/quest/detail/:id", params: { id: id } }, ...(params ? [params] : [])] as const;
export type QuestDetailSuspenseQueryKey = ReturnType<typeof questDetailSuspenseQueryKey>;
export function questDetailSuspenseQueryOptions(id: QuestDetailPathParams["id"], params?: QuestDetail["queryParams"], options: QuestDetail["client"]["parameters"] = {}) {
    const queryKey = questDetailSuspenseQueryKey(id, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<QuestDetail["data"], QuestDetail["error"]>({
                method: "get",
                url: `/v1/quest/detail/${id}`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /v1/quest/detail/:id
 */
export function useQuestDetailHookSuspense<TData = QuestDetail["response"], TQueryKey extends QueryKey = QuestDetailSuspenseQueryKey>(id: QuestDetailPathParams["id"], params?: QuestDetail["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<QuestDetail["response"], QuestDetail["error"], TData, TQueryKey>>;
    client?: QuestDetail["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, QuestDetail["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? questDetailSuspenseQueryKey(id, params);
    const query = useSuspenseQuery({
        ...questDetailSuspenseQueryOptions(id, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, QuestDetail["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}