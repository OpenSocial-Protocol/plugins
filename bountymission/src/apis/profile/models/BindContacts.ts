import type { ContactsResponse } from "./ContactsResponse";

 export const bindContactsPathParamsType = {
    "DISCORD": "DISCORD",
    "EMAIL": "EMAIL",
    "SUBSCRIBE": "SUBSCRIBE"
} as const;
export type BindContactsPathParamsType = (typeof bindContactsPathParamsType)[keyof typeof bindContactsPathParamsType];
export type BindContactsPathParams = {
    /**
     * @description type
     * @type string
    */
    type: BindContactsPathParamsType;
};
export type BindContactsQueryParams = {
    /**
     * @description bind email or discord account
     * @type string | undefined
    */
    account?: string;
    /**
     * @description email code or discord token
     * @type string | undefined
    */
    token?: string;
};
/**
 * @description OK
*/
export type BindContacts200 = ContactsResponse;
/**
 * @description OK
*/
export type BindContactsMutationResponse = Omit<NonNullable<ContactsResponse>, "responseEnum">;
export type BindContactsMutation = {
    Response: BindContactsMutationResponse;
    PathParams: BindContactsPathParams;
    QueryParams: BindContactsQueryParams;
};