import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { KycResultQueryResponse } from "../models/KycResult";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type KycResultClient = typeof client<KycResultQueryResponse, Error, never>;
type KycResult = {
    data: KycResultQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: KycResultQueryResponse;
    client: {
        parameters: Partial<Parameters<KycResultClient>[0]>;
        return: Awaited<ReturnType<KycResultClient>>;
    };
};
export const kycResultQueryKey = () => ["v5", { url: "/v1/kyc/result" }] as const;
export type KycResultQueryKey = ReturnType<typeof kycResultQueryKey>;
export function kycResultQueryOptions(options: KycResult["client"]["parameters"] = {}) {
    const queryKey = kycResultQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<KycResult["data"], KycResult["error"]>({
                method: "get",
                url: `/v1/kyc/result`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v1/kyc/result
 */
export function useKycResultHook<TData = KycResult["response"], TQueryData = KycResult["response"], TQueryKey extends QueryKey = KycResultQueryKey>(options: {
    query?: Partial<QueryObserverOptions<KycResult["response"], KycResult["error"], TData, TQueryData, TQueryKey>>;
    client?: KycResult["client"]["parameters"];
} = {}): UseQueryResult<TData, KycResult["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? kycResultQueryKey();
    const query = useQuery({
        ...kycResultQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, KycResult["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const kycResultSuspenseQueryKey = () => ["v5", { url: "/v1/kyc/result" }] as const;
export type KycResultSuspenseQueryKey = ReturnType<typeof kycResultSuspenseQueryKey>;
export function kycResultSuspenseQueryOptions(options: KycResult["client"]["parameters"] = {}) {
    const queryKey = kycResultSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<KycResult["data"], KycResult["error"]>({
                method: "get",
                url: `/v1/kyc/result`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v1/kyc/result
 */
export function useKycResultHookSuspense<TData = KycResult["response"], TQueryKey extends QueryKey = KycResultSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<KycResult["response"], KycResult["error"], TData, TQueryKey>>;
    client?: KycResult["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, KycResult["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? kycResultSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...kycResultSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, KycResult["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}