import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetProfileQueryResponse, GetProfilePathParams } from "../models/GetProfile";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetProfileClient = typeof client<GetProfileQueryResponse, Error, never>;
type GetProfile = {
    data: GetProfileQueryResponse;
    error: Error;
    request: never;
    pathParams: GetProfilePathParams;
    queryParams: never;
    headerParams: never;
    response: GetProfileQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProfileClient>[0]>;
        return: Awaited<ReturnType<GetProfileClient>>;
    };
};
export const getProfileQueryKey = (id: GetProfilePathParams["id"]) => ["v5", { url: "/v1/profile/:id", params: { id: id } }] as const;
export type GetProfileQueryKey = ReturnType<typeof getProfileQueryKey>;
export function getProfileQueryOptions(id: GetProfilePathParams["id"], options: GetProfile["client"]["parameters"] = {}) {
    const queryKey = getProfileQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetProfile["data"], GetProfile["error"]>({
                method: "get",
                url: `/v1/profile/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get profile
 * @summary /profile/{id}
 * @link /v1/profile/:id
 */
export function useGetProfileHook<TData = GetProfile["response"], TQueryData = GetProfile["response"], TQueryKey extends QueryKey = GetProfileQueryKey>(id: GetProfilePathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetProfile["response"], GetProfile["error"], TData, TQueryData, TQueryKey>>;
    client?: GetProfile["client"]["parameters"];
} = {}): UseQueryResult<TData, GetProfile["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getProfileQueryKey(id);
    const query = useQuery({
        ...getProfileQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetProfile["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getProfileSuspenseQueryKey = (id: GetProfilePathParams["id"]) => ["v5", { url: "/v1/profile/:id", params: { id: id } }] as const;
export type GetProfileSuspenseQueryKey = ReturnType<typeof getProfileSuspenseQueryKey>;
export function getProfileSuspenseQueryOptions(id: GetProfilePathParams["id"], options: GetProfile["client"]["parameters"] = {}) {
    const queryKey = getProfileSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetProfile["data"], GetProfile["error"]>({
                method: "get",
                url: `/v1/profile/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description get profile
 * @summary /profile/{id}
 * @link /v1/profile/:id
 */
export function useGetProfileHookSuspense<TData = GetProfile["response"], TQueryKey extends QueryKey = GetProfileSuspenseQueryKey>(id: GetProfilePathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetProfile["response"], GetProfile["error"], TData, TQueryKey>>;
    client?: GetProfile["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetProfile["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getProfileSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getProfileSuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetProfile["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}