export type DingTalkNotifyQueryParams = {
    /**
     * @type string | undefined
    */
    msg_signature?: string;
    /**
     * @type string | undefined
    */
    timestamp?: string;
    /**
     * @type string | undefined
    */
    nonce?: string;
};
/**
 * @description OK
*/
export type DingTalkNotify200 = {
    [key: string]: string;
};
/**
 * @description OK
*/
export type DingTalkNotifyMutationResponse = {
    [key: string]: string;
};
export type DingTalkNotifyMutation = {
    Response: DingTalkNotifyMutationResponse;
    QueryParams: DingTalkNotifyQueryParams;
};