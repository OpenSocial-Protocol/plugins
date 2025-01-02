import type { WebResultSocialTokenVo } from "./WebResultSocialTokenVo";

 export type AuthToken1QueryParams = {
    /**
     * @description 用户id
     * @type string
    */
    cid: string;
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
export type AuthToken1HeaderParams = {
    /**
     * @type string
    */
    Authorization: string;
    /**
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type AuthToken1200 = WebResultSocialTokenVo;
/**
 * @description Successful operation
*/
export type AuthToken1MutationResponse = Omit<NonNullable<WebResultSocialTokenVo>, "responseEnum">;
export type AuthToken1Mutation = {
    Response: AuthToken1MutationResponse;
    QueryParams: AuthToken1QueryParams;
    HeaderParams: AuthToken1HeaderParams;
};