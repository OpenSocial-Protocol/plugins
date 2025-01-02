import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CodeListQueryResponse, CodeListQueryParams } from "../models/CodeList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CodeListClient = typeof client<CodeListQueryResponse, Error, never>;
type CodeList = {
    data: CodeListQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CodeListQueryParams;
    headerParams: never;
    response: CodeListQueryResponse;
    client: {
        parameters: Partial<Parameters<CodeListClient>[0]>;
        return: Awaited<ReturnType<CodeListClient>>;
    };
};
export const codeListQueryKey = (params: CodeList["queryParams"]) => ["v5", { url: "/v1/code/list" }, ...(params ? [params] : [])] as const;
export type CodeListQueryKey = ReturnType<typeof codeListQueryKey>;
export function codeListQueryOptions(params: CodeList["queryParams"], options: CodeList["client"]["parameters"] = {}) {
    const queryKey = codeListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeList["data"], CodeList["error"]>({
                method: "get",
                url: `/v1/code/list`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 查询code列表
 * @summary 查询code列表
 * @link /v1/code/list
 */
export function useCodeListHook<TData = CodeList["response"], TQueryData = CodeList["response"], TQueryKey extends QueryKey = CodeListQueryKey>(params: CodeList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<CodeList["response"], CodeList["error"], TData, TQueryData, TQueryKey>>;
    client?: CodeList["client"]["parameters"];
} = {}): UseQueryResult<TData, CodeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeListQueryKey(params);
    const query = useQuery({
        ...codeListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CodeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const codeListSuspenseQueryKey = (params: CodeList["queryParams"]) => ["v5", { url: "/v1/code/list" }, ...(params ? [params] : [])] as const;
export type CodeListSuspenseQueryKey = ReturnType<typeof codeListSuspenseQueryKey>;
export function codeListSuspenseQueryOptions(params: CodeList["queryParams"], options: CodeList["client"]["parameters"] = {}) {
    const queryKey = codeListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeList["data"], CodeList["error"]>({
                method: "get",
                url: `/v1/code/list`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 查询code列表
 * @summary 查询code列表
 * @link /v1/code/list
 */
export function useCodeListHookSuspense<TData = CodeList["response"], TQueryKey extends QueryKey = CodeListSuspenseQueryKey>(params: CodeList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CodeList["response"], CodeList["error"], TData, TQueryKey>>;
    client?: CodeList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CodeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...codeListSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CodeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}