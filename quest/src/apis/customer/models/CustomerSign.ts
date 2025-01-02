import type { GetSignResponse } from "./GetSignResponse";

 export type CustomerSignQueryParams = {
    /**
     * @description type 0=sample  1=jwt
     * @default 0
     * @type integer | undefined, int32
    */
    type?: number;
};
export type CustomerSignHeaderParams = {
    /**
     * @type string | undefined
    */
    saas_id?: string;
    /**
     * @description jwtToken
     * @type string | undefined
    */
    JWT_TOKEN?: string;
};
/**
 * @description Successful operation
*/
export type CustomerSign200 = GetSignResponse;
/**
 * @description Successful operation
*/
export type CustomerSignQueryResponse = Omit<NonNullable<GetSignResponse>, "responseEnum">;
export type CustomerSignQuery = {
    Response: CustomerSignQueryResponse;
    QueryParams: CustomerSignQueryParams;
    HeaderParams: CustomerSignHeaderParams;
};