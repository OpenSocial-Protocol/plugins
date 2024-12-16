import type { WebResult } from "./WebResult";

 export type CustomerEventQueryParams = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    customerId: string;
    /**
     * @type string | undefined
    */
    body?: string;
};
export type CustomerEventHeaderParams = {
    /**
     * @type string
    */
    Authorization: string;
    /**
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type CustomerEvent200 = WebResult;
/**
 * @description Successful operation
*/
export type CustomerEventMutationResponse = Omit<NonNullable<WebResult>, "responseEnum">;
export type CustomerEventMutation = {
    Response: CustomerEventMutationResponse;
    QueryParams: CustomerEventQueryParams;
    HeaderParams: CustomerEventHeaderParams;
};