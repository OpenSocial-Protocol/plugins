import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UserBasicInfoQueryResponse, UserBasicInfoQueryParams } from "../models/UserBasicInfo";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UserBasicInfoClient = typeof client<UserBasicInfoQueryResponse, Error, never>;
type UserBasicInfo = {
    data: UserBasicInfoQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: UserBasicInfoQueryParams;
    headerParams: never;
    response: UserBasicInfoQueryResponse;
    client: {
        parameters: Partial<Parameters<UserBasicInfoClient>[0]>;
        return: Awaited<ReturnType<UserBasicInfoClient>>;
    };
};
export const userBasicInfoQueryKey = (params?: UserBasicInfo["queryParams"]) => ["v5", { url: "/v1/user/basic/info" }, ...(params ? [params] : [])] as const;
export type UserBasicInfoQueryKey = ReturnType<typeof userBasicInfoQueryKey>;
export function userBasicInfoQueryOptions(params?: UserBasicInfo["queryParams"], options: UserBasicInfo["client"]["parameters"] = {}) {
    const queryKey = userBasicInfoQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserBasicInfo["data"], UserBasicInfo["error"]>({
                method: "get",
                url: `/v1/user/basic/info`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 用户基础信息查询
 * @summary 用户基础信息查询
 * @link /v1/user/basic/info
 * @deprecated
 */
export function useUserBasicInfoHook<TData = UserBasicInfo["response"], TQueryData = UserBasicInfo["response"], TQueryKey extends QueryKey = UserBasicInfoQueryKey>(params?: UserBasicInfo["queryParams"], options: {
    query?: Partial<QueryObserverOptions<UserBasicInfo["response"], UserBasicInfo["error"], TData, TQueryData, TQueryKey>>;
    client?: UserBasicInfo["client"]["parameters"];
} = {}): UseQueryResult<TData, UserBasicInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userBasicInfoQueryKey(params);
    const query = useQuery({
        ...userBasicInfoQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UserBasicInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const userBasicInfoSuspenseQueryKey = (params?: UserBasicInfo["queryParams"]) => ["v5", { url: "/v1/user/basic/info" }, ...(params ? [params] : [])] as const;
export type UserBasicInfoSuspenseQueryKey = ReturnType<typeof userBasicInfoSuspenseQueryKey>;
export function userBasicInfoSuspenseQueryOptions(params?: UserBasicInfo["queryParams"], options: UserBasicInfo["client"]["parameters"] = {}) {
    const queryKey = userBasicInfoSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserBasicInfo["data"], UserBasicInfo["error"]>({
                method: "get",
                url: `/v1/user/basic/info`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 用户基础信息查询
 * @summary 用户基础信息查询
 * @link /v1/user/basic/info
 * @deprecated
 */
export function useUserBasicInfoHookSuspense<TData = UserBasicInfo["response"], TQueryKey extends QueryKey = UserBasicInfoSuspenseQueryKey>(params?: UserBasicInfo["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<UserBasicInfo["response"], UserBasicInfo["error"], TData, TQueryKey>>;
    client?: UserBasicInfo["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UserBasicInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userBasicInfoSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...userBasicInfoSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UserBasicInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}