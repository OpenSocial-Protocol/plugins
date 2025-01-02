import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UserAvatarQueryResponse, UserAvatarQueryParams } from "../models/UserAvatar";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UserAvatarClient = typeof client<UserAvatarQueryResponse, Error, never>;
type UserAvatar = {
    data: UserAvatarQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: UserAvatarQueryParams;
    headerParams: never;
    response: UserAvatarQueryResponse;
    client: {
        parameters: Partial<Parameters<UserAvatarClient>[0]>;
        return: Awaited<ReturnType<UserAvatarClient>>;
    };
};
export const userAvatarQueryKey = (params: UserAvatar["queryParams"]) => ["v5", { url: "/v1/user/avatar" }, ...(params ? [params] : [])] as const;
export type UserAvatarQueryKey = ReturnType<typeof userAvatarQueryKey>;
export function userAvatarQueryOptions(params: UserAvatar["queryParams"], options: UserAvatar["client"]["parameters"] = {}) {
    const queryKey = userAvatarQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserAvatar["data"], UserAvatar["error"]>({
                method: "get",
                url: `/v1/user/avatar`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 根据linkerCode 获取用户头像信息
 * @summary 根据linkerCode 获取用户头像信息
 * @link /v1/user/avatar
 */
export function useUserAvatarHook<TData = UserAvatar["response"], TQueryData = UserAvatar["response"], TQueryKey extends QueryKey = UserAvatarQueryKey>(params: UserAvatar["queryParams"], options: {
    query?: Partial<QueryObserverOptions<UserAvatar["response"], UserAvatar["error"], TData, TQueryData, TQueryKey>>;
    client?: UserAvatar["client"]["parameters"];
} = {}): UseQueryResult<TData, UserAvatar["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userAvatarQueryKey(params);
    const query = useQuery({
        ...userAvatarQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UserAvatar["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const userAvatarSuspenseQueryKey = (params: UserAvatar["queryParams"]) => ["v5", { url: "/v1/user/avatar" }, ...(params ? [params] : [])] as const;
export type UserAvatarSuspenseQueryKey = ReturnType<typeof userAvatarSuspenseQueryKey>;
export function userAvatarSuspenseQueryOptions(params: UserAvatar["queryParams"], options: UserAvatar["client"]["parameters"] = {}) {
    const queryKey = userAvatarSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserAvatar["data"], UserAvatar["error"]>({
                method: "get",
                url: `/v1/user/avatar`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 根据linkerCode 获取用户头像信息
 * @summary 根据linkerCode 获取用户头像信息
 * @link /v1/user/avatar
 */
export function useUserAvatarHookSuspense<TData = UserAvatar["response"], TQueryKey extends QueryKey = UserAvatarSuspenseQueryKey>(params: UserAvatar["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<UserAvatar["response"], UserAvatar["error"], TData, TQueryKey>>;
    client?: UserAvatar["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UserAvatar["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userAvatarSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...userAvatarSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UserAvatar["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}