import type { WebResponse } from "./WebResponse";

 export type SecurityVerifyQueryParams = {
    /**
     * @type integer, int32
    */
    scene: number;
};
/**
 * @description OK
*/
export type SecurityVerify200 = WebResponse;
/**
 * @description OK
*/
export type SecurityVerifyQueryResponse = WebResponse;
export type SecurityVerifyQuery = {
    Response: SecurityVerifyQueryResponse;
    QueryParams: SecurityVerifyQueryParams;
};