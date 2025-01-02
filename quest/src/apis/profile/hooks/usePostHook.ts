import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PostQueryResponse, PostQueryParams } from "../models/Post";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PostClient = typeof client<PostQueryResponse, Error, never>;
type Post = {
    data: PostQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PostQueryParams;
    headerParams: never;
    response: PostQueryResponse;
    client: {
        parameters: Partial<Parameters<PostClient>[0]>;
        return: Awaited<ReturnType<PostClient>>;
    };
};
export const postQueryKey = (params: Post["queryParams"]) => ["v5", { url: "/v1/search" }, ...(params ? [params] : [])] as const;
export type PostQueryKey = ReturnType<typeof postQueryKey>;
export function postQueryOptions(params: Post["queryParams"], options: Post["client"]["parameters"] = {}) {
    const queryKey = postQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Post["data"], Post["error"]>({
                method: "get",
                url: `/v1/search`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 用户搜索列表
 * @link /v1/search
 */
export function usePostHook<TData = Post["response"], TQueryData = Post["response"], TQueryKey extends QueryKey = PostQueryKey>(params: Post["queryParams"], options: {
    query?: Partial<QueryObserverOptions<Post["response"], Post["error"], TData, TQueryData, TQueryKey>>;
    client?: Post["client"]["parameters"];
} = {}): UseQueryResult<TData, Post["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? postQueryKey(params);
    const query = useQuery({
        ...postQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Post["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const postSuspenseQueryKey = (params: Post["queryParams"]) => ["v5", { url: "/v1/search" }, ...(params ? [params] : [])] as const;
export type PostSuspenseQueryKey = ReturnType<typeof postSuspenseQueryKey>;
export function postSuspenseQueryOptions(params: Post["queryParams"], options: Post["client"]["parameters"] = {}) {
    const queryKey = postSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Post["data"], Post["error"]>({
                method: "get",
                url: `/v1/search`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 用户搜索列表
 * @link /v1/search
 */
export function usePostHookSuspense<TData = Post["response"], TQueryKey extends QueryKey = PostSuspenseQueryKey>(params: Post["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<Post["response"], Post["error"], TData, TQueryKey>>;
    client?: Post["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Post["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? postSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...postSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Post["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}