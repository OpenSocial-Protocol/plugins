import type { WebResultSocialTokenVo } from "./WebResultSocialTokenVo";

 export type AuthTokenQueryParams = {
    /**
     * @description twitter、discord、google、facebook
     * @type string
    */
    app: string;
    /**
     * @description twitter、discord
     * @type string
    */
    platform: string;
    /**
     * @description code(一次性)
     * @type string
    */
    code: string;
    /**
     * @description redirectUri
     * @type string | undefined
    */
    redirectUri?: string;
};
export type AuthTokenHeaderParams = {
    /**
     * @type string | undefined
    */
    idToken?: string;
    /**
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type AuthToken200 = WebResultSocialTokenVo;
/**
 * @description Successful operation
*/
export type AuthTokenMutationResponse = Omit<NonNullable<WebResultSocialTokenVo>, "responseEnum">;
export type AuthTokenMutation = {
    Response: AuthTokenMutationResponse;
    QueryParams: AuthTokenQueryParams;
    HeaderParams: AuthTokenHeaderParams;
};