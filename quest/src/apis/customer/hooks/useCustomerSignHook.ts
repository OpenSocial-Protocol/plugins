import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CustomerSignQueryResponse, CustomerSignQueryParams, CustomerSignHeaderParams } from "../models/CustomerSign";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CustomerSignClient = typeof client<CustomerSignQueryResponse, Error, never>;
type CustomerSign = {
    data: CustomerSignQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CustomerSignQueryParams;
    headerParams: CustomerSignHeaderParams;
    response: CustomerSignQueryResponse;
    client: {
        parameters: Partial<Parameters<CustomerSignClient>[0]>;
        return: Awaited<ReturnType<CustomerSignClient>>;
    };
};
export const customerSignQueryKey = (params?: CustomerSign["queryParams"]) => ["v5", { url: "/v2/customer/sign" }, ...(params ? [params] : [])] as const;
export type CustomerSignQueryKey = ReturnType<typeof customerSignQueryKey>;
export function customerSignQueryOptions(params?: CustomerSign["queryParams"], headers?: CustomerSign["headerParams"], options: CustomerSign["client"]["parameters"] = {}) {
    const queryKey = customerSignQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CustomerSign["data"], CustomerSign["error"]>({
                method: "get",
                url: `/v2/customer/sign`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 获取用户签名
 * @link /v2/customer/sign
 */
export function useCustomerSignHook<TData = CustomerSign["response"], TQueryData = CustomerSign["response"], TQueryKey extends QueryKey = CustomerSignQueryKey>(params?: CustomerSign["queryParams"], headers?: CustomerSign["headerParams"], options: {
    query?: Partial<QueryObserverOptions<CustomerSign["response"], CustomerSign["error"], TData, TQueryData, TQueryKey>>;
    client?: CustomerSign["client"]["parameters"];
} = {}): UseQueryResult<TData, CustomerSign["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? customerSignQueryKey(params);
    const query = useQuery({
        ...customerSignQueryOptions(params, headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CustomerSign["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const customerSignSuspenseQueryKey = (params?: CustomerSign["queryParams"]) => ["v5", { url: "/v2/customer/sign" }, ...(params ? [params] : [])] as const;
export type CustomerSignSuspenseQueryKey = ReturnType<typeof customerSignSuspenseQueryKey>;
export function customerSignSuspenseQueryOptions(params?: CustomerSign["queryParams"], headers?: CustomerSign["headerParams"], options: CustomerSign["client"]["parameters"] = {}) {
    const queryKey = customerSignSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CustomerSign["data"], CustomerSign["error"]>({
                method: "get",
                url: `/v2/customer/sign`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 获取用户签名
 * @link /v2/customer/sign
 */
export function useCustomerSignHookSuspense<TData = CustomerSign["response"], TQueryKey extends QueryKey = CustomerSignSuspenseQueryKey>(params?: CustomerSign["queryParams"], headers?: CustomerSign["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CustomerSign["response"], CustomerSign["error"], TData, TQueryKey>>;
    client?: CustomerSign["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CustomerSign["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? customerSignSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...customerSignSuspenseQueryOptions(params, headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CustomerSign["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}