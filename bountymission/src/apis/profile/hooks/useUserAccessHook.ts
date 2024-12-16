import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UserAccessQueryResponse, UserAccessQueryParams } from "../models/UserAccess";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UserAccessClient = typeof client<UserAccessQueryResponse, Error, never>;
type UserAccess = {
    data: UserAccessQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: UserAccessQueryParams;
    headerParams: never;
    response: UserAccessQueryResponse;
    client: {
        parameters: Partial<Parameters<UserAccessClient>[0]>;
        return: Awaited<ReturnType<UserAccessClient>>;
    };
};
export const userAccessQueryKey = (params: UserAccess["queryParams"]) => ["v5", { url: "/v1/user/access" }, ...(params ? [params] : [])] as const;
export type UserAccessQueryKey = ReturnType<typeof userAccessQueryKey>;
export function userAccessQueryOptions(params: UserAccess["queryParams"], options: UserAccess["client"]["parameters"] = {}) {
    const queryKey = userAccessQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserAccess["data"], UserAccess["error"]>({
                method: "get",
                url: `/v1/user/access`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 访问场景资格判断
 * @summary 访问场景资格判断
 * @link /v1/user/access
 */
export function useUserAccessHook<TData = UserAccess["response"], TQueryData = UserAccess["response"], TQueryKey extends QueryKey = UserAccessQueryKey>(params: UserAccess["queryParams"], options: {
    query?: Partial<QueryObserverOptions<UserAccess["response"], UserAccess["error"], TData, TQueryData, TQueryKey>>;
    client?: UserAccess["client"]["parameters"];
} = {}): UseQueryResult<TData, UserAccess["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userAccessQueryKey(params);
    const query = useQuery({
        ...userAccessQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UserAccess["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const userAccessSuspenseQueryKey = (params: UserAccess["queryParams"]) => ["v5", { url: "/v1/user/access" }, ...(params ? [params] : [])] as const;
export type UserAccessSuspenseQueryKey = ReturnType<typeof userAccessSuspenseQueryKey>;
export function userAccessSuspenseQueryOptions(params: UserAccess["queryParams"], options: UserAccess["client"]["parameters"] = {}) {
    const queryKey = userAccessSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserAccess["data"], UserAccess["error"]>({
                method: "get",
                url: `/v1/user/access`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 访问场景资格判断
 * @summary 访问场景资格判断
 * @link /v1/user/access
 */
export function useUserAccessHookSuspense<TData = UserAccess["response"], TQueryKey extends QueryKey = UserAccessSuspenseQueryKey>(params: UserAccess["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<UserAccess["response"], UserAccess["error"], TData, TQueryKey>>;
    client?: UserAccess["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UserAccess["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userAccessSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...userAccessSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UserAccess["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}