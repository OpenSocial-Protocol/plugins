import type { ContactsResponse } from "./ContactsResponse";

 export type ContactsQueryParams = {
    /**
     * @description osp address
     * @type string
    */
    address: string;
};
/**
 * @description OK
*/
export type Contacts200 = ContactsResponse;
/**
 * @description OK
*/
export type ContactsQueryResponse = Omit<NonNullable<ContactsResponse>, "responseEnum">;
export type ContactsQuery = {
    Response: ContactsQueryResponse;
    QueryParams: ContactsQueryParams;
};