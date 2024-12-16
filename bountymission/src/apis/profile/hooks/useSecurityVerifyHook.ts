import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { SecurityVerifyQueryResponse, SecurityVerifyQueryParams } from "../models/SecurityVerify";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type SecurityVerifyClient = typeof client<SecurityVerifyQueryResponse, Error, never>;
type SecurityVerify = {
    data: SecurityVerifyQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: SecurityVerifyQueryParams;
    headerParams: never;
    response: SecurityVerifyQueryResponse;
    client: {
        parameters: Partial<Parameters<SecurityVerifyClient>[0]>;
        return: Awaited<ReturnType<SecurityVerifyClient>>;
    };
};
export const securityVerifyQueryKey = (params: SecurityVerify["queryParams"]) => ["v5", { url: "/v1/customer/verify/security" }, ...(params ? [params] : [])] as const;
export type SecurityVerifyQueryKey = ReturnType<typeof securityVerifyQueryKey>;
export function securityVerifyQueryOptions(params: SecurityVerify["queryParams"], options: SecurityVerify["client"]["parameters"] = {}) {
    const queryKey = securityVerifyQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SecurityVerify["data"], SecurityVerify["error"]>({
                method: "get",
                url: `/v1/customer/verify/security`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v1/customer/verify/security
 */
export function useSecurityVerifyHook<TData = SecurityVerify["response"], TQueryData = SecurityVerify["response"], TQueryKey extends QueryKey = SecurityVerifyQueryKey>(params: SecurityVerify["queryParams"], options: {
    query?: Partial<QueryObserverOptions<SecurityVerify["response"], SecurityVerify["error"], TData, TQueryData, TQueryKey>>;
    client?: SecurityVerify["client"]["parameters"];
} = {}): UseQueryResult<TData, SecurityVerify["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? securityVerifyQueryKey(params);
    const query = useQuery({
        ...securityVerifyQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, SecurityVerify["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const securityVerifySuspenseQueryKey = (params: SecurityVerify["queryParams"]) => ["v5", { url: "/v1/customer/verify/security" }, ...(params ? [params] : [])] as const;
export type SecurityVerifySuspenseQueryKey = ReturnType<typeof securityVerifySuspenseQueryKey>;
export function securityVerifySuspenseQueryOptions(params: SecurityVerify["queryParams"], options: SecurityVerify["client"]["parameters"] = {}) {
    const queryKey = securityVerifySuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SecurityVerify["data"], SecurityVerify["error"]>({
                method: "get",
                url: `/v1/customer/verify/security`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /v1/customer/verify/security
 */
export function useSecurityVerifyHookSuspense<TData = SecurityVerify["response"], TQueryKey extends QueryKey = SecurityVerifySuspenseQueryKey>(params: SecurityVerify["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<SecurityVerify["response"], SecurityVerify["error"], TData, TQueryKey>>;
    client?: SecurityVerify["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, SecurityVerify["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? securityVerifySuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...securityVerifySuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, SecurityVerify["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}