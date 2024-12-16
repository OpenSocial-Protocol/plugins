import client from "@app/modules/client.quests";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CheckInStatusQueryResponse, CheckInStatusHeaderParams } from "../models/CheckInStatus";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CheckInStatusClient = typeof client<CheckInStatusQueryResponse, Error, never>;
type CheckInStatus = {
    data: CheckInStatusQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: CheckInStatusHeaderParams;
    response: CheckInStatusQueryResponse;
    client: {
        parameters: Partial<Parameters<CheckInStatusClient>[0]>;
        return: Awaited<ReturnType<CheckInStatusClient>>;
    };
};
export const checkInStatusQueryKey = () => ["v5", { url: "/v2/tasks/checkin/status" }] as const;
export type CheckInStatusQueryKey = ReturnType<typeof checkInStatusQueryKey>;
export function checkInStatusQueryOptions(headers: CheckInStatus["headerParams"], options: CheckInStatus["client"]["parameters"] = {}) {
    const queryKey = checkInStatusQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CheckInStatus["data"], CheckInStatus["error"]>({
                method: "get",
                url: `/v2/tasks/checkin/status`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary check in
 * @link /v2/tasks/checkin/status
 */
export function useCheckInStatusHook<TData = CheckInStatus["response"], TQueryData = CheckInStatus["response"], TQueryKey extends QueryKey = CheckInStatusQueryKey>(headers: CheckInStatus["headerParams"], options: {
    query?: Partial<QueryObserverOptions<CheckInStatus["response"], CheckInStatus["error"], TData, TQueryData, TQueryKey>>;
    client?: CheckInStatus["client"]["parameters"];
} = {}): UseQueryResult<TData, CheckInStatus["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? checkInStatusQueryKey();
    const query = useQuery({
        ...checkInStatusQueryOptions(headers, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CheckInStatus["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const checkInStatusSuspenseQueryKey = () => ["v5", { url: "/v2/tasks/checkin/status" }] as const;
export type CheckInStatusSuspenseQueryKey = ReturnType<typeof checkInStatusSuspenseQueryKey>;
export function checkInStatusSuspenseQueryOptions(headers: CheckInStatus["headerParams"], options: CheckInStatus["client"]["parameters"] = {}) {
    const queryKey = checkInStatusSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CheckInStatus["data"], CheckInStatus["error"]>({
                method: "get",
                url: `/v2/tasks/checkin/status`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary check in
 * @link /v2/tasks/checkin/status
 */
export function useCheckInStatusHookSuspense<TData = CheckInStatus["response"], TQueryKey extends QueryKey = CheckInStatusSuspenseQueryKey>(headers: CheckInStatus["headerParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CheckInStatus["response"], CheckInStatus["error"], TData, TQueryKey>>;
    client?: CheckInStatus["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CheckInStatus["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? checkInStatusSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...checkInStatusSuspenseQueryOptions(headers, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CheckInStatus["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}