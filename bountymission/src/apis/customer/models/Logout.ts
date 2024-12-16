import type { WebResponse } from "./WebResponse";

 export type LogoutHeaderParams = {
    /**
     * @description jwtToken
     * @type string | undefined
    */
    JWT_TOKEN?: string;
};
/**
 * @description Successful operation
*/
export type Logout200 = WebResponse;
/**
 * @description Successful operation
*/
export type LogoutMutationResponse = WebResponse;
export type LogoutMutation = {
    Response: LogoutMutationResponse;
    HeaderParams: LogoutHeaderParams;
};