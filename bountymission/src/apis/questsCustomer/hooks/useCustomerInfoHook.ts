import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CustomerInfoQueryResponse, CustomerInfoPathParams, CustomerInfoQueryParams, CustomerInfoHeaderParams } from "../models/CustomerInfo";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CustomerInfoClient = typeof client<CustomerInfoQueryResponse, Error, never>;
type CustomerInfo = {
    data: CustomerInfoQueryResponse;
    error: Error;
    request: never;
    pathParams: CustomerInfoPathParams;
    queryParams: CustomerInfoQueryParams;
    headerParams: CustomerInfoHeaderParams;
    response: CustomerInfoQueryResponse;
    client: {
        parameters: Partial<Parameters<CustomerInfoClient>[0]>;
        return: Awaited<ReturnType<CustomerInfoClient>>;
    };
};
export const customerInfoQueryKey = (cid: CustomerInfoPathParams["cid"], params?: CustomerInfo["queryParams"]) => ["v5", { url: "/s2/customer/:cid", params: { cid: cid } }, ...(params ? [params] : [])] as const;
export type CustomerInfoQueryKey = ReturnType<typeof customerInfoQueryKey>;
export function customerInfoQueryOptions(cid: CustomerInfoPathParams["cid"], headers: CustomerInfo["headerParams"], params?: CustomerInfo["queryParams"], options: CustomerInfo["client"]["parameters"] = {}) {
    const queryKey = customerInfoQueryKey(cid, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CustomerInfo["data"], CustomerInfo["error"]>({
                method: "get",
                url: `/s2/customer/${cid}`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get quests customer info
 * @link /s2/customer/:cid
 */
export function useCustomerInfoHook<TData = CustomerInfo["response"], TQueryData = CustomerInfo["response"], TQueryKey extends QueryKey = CustomerInfoQueryKey>(cid: CustomerInfoPathParams["cid"], headers: CustomerInfo["headerParams"], params?: CustomerInfo["queryParams"], options: {
    query?: Partial<QueryObserverOptions<CustomerInfo["response"], CustomerInfo["error"], TData, TQueryData, TQueryKey>>;
    client?: CustomerInfo["client"]["parameters"];
} = {}): UseQueryResult<TData, CustomerInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? customerInfoQueryKey(cid, params);
    const query = useQuery({
        ...customerInfoQueryOptions(cid, headers, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CustomerInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const customerInfoSuspenseQueryKey = (cid: CustomerInfoPathParams["cid"], params?: CustomerInfo["queryParams"]) => ["v5", { url: "/s2/customer/:cid", params: { cid: cid } }, ...(params ? [params] : [])] as const;
export type CustomerInfoSuspenseQueryKey = ReturnType<typeof customerInfoSuspenseQueryKey>;
export function customerInfoSuspenseQueryOptions(cid: CustomerInfoPathParams["cid"], headers: CustomerInfo["headerParams"], params?: CustomerInfo["queryParams"], options: CustomerInfo["client"]["parameters"] = {}) {
    const queryKey = customerInfoSuspenseQueryKey(cid, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CustomerInfo["data"], CustomerInfo["error"]>({
                method: "get",
                url: `/s2/customer/${cid}`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary get quests customer info
 * @link /s2/customer/:cid
 */
export function useCustomerInfoHookSuspense<TData = CustomerInfo["response"], TQueryKey extends QueryKey = CustomerInfoSuspenseQueryKey>(cid: CustomerInfoPathParams["cid"], headers: CustomerInfo["headerParams"], params?: CustomerInfo["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CustomerInfo["response"], CustomerInfo["error"], TData, TQueryKey>>;
    client?: CustomerInfo["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CustomerInfo["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? customerInfoSuspenseQueryKey(cid, params);
    const query = useSuspenseQuery({
        ...customerInfoSuspenseQueryOptions(cid, headers, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CustomerInfo["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}