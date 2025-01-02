import type { WebResponseCustomerTokenResponse } from "./WebResponseCustomerTokenResponse";

 export type RefreshTokenQueryParams = {
    /**
     * @description 续期token
     * @type string
    */
    refreshToken: string;
};
/**
 * @description Successful operation
*/
export type RefreshToken200 = WebResponseCustomerTokenResponse;
/**
 * @description Successful operation
*/
export type RefreshTokenQueryResponse = WebResponseCustomerTokenResponse;
export type RefreshTokenQuery = {
    Response: RefreshTokenQueryResponse;
    QueryParams: RefreshTokenQueryParams;
};