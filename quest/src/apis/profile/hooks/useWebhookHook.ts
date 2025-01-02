import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { WebhookMutationResponse, WebhookHeaderParams } from "../models/Webhook";
import type { UseMutationOptions } from "@tanstack/react-query";

 type WebhookClient = typeof client<WebhookMutationResponse, Error, never>;
type Webhook = {
    data: WebhookMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: WebhookHeaderParams;
    response: WebhookMutationResponse;
    client: {
        parameters: Partial<Parameters<WebhookClient>[0]>;
        return: Awaited<ReturnType<WebhookClient>>;
    };
};
/**
 * @link /v1/kyc/webhook/onfido
 */
export function useWebhookHook(headers?: Webhook["headerParams"], options: {
    mutation?: UseMutationOptions<Webhook["response"], Webhook["error"], Webhook["request"]>;
    client?: Webhook["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Webhook["data"], Webhook["error"], Webhook["request"]>({
                method: "post",
                url: `/v1/kyc/webhook/onfido`,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}