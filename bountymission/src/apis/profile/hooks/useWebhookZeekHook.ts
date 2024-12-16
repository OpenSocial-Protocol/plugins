import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { WebhookZeekMutationRequest, WebhookZeekMutationResponse } from "../models/WebhookZeek";
import type { UseMutationOptions } from "@tanstack/react-query";

 type WebhookZeekClient = typeof client<WebhookZeekMutationResponse, Error, WebhookZeekMutationRequest>;
type WebhookZeek = {
    data: WebhookZeekMutationResponse;
    error: Error;
    request: WebhookZeekMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: WebhookZeekMutationResponse;
    client: {
        parameters: Partial<Parameters<WebhookZeekClient>[0]>;
        return: Awaited<ReturnType<WebhookZeekClient>>;
    };
};
/**
 * @description zeek webhook endpoint
 * @summary /webhook/zeek
 * @link /v1/webhooks/zeek
 */
export function useWebhookZeekHook(options: {
    mutation?: UseMutationOptions<WebhookZeek["response"], WebhookZeek["error"], WebhookZeek["request"]>;
    client?: WebhookZeek["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<WebhookZeek["data"], WebhookZeek["error"], WebhookZeek["request"]>({
                method: "post",
                url: `/v1/webhooks/zeek`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}