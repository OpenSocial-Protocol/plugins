import type { WebResultCustomerEmails } from "./WebResultCustomerEmails";

 export type GetCustomerEmailsHeaderParams = {
    /**
     * @description saas_id
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type GetCustomerEmails200 = WebResultCustomerEmails;
/**
 * @description Successful operation
*/
export type GetCustomerEmailsQueryResponse = Omit<NonNullable<WebResultCustomerEmails>, "responseEnum">;
export type GetCustomerEmailsQuery = {
    Response: GetCustomerEmailsQueryResponse;
    HeaderParams: GetCustomerEmailsHeaderParams;
};