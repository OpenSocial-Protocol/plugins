import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { TwitterInfoQueryResponse, TwitterInfoPathParams, TwitterInfoHeaderParams } from "../models/TwitterInfo";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type TwitterInfoClient = typeof client<TwitterInfoQueryResponse, Error, never>;
type TwitterInfo = {
    data: TwitterInfoQueryResponse;
    error: Error;
    request: never;
    pathParams: TwitterInfoPathParams;
    queryParams: never;
    headerParams: TwitterInfoHeaderParams;
    response: TwitterInfoQueryResponse;
    client: {
        parameters: Partial<Parameters<TwitterInfoClient>[0]>;
        return: Awaited<ReturnType<TwitterInfoClient>>;
    };
};
export const twitterInfoQueryKey = (cid: TwitterInfoPathParams["cid"]) => ["v5", { url: "/s2/customer/twitter/:cid", params: { cid: cid } }] as const;
export type TwitterInfoQueryKey = ReturnType<typeof twitterInfoQueryKey>;
export function twitterInfoQueryOptions(cid: TwitterInfoPathParams["cid"], headers: TwitterInfo["headerParams"], options: TwitterInfo["client"]["parameters"] = {}) {
    const queryKey = twitterInfoQueryKey(cid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TwitterInfo["data"], TwitterInfo["error"]>({
                method: "get",
                url: `/s2/customer/twitter/${cid}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get twitter info of user
 * @link /s2/customer/twitter/:cid
 */
export function useTwitterInfoHook<TData = TwitterInfo["response"], TQueryData = TwitterInfo["response"], TQueryKey extends QueryKey = TwitterInfoQueryKey>(cid: TwitterInfoPathParams["cid"], headers: TwitterInfo["headerParams"], options: {
    query?: Partial<QueryObserverOptions<TwitterInfo["response"], TwitterInfo["error"], TData, TQueryData, TQueryKey>>;
    client?: TwitterInfo["client"]["parameters"];
} = {}): UseQueryResult<TData, TwitterInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? twitterInfoQueryKey(cid);
    const query = useQuery({
        ...twitterInfoQueryOptions(cid, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, TwitterInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const twitterInfoSuspenseQueryKey = (cid: TwitterInfoPathParams["cid"]) => ["v5", { url: "/s2/customer/twitter/:cid", params: { cid: cid } }] as const;
export type TwitterInfoSuspenseQueryKey = ReturnType<typeof twitterInfoSuspenseQueryKey>;
export function twitterInfoSuspenseQueryOptions(cid: TwitterInfoPathParams["cid"], headers: TwitterInfo["headerParams"], options: TwitterInfo["client"]["parameters"] = {}) {
    const queryKey = twitterInfoSuspenseQueryKey(cid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<TwitterInfo["data"], TwitterInfo["error"]>({
                method: "get",
                url: `/s2/customer/twitter/${cid}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get twitter info of user
 * @link /s2/customer/twitter/:cid
 */
export function useTwitterInfoHookSuspense<TData = TwitterInfo["response"], TQueryKey extends QueryKey = TwitterInfoSuspenseQueryKey>(cid: TwitterInfoPathParams["cid"], headers: TwitterInfo["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<TwitterInfo["response"], TwitterInfo["error"], TData, TQueryKey>>;
    client?: TwitterInfo["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, TwitterInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? twitterInfoSuspenseQueryKey(cid);
    const query = useSuspenseQuery({
        ...twitterInfoSuspenseQueryOptions(cid, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, TwitterInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}