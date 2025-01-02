import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { SignQueryResponse, SignHeaderParams } from "../models/Sign";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type SignClient = typeof client<SignQueryResponse, Error, never>;
type Sign = {
    data: SignQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: SignHeaderParams;
    response: SignQueryResponse;
    client: {
        parameters: Partial<Parameters<SignClient>[0]>;
        return: Awaited<ReturnType<SignClient>>;
    };
};
export const signQueryKey = () => ["v5", { url: "/v1/customer/im/sign" }] as const;
export type SignQueryKey = ReturnType<typeof signQueryKey>;
export function signQueryOptions(headers: Sign["headerParams"], options: Sign["client"]["parameters"] = {}) {
    const queryKey = signQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Sign["data"], Sign["error"]>({
                method: "get",
                url: `/v1/customer/im/sign`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取IM签名
 * @summary 获取IM签名
 * @link /v1/customer/im/sign
 */
export function useSignHook<TData = Sign["response"], TQueryData = Sign["response"], TQueryKey extends QueryKey = SignQueryKey>(headers: Sign["headerParams"], options: {
    query?: Partial<QueryObserverOptions<Sign["response"], Sign["error"], TData, TQueryData, TQueryKey>>;
    client?: Sign["client"]["parameters"];
} = {}): UseQueryResult<TData, Sign["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? signQueryKey();
    const query = useQuery({
        ...signQueryOptions(headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Sign["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const signSuspenseQueryKey = () => ["v5", { url: "/v1/customer/im/sign" }] as const;
export type SignSuspenseQueryKey = ReturnType<typeof signSuspenseQueryKey>;
export function signSuspenseQueryOptions(headers: Sign["headerParams"], options: Sign["client"]["parameters"] = {}) {
    const queryKey = signSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Sign["data"], Sign["error"]>({
                method: "get",
                url: `/v1/customer/im/sign`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 获取IM签名
 * @summary 获取IM签名
 * @link /v1/customer/im/sign
 */
export function useSignHookSuspense<TData = Sign["response"], TQueryKey extends QueryKey = SignSuspenseQueryKey>(headers: Sign["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<Sign["response"], Sign["error"], TData, TQueryKey>>;
    client?: Sign["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Sign["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? signSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...signSuspenseQueryOptions(headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Sign["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}