import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { WebhookAlchemyMutationRequest, WebhookAlchemyMutationResponse } from "../models/WebhookAlchemy";
import type { UseMutationOptions } from "@tanstack/react-query";

 type WebhookAlchemyClient = typeof client<WebhookAlchemyMutationResponse, Error, WebhookAlchemyMutationRequest>;
type WebhookAlchemy = {
    data: WebhookAlchemyMutationResponse;
    error: Error;
    request: WebhookAlchemyMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: WebhookAlchemyMutationResponse;
    client: {
        parameters: Partial<Parameters<WebhookAlchemyClient>[0]>;
        return: Awaited<ReturnType<WebhookAlchemyClient>>;
    };
};
/**
 * @description alchemy webhook endpoint
 * @summary /webhook/alchemy
 * @link /v1/webhooks/alchemy
 */
export function useWebhookAlchemyHook(options: {
    mutation?: UseMutationOptions<WebhookAlchemy["response"], WebhookAlchemy["error"], WebhookAlchemy["request"]>;
    client?: WebhookAlchemy["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<WebhookAlchemy["data"], WebhookAlchemy["error"], WebhookAlchemy["request"]>({
                method: "post",
                url: `/v1/webhooks/alchemy`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}