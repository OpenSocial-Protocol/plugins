import type { WebResultCurrentUserVo } from "./WebResultCurrentUserVo";

 export type MeQueryParams = {
    /**
     * @description 默认返回 twitterName, 还支持 invite、asset、rank、exp、ticket、all
     * @type string | undefined
    */
    businessType?: string;
};
export type MeHeaderParams = {
    /**
     * @type string | undefined
    */
    idToken?: string;
    /**
     * @type string | undefined
    */
    JWT_TOKEN?: string;
    /**
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type Me200 = WebResultCurrentUserVo;
/**
 * @description Successful operation
*/
export type MeQueryResponse = Omit<NonNullable<WebResultCurrentUserVo>, "responseEnum">;
export type MeQuery = {
    Response: MeQueryResponse;
    QueryParams: MeQueryParams;
    HeaderParams: MeHeaderParams;
};