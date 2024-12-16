import type { WebResultActiveTaskVo } from "./WebResultActiveTaskVo";

 export type CheckInHeaderParams = {
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
export type CheckIn200 = WebResultActiveTaskVo;
/**
 * @description success
*/
export type CheckInMutationResponse = Omit<NonNullable<WebResultActiveTaskVo>, "responseEnum">;
export type CheckInMutation = {
    Response: CheckInMutationResponse;
    HeaderParams: CheckInHeaderParams;
};