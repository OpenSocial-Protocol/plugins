export type WebhookHeaderParams = {
    /**
     * @type string | undefined
    */
    "x-sha2-signature"?: string;
};
/**
 * @description OK
*/
export type Webhook200 = any;
export type WebhookMutationResponse = any;
export type WebhookMutation = {
    Response: WebhookMutationResponse;
    HeaderParams: WebhookHeaderParams;
};