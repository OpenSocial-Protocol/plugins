import type { WebResultCheckInStatusVo } from "./WebResultCheckInStatusVo";

 export type CheckInStatusHeaderParams = {
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
    /**
     * @description idToken
     * @type string | undefined
    */
    idToken?: string;
    /**
     * @description jwt_token
     * @type string | undefined
    */
    jwt_token?: string;
};
/**
 * @description success
*/
export type CheckInStatus200 = WebResultCheckInStatusVo;
/**
 * @description success
*/
export type CheckInStatusQueryResponse = Omit<NonNullable<WebResultCheckInStatusVo>, "responseEnum">;
export type CheckInStatusQuery = {
    Response: CheckInStatusQueryResponse;
    HeaderParams: CheckInStatusHeaderParams;
};