import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UserGoAppQueryResponse } from "../models/UserGoApp";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UserGoAppClient = typeof client<UserGoAppQueryResponse, Error, never>;
type UserGoApp = {
    data: UserGoAppQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserGoAppQueryResponse;
    client: {
        parameters: Partial<Parameters<UserGoAppClient>[0]>;
        return: Awaited<ReturnType<UserGoAppClient>>;
    };
};
export const userGoAppQueryKey = () => ["v5", { url: "/v1/user/goapp" }] as const;
export type UserGoAppQueryKey = ReturnType<typeof userGoAppQueryKey>;
export function userGoAppQueryOptions(options: UserGoApp["client"]["parameters"] = {}) {
    const queryKey = userGoAppQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserGoApp["data"], UserGoApp["error"]>({
                method: "get",
                url: `/v1/user/goapp`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 能否进入app
 * @summary 能否进入app
 * @link /v1/user/goapp
 * @deprecated
 */
export function useUserGoAppHook<TData = UserGoApp["response"], TQueryData = UserGoApp["response"], TQueryKey extends QueryKey = UserGoAppQueryKey>(options: {
    query?: Partial<QueryObserverOptions<UserGoApp["response"], UserGoApp["error"], TData, TQueryData, TQueryKey>>;
    client?: UserGoApp["client"]["parameters"];
} = {}): UseQueryResult<TData, UserGoApp["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userGoAppQueryKey();
    const query = useQuery({
        ...userGoAppQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UserGoApp["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const userGoAppSuspenseQueryKey = () => ["v5", { url: "/v1/user/goapp" }] as const;
export type UserGoAppSuspenseQueryKey = ReturnType<typeof userGoAppSuspenseQueryKey>;
export function userGoAppSuspenseQueryOptions(options: UserGoApp["client"]["parameters"] = {}) {
    const queryKey = userGoAppSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserGoApp["data"], UserGoApp["error"]>({
                method: "get",
                url: `/v1/user/goapp`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 能否进入app
 * @summary 能否进入app
 * @link /v1/user/goapp
 * @deprecated
 */
export function useUserGoAppHookSuspense<TData = UserGoApp["response"], TQueryKey extends QueryKey = UserGoAppSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<UserGoApp["response"], UserGoApp["error"], TData, TQueryKey>>;
    client?: UserGoApp["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UserGoApp["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userGoAppSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...userGoAppSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UserGoApp["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}