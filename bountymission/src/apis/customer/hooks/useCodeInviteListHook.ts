import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CodeInviteListQueryResponse, CodeInviteListQueryParams } from "../models/CodeInviteList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CodeInviteListClient = typeof client<CodeInviteListQueryResponse, Error, never>;
type CodeInviteList = {
    data: CodeInviteListQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CodeInviteListQueryParams;
    headerParams: never;
    response: CodeInviteListQueryResponse;
    client: {
        parameters: Partial<Parameters<CodeInviteListClient>[0]>;
        return: Awaited<ReturnType<CodeInviteListClient>>;
    };
};
export const codeInviteListQueryKey = (params: CodeInviteList["queryParams"]) => ["v5", { url: "/v2/customer/code/invite/list" }, ...(params ? [params] : [])] as const;
export type CodeInviteListQueryKey = ReturnType<typeof codeInviteListQueryKey>;
export function codeInviteListQueryOptions(params: CodeInviteList["queryParams"], options: CodeInviteList["client"]["parameters"] = {}) {
    const queryKey = codeInviteListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeInviteList["data"], CodeInviteList["error"]>({
                method: "get",
                url: `/v2/customer/code/invite/list`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary code Invite list 邀请列表
 * @link /v2/customer/code/invite/list
 */
export function useCodeInviteListHook<TData = CodeInviteList["response"], TQueryData = CodeInviteList["response"], TQueryKey extends QueryKey = CodeInviteListQueryKey>(params: CodeInviteList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<CodeInviteList["response"], CodeInviteList["error"], TData, TQueryData, TQueryKey>>;
    client?: CodeInviteList["client"]["parameters"];
} = {}): UseQueryResult<TData, CodeInviteList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeInviteListQueryKey(params);
    const query = useQuery({
        ...codeInviteListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CodeInviteList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const codeInviteListSuspenseQueryKey = (params: CodeInviteList["queryParams"]) => ["v5", { url: "/v2/customer/code/invite/list" }, ...(params ? [params] : [])] as const;
export type CodeInviteListSuspenseQueryKey = ReturnType<typeof codeInviteListSuspenseQueryKey>;
export function codeInviteListSuspenseQueryOptions(params: CodeInviteList["queryParams"], options: CodeInviteList["client"]["parameters"] = {}) {
    const queryKey = codeInviteListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeInviteList["data"], CodeInviteList["error"]>({
                method: "get",
                url: `/v2/customer/code/invite/list`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary code Invite list 邀请列表
 * @link /v2/customer/code/invite/list
 */
export function useCodeInviteListHookSuspense<TData = CodeInviteList["response"], TQueryKey extends QueryKey = CodeInviteListSuspenseQueryKey>(params: CodeInviteList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CodeInviteList["response"], CodeInviteList["error"], TData, TQueryKey>>;
    client?: CodeInviteList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CodeInviteList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeInviteListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...codeInviteListSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CodeInviteList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}