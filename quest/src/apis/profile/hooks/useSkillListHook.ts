import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { SkillListQueryResponse } from "../models/SkillList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type SkillListClient = typeof client<SkillListQueryResponse, Error, never>;
type SkillList = {
    data: SkillListQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: SkillListQueryResponse;
    client: {
        parameters: Partial<Parameters<SkillListClient>[0]>;
        return: Awaited<ReturnType<SkillListClient>>;
    };
};
export const skillListQueryKey = () => ["v5", { url: "/v1/skill/list" }] as const;
export type SkillListQueryKey = ReturnType<typeof skillListQueryKey>;
export function skillListQueryOptions(options: SkillList["client"]["parameters"] = {}) {
    const queryKey = skillListQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SkillList["data"], SkillList["error"]>({
                method: "get",
                url: `/v1/skill/list`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 技能列表查询
 * @summary 技能列表查询
 * @link /v1/skill/list
 * @deprecated
 */
export function useSkillListHook<TData = SkillList["response"], TQueryData = SkillList["response"], TQueryKey extends QueryKey = SkillListQueryKey>(options: {
    query?: Partial<QueryObserverOptions<SkillList["response"], SkillList["error"], TData, TQueryData, TQueryKey>>;
    client?: SkillList["client"]["parameters"];
} = {}): UseQueryResult<TData, SkillList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? skillListQueryKey();
    const query = useQuery({
        ...skillListQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, SkillList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const skillListSuspenseQueryKey = () => ["v5", { url: "/v1/skill/list" }] as const;
export type SkillListSuspenseQueryKey = ReturnType<typeof skillListSuspenseQueryKey>;
export function skillListSuspenseQueryOptions(options: SkillList["client"]["parameters"] = {}) {
    const queryKey = skillListSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SkillList["data"], SkillList["error"]>({
                method: "get",
                url: `/v1/skill/list`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 技能列表查询
 * @summary 技能列表查询
 * @link /v1/skill/list
 * @deprecated
 */
export function useSkillListHookSuspense<TData = SkillList["response"], TQueryKey extends QueryKey = SkillListSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<SkillList["response"], SkillList["error"], TData, TQueryKey>>;
    client?: SkillList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, SkillList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? skillListSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...skillListSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, SkillList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}