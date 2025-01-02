import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CodeInviteQueryResponse, CodeInviteQueryParams } from "../models/CodeInvite";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CodeInviteClient = typeof client<CodeInviteQueryResponse, Error, never>;
type CodeInvite = {
    data: CodeInviteQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CodeInviteQueryParams;
    headerParams: never;
    response: CodeInviteQueryResponse;
    client: {
        parameters: Partial<Parameters<CodeInviteClient>[0]>;
        return: Awaited<ReturnType<CodeInviteClient>>;
    };
};
export const codeInviteQueryKey = (params?: CodeInvite["queryParams"]) => ["v5", { url: "/v2/customer/code/invite" }, ...(params ? [params] : [])] as const;
export type CodeInviteQueryKey = ReturnType<typeof codeInviteQueryKey>;
export function codeInviteQueryOptions(params?: CodeInvite["queryParams"], options: CodeInvite["client"]["parameters"] = {}) {
    const queryKey = codeInviteQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeInvite["data"], CodeInvite["error"]>({
                method: "get",
                url: `/v2/customer/code/invite`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary code Invite 邀请详情
 * @link /v2/customer/code/invite
 */
export function useCodeInviteHook<TData = CodeInvite["response"], TQueryData = CodeInvite["response"], TQueryKey extends QueryKey = CodeInviteQueryKey>(params?: CodeInvite["queryParams"], options: {
    query?: Partial<QueryObserverOptions<CodeInvite["response"], CodeInvite["error"], TData, TQueryData, TQueryKey>>;
    client?: CodeInvite["client"]["parameters"];
} = {}): UseQueryResult<TData, CodeInvite["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeInviteQueryKey(params);
    const query = useQuery({
        ...codeInviteQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CodeInvite["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const codeInviteSuspenseQueryKey = (params?: CodeInvite["queryParams"]) => ["v5", { url: "/v2/customer/code/invite" }, ...(params ? [params] : [])] as const;
export type CodeInviteSuspenseQueryKey = ReturnType<typeof codeInviteSuspenseQueryKey>;
export function codeInviteSuspenseQueryOptions(params?: CodeInvite["queryParams"], options: CodeInvite["client"]["parameters"] = {}) {
    const queryKey = codeInviteSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeInvite["data"], CodeInvite["error"]>({
                method: "get",
                url: `/v2/customer/code/invite`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary code Invite 邀请详情
 * @link /v2/customer/code/invite
 */
export function useCodeInviteHookSuspense<TData = CodeInvite["response"], TQueryKey extends QueryKey = CodeInviteSuspenseQueryKey>(params?: CodeInvite["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CodeInvite["response"], CodeInvite["error"], TData, TQueryKey>>;
    client?: CodeInvite["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CodeInvite["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeInviteSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...codeInviteSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CodeInvite["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}