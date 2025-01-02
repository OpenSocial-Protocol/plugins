import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CodeDefaultInviteQueryResponse } from "../models/CodeDefaultInvite";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CodeDefaultInviteClient = typeof client<CodeDefaultInviteQueryResponse, Error, never>;
type CodeDefaultInvite = {
    data: CodeDefaultInviteQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CodeDefaultInviteQueryResponse;
    client: {
        parameters: Partial<Parameters<CodeDefaultInviteClient>[0]>;
        return: Awaited<ReturnType<CodeDefaultInviteClient>>;
    };
};
export const codeDefaultInviteQueryKey = () => ["v5", { url: "/v2/customer/code/defaultInvite" }] as const;
export type CodeDefaultInviteQueryKey = ReturnType<typeof codeDefaultInviteQueryKey>;
export function codeDefaultInviteQueryOptions(options: CodeDefaultInvite["client"]["parameters"] = {}) {
    const queryKey = codeDefaultInviteQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeDefaultInvite["data"], CodeDefaultInvite["error"]>({
                method: "get",
                url: `/v2/customer/code/defaultInvite`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary default Invite 兑换码详情
 * @link /v2/customer/code/defaultInvite
 */
export function useCodeDefaultInviteHook<TData = CodeDefaultInvite["response"], TQueryData = CodeDefaultInvite["response"], TQueryKey extends QueryKey = CodeDefaultInviteQueryKey>(options: {
    query?: Partial<QueryObserverOptions<CodeDefaultInvite["response"], CodeDefaultInvite["error"], TData, TQueryData, TQueryKey>>;
    client?: CodeDefaultInvite["client"]["parameters"];
} = {}): UseQueryResult<TData, CodeDefaultInvite["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeDefaultInviteQueryKey();
    const query = useQuery({
        ...codeDefaultInviteQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CodeDefaultInvite["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const codeDefaultInviteSuspenseQueryKey = () => ["v5", { url: "/v2/customer/code/defaultInvite" }] as const;
export type CodeDefaultInviteSuspenseQueryKey = ReturnType<typeof codeDefaultInviteSuspenseQueryKey>;
export function codeDefaultInviteSuspenseQueryOptions(options: CodeDefaultInvite["client"]["parameters"] = {}) {
    const queryKey = codeDefaultInviteSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CodeDefaultInvite["data"], CodeDefaultInvite["error"]>({
                method: "get",
                url: `/v2/customer/code/defaultInvite`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary default Invite 兑换码详情
 * @link /v2/customer/code/defaultInvite
 */
export function useCodeDefaultInviteHookSuspense<TData = CodeDefaultInvite["response"], TQueryKey extends QueryKey = CodeDefaultInviteSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<CodeDefaultInvite["response"], CodeDefaultInvite["error"], TData, TQueryKey>>;
    client?: CodeDefaultInvite["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CodeDefaultInvite["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? codeDefaultInviteSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...codeDefaultInviteSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CodeDefaultInvite["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}