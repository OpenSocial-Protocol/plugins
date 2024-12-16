import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { DingTalkNotifyMutationResponse, DingTalkNotifyQueryParams } from "../models/DingTalkNotify";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DingTalkNotifyClient = typeof client<DingTalkNotifyMutationResponse, Error, never>;
type DingTalkNotify = {
    data: DingTalkNotifyMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: DingTalkNotifyQueryParams;
    headerParams: never;
    response: DingTalkNotifyMutationResponse;
    client: {
        parameters: Partial<Parameters<DingTalkNotifyClient>[0]>;
        return: Awaited<ReturnType<DingTalkNotifyClient>>;
    };
};
/**
 * @link /v1/dingtalk/webhook/notify
 */
export function useDingTalkNotifyHook(params?: DingTalkNotify["queryParams"], options: {
    mutation?: UseMutationOptions<DingTalkNotify["response"], DingTalkNotify["error"], DingTalkNotify["request"]>;
    client?: DingTalkNotify["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DingTalkNotify["data"], DingTalkNotify["error"], DingTalkNotify["request"]>({
                method: "post",
                url: `/v1/dingtalk/webhook/notify`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}