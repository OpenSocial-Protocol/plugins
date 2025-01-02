import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UserReviewsQueryResponse, UserReviewsQueryParams } from "../models/UserReviews";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UserReviewsClient = typeof client<UserReviewsQueryResponse, Error, never>;
type UserReviews = {
    data: UserReviewsQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: UserReviewsQueryParams;
    headerParams: never;
    response: UserReviewsQueryResponse;
    client: {
        parameters: Partial<Parameters<UserReviewsClient>[0]>;
        return: Awaited<ReturnType<UserReviewsClient>>;
    };
};
export const userReviewsQueryKey = (params: UserReviews["queryParams"]) => ["v5", { url: "/v1/user/reviews" }, ...(params ? [params] : [])] as const;
export type UserReviewsQueryKey = ReturnType<typeof userReviewsQueryKey>;
export function userReviewsQueryOptions(params: UserReviews["queryParams"], options: UserReviews["client"]["parameters"] = {}) {
    const queryKey = userReviewsQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserReviews["data"], UserReviews["error"]>({
                method: "get",
                url: `/v1/user/reviews`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户评价列表
 * @summary 获取用户评价列表
 * @link /v1/user/reviews
 */
export function useUserReviewsHook<TData = UserReviews["response"], TQueryData = UserReviews["response"], TQueryKey extends QueryKey = UserReviewsQueryKey>(params: UserReviews["queryParams"], options: {
    query?: Partial<QueryObserverOptions<UserReviews["response"], UserReviews["error"], TData, TQueryData, TQueryKey>>;
    client?: UserReviews["client"]["parameters"];
} = {}): UseQueryResult<TData, UserReviews["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userReviewsQueryKey(params);
    const query = useQuery({
        ...userReviewsQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UserReviews["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const userReviewsSuspenseQueryKey = (params: UserReviews["queryParams"]) => ["v5", { url: "/v1/user/reviews" }, ...(params ? [params] : [])] as const;
export type UserReviewsSuspenseQueryKey = ReturnType<typeof userReviewsSuspenseQueryKey>;
export function userReviewsSuspenseQueryOptions(params: UserReviews["queryParams"], options: UserReviews["client"]["parameters"] = {}) {
    const queryKey = userReviewsSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UserReviews["data"], UserReviews["error"]>({
                method: "get",
                url: `/v1/user/reviews`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取用户评价列表
 * @summary 获取用户评价列表
 * @link /v1/user/reviews
 */
export function useUserReviewsHookSuspense<TData = UserReviews["response"], TQueryKey extends QueryKey = UserReviewsSuspenseQueryKey>(params: UserReviews["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<UserReviews["response"], UserReviews["error"], TData, TQueryKey>>;
    client?: UserReviews["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UserReviews["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? userReviewsSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...userReviewsSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UserReviews["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}