import type { WebResultWebhook } from "./WebResultWebhook";

 /**
 * @description OK
*/
export type WebhookAlchemy200 = WebResultWebhook;
export type WebhookAlchemyMutationRequest = object;
/**
 * @description OK
*/
export type WebhookAlchemyMutationResponse = Omit<NonNullable<WebResultWebhook>, "responseEnum">;
export type WebhookAlchemyMutation = {
    Response: WebhookAlchemyMutationResponse;
    Request: WebhookAlchemyMutationRequest;
};