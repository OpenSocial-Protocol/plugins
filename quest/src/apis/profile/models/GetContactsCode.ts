import type { ContactsCodeResponse } from "./ContactsCodeResponse";

 export const getContactsCodePathParamsType = {
    "DISCORD": "DISCORD",
    "EMAIL": "EMAIL",
    "SUBSCRIBE": "SUBSCRIBE"
} as const;
export type GetContactsCodePathParamsType = (typeof getContactsCodePathParamsType)[keyof typeof getContactsCodePathParamsType];
export type GetContactsCodePathParams = {
    /**
     * @description type
     * @type string
    */
    type: GetContactsCodePathParamsType;
};
export type GetContactsCodeQueryParams = {
    /**
     * @description email
     * @type string
    */
    account: string;
};
/**
 * @description OK
*/
export type GetContactsCode200 = ContactsCodeResponse;
/**
 * @description OK
*/
export type GetContactsCodeMutationResponse = Omit<NonNullable<ContactsCodeResponse>, "responseEnum">;
export type GetContactsCodeMutation = {
    Response: GetContactsCodeMutationResponse;
    PathParams: GetContactsCodePathParams;
    QueryParams: GetContactsCodeQueryParams;
};