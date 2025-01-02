import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TwitterInfosQueryResponse, TwitterInfosPathParams, TwitterInfosHeaderParams } from "../models/TwitterInfos";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type TwitterInfosClient = typeof client<TwitterInfosQueryResponse, Error, never>;
type TwitterInfos = {
    data: TwitterInfosQueryResponse;
    error: Error;
    request: never;
    pathParams: TwitterInfosPathParams;
    queryParams: never;
    headerParams: TwitterInfosHeaderParams;
    response: TwitterInfosQueryResponse;
    client: {
        parameters: Partial<Parameters<TwitterInfosClient>[0]>;
        return: Awaited<ReturnType<TwitterInfosClient>>;
    };
};
export const twitterInfosQueryKey = (cid: TwitterInfosPathParams["cid"]) => ["v5", { url: "/s2/customer/twitters/:cid", params: { cid: cid } }] as const;
export type TwitterInfosQueryKey = ReturnType<typeof twitterInfosQueryKey>;
export function twitterInfosQueryOptions(cid: TwitterInfosPathParams["cid"], headers: TwitterInfos["headerParams"], options: TwitterInfos["client"]["parameters"] = {}) {
    const queryKey = twitterInfosQueryKey(cid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TwitterInfos["data"], TwitterInfos["error"]>({
                method: "get",
                url: `/s2/customer/twitters/${cid}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get twitter infos of user by all saasIds
 * @link /s2/customer/twitters/:cid
 */
export function useTwitterInfosHook<TData = TwitterInfos["response"], TQueryData = TwitterInfos["response"], TQueryKey extends QueryKey = TwitterInfosQueryKey>(cid: TwitterInfosPathParams["cid"], headers: TwitterInfos["headerParams"], options: {
    query?: Partial<QueryObserverOptions<TwitterInfos["response"], TwitterInfos["error"], TData, TQueryData, TQueryKey>>;
    client?: TwitterInfos["client"]["parameters"];
} = {}): UseQueryResult<TData, TwitterInfos["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? twitterInfosQueryKey(cid);
    const query = useQuery({
        ...twitterInfosQueryOptions(cid, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, TwitterInfos["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const twitterInfosSuspenseQueryKey = (cid: TwitterInfosPathParams["cid"]) => ["v5", { url: "/s2/customer/twitters/:cid", params: { cid: cid } }] as const;
export type TwitterInfosSuspenseQueryKey = ReturnType<typeof twitterInfosSuspenseQueryKey>;
export function twitterInfosSuspenseQueryOptions(cid: TwitterInfosPathParams["cid"], headers: TwitterInfos["headerParams"], options: TwitterInfos["client"]["parameters"] = {}) {
    const queryKey = twitterInfosSuspenseQueryKey(cid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TwitterInfos["data"], TwitterInfos["error"]>({
                method: "get",
                url: `/s2/customer/twitters/${cid}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get twitter infos of user by all saasIds
 * @link /s2/customer/twitters/:cid
 */
export function useTwitterInfosHookSuspense<TData = TwitterInfos["response"], TQueryKey extends QueryKey = TwitterInfosSuspenseQueryKey>(cid: TwitterInfosPathParams["cid"], headers: TwitterInfos["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<TwitterInfos["response"], TwitterInfos["error"], TData, TQueryKey>>;
    client?: TwitterInfos["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, TwitterInfos["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? twitterInfosSuspenseQueryKey(cid);
    const query = useSuspenseQuery({
        ...twitterInfosSuspenseQueryOptions(cid, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, TwitterInfos["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}