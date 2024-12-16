import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CustomerQueryResponse, CustomerHeaderParams } from "../models/Customer";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CustomerClient = typeof client<CustomerQueryResponse, Error, never>;
type Customer = {
    data: CustomerQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: CustomerHeaderParams;
    response: CustomerQueryResponse;
    client: {
        parameters: Partial<Parameters<CustomerClient>[0]>;
        return: Awaited<ReturnType<CustomerClient>>;
    };
};
export const customerQueryKey = () => ["v5", { url: "/v2/customer" }] as const;
export type CustomerQueryKey = ReturnType<typeof customerQueryKey>;
export function customerQueryOptions(headers?: Customer["headerParams"], options: Customer["client"]["parameters"] = {}) {
    const queryKey = customerQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Customer["data"], Customer["error"]>({
                method: "get",
                url: `/v2/customer`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 用户信息获取
 * @link /v2/customer
 */
export function useCustomerHook<TData = Customer["response"], TQueryData = Customer["response"], TQueryKey extends QueryKey = CustomerQueryKey>(headers?: Customer["headerParams"], options: {
    query?: Partial<QueryObserverOptions<Customer["response"], Customer["error"], TData, TQueryData, TQueryKey>>;
    client?: Customer["client"]["parameters"];
} = {}): UseQueryResult<TData, Customer["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? customerQueryKey();
    const query = useQuery({
        ...customerQueryOptions(headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, Customer["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const customerSuspenseQueryKey = () => ["v5", { url: "/v2/customer" }] as const;
export type CustomerSuspenseQueryKey = ReturnType<typeof customerSuspenseQueryKey>;
export function customerSuspenseQueryOptions(headers?: Customer["headerParams"], options: Customer["client"]["parameters"] = {}) {
    const queryKey = customerSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<Customer["data"], Customer["error"]>({
                method: "get",
                url: `/v2/customer`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary 用户信息获取
 * @link /v2/customer
 */
export function useCustomerHookSuspense<TData = Customer["response"], TQueryKey extends QueryKey = CustomerSuspenseQueryKey>(headers?: Customer["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<Customer["response"], Customer["error"], TData, TQueryKey>>;
    client?: Customer["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, Customer["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? customerSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...customerSuspenseQueryOptions(headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, Customer["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}