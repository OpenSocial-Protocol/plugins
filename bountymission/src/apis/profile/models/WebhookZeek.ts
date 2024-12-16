import type { WebResultWebhook } from "./WebResultWebhook";

 /**
 * @description OK
*/
export type WebhookZeek200 = WebResultWebhook;
export type WebhookZeekMutationRequest = object;
/**
 * @description OK
*/
export type WebhookZeekMutationResponse = Omit<NonNullable<WebResultWebhook>, "responseEnum">;
export type WebhookZeekMutation = {
    Response: WebhookZeekMutationResponse;
    Request: WebhookZeekMutationRequest;
};