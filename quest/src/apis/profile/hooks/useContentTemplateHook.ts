import client from "@app/modules/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ContentTemplateQueryResponse, ContentTemplateQueryParams } from "../models/ContentTemplate";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ContentTemplateClient = typeof client<ContentTemplateQueryResponse, Error, never>;
type ContentTemplate = {
    data: ContentTemplateQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ContentTemplateQueryParams;
    headerParams: never;
    response: ContentTemplateQueryResponse;
    client: {
        parameters: Partial<Parameters<ContentTemplateClient>[0]>;
        return: Awaited<ReturnType<ContentTemplateClient>>;
    };
};
export const contentTemplateQueryKey = (params: ContentTemplate["queryParams"]) => ["v5", { url: "/v1/content/template" }, ...(params ? [params] : [])] as const;
export type ContentTemplateQueryKey = ReturnType<typeof contentTemplateQueryKey>;
export function contentTemplateQueryOptions(params: ContentTemplate["queryParams"], options: ContentTemplate["client"]["parameters"] = {}) {
    const queryKey = contentTemplateQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContentTemplate["data"], ContentTemplate["error"]>({
                method: "get",
                url: `/v1/content/template`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 内容模板查询
 * @summary 内容模板查询
 * @link /v1/content/template
 */
export function useContentTemplateHook<TData = ContentTemplate["response"], TQueryData = ContentTemplate["response"], TQueryKey extends QueryKey = ContentTemplateQueryKey>(params: ContentTemplate["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ContentTemplate["response"], ContentTemplate["error"], TData, TQueryData, TQueryKey>>;
    client?: ContentTemplate["client"]["parameters"];
} = {}): UseQueryResult<TData, ContentTemplate["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contentTemplateQueryKey(params);
    const query = useQuery({
        ...contentTemplateQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ContentTemplate["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const contentTemplateSuspenseQueryKey = (params: ContentTemplate["queryParams"]) => ["v5", { url: "/v1/content/template" }, ...(params ? [params] : [])] as const;
export type ContentTemplateSuspenseQueryKey = ReturnType<typeof contentTemplateSuspenseQueryKey>;
export function contentTemplateSuspenseQueryOptions(params: ContentTemplate["queryParams"], options: ContentTemplate["client"]["parameters"] = {}) {
    const queryKey = contentTemplateSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContentTemplate["data"], ContentTemplate["error"]>({
                method: "get",
                url: `/v1/content/template`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description 内容模板查询
 * @summary 内容模板查询
 * @link /v1/content/template
 */
export function useContentTemplateHookSuspense<TData = ContentTemplate["response"], TQueryKey extends QueryKey = ContentTemplateSuspenseQueryKey>(params: ContentTemplate["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ContentTemplate["response"], ContentTemplate["error"], TData, TQueryKey>>;
    client?: ContentTemplate["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ContentTemplate["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contentTemplateSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...contentTemplateSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ContentTemplate["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}