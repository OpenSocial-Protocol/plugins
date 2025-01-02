import type { ContactsResponse } from "./ContactsResponse";

 export const unbindContactsPathParamsType = {
    "DISCORD": "DISCORD",
    "EMAIL": "EMAIL",
    "SUBSCRIBE": "SUBSCRIBE"
} as const;
export type UnbindContactsPathParamsType = (typeof unbindContactsPathParamsType)[keyof typeof unbindContactsPathParamsType];
export type UnbindContactsPathParams = {
    /**
     * @description type
     * @type string
    */
    type: UnbindContactsPathParamsType;
};
/**
 * @description OK
*/
export type UnbindContacts200 = ContactsResponse;
/**
 * @description OK
*/
export type UnbindContactsMutationResponse = Omit<NonNullable<ContactsResponse>, "responseEnum">;
export type UnbindContactsMutation = {
    Response: UnbindContactsMutationResponse;
    PathParams: UnbindContactsPathParams;
};