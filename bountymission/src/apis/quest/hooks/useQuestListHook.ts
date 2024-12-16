import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { QuestListQueryResponse, QuestListQueryParams } from "../models/QuestList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type QuestListClient = typeof client<QuestListQueryResponse, Error, never>;
type QuestList = {
    data: QuestListQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: QuestListQueryParams;
    headerParams: never;
    response: QuestListQueryResponse;
    client: {
        parameters: Partial<Parameters<QuestListClient>[0]>;
        return: Awaited<ReturnType<QuestListClient>>;
    };
};
export const questListQueryKey = (params: QuestList["queryParams"]) => ["v5", { url: "/v1/quest/list" }, ...(params ? [params] : [])] as const;
export type QuestListQueryKey = ReturnType<typeof questListQueryKey>;
export function questListQueryOptions(params: QuestList["queryParams"], options: QuestList["client"]["parameters"] = {}) {
    const queryKey = questListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<QuestList["data"], QuestList["error"]>({
                method: "get",
                url: `/v1/quest/list`,
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
 * @link /v1/quest/list
 */
export function useQuestListHook<TData = QuestList["response"], TQueryData = QuestList["response"], TQueryKey extends QueryKey = QuestListQueryKey>(params: QuestList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<QuestList["response"], QuestList["error"], TData, TQueryData, TQueryKey>>;
    client?: QuestList["client"]["parameters"];
} = {}): UseQueryResult<TData, QuestList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? questListQueryKey(params);
    const query = useQuery({
        ...questListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, QuestList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const questListSuspenseQueryKey = (params: QuestList["queryParams"]) => ["v5", { url: "/v1/quest/list" }, ...(params ? [params] : [])] as const;
export type QuestListSuspenseQueryKey = ReturnType<typeof questListSuspenseQueryKey>;
export function questListSuspenseQueryOptions(params: QuestList["queryParams"], options: QuestList["client"]["parameters"] = {}) {
    const queryKey = questListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<QuestList["data"], QuestList["error"]>({
                method: "get",
                url: `/v1/quest/list`,
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
 * @link /v1/quest/list
 */
export function useQuestListHookSuspense<TData = QuestList["response"], TQueryKey extends QueryKey = QuestListSuspenseQueryKey>(params: QuestList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<QuestList["response"], QuestList["error"], TData, TQueryKey>>;
    client?: QuestList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, QuestList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? questListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...questListSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, QuestList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}