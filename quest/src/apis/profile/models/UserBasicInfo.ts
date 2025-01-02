import type { WebResultBasicInfo } from "./WebResultBasicInfo";

 export type UserBasicInfoQueryParams = {
    /**
     * @description 查询指定用户信息
     * @default ""
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description query userBasic by handle
     * @default ""
     * @type string | undefined
    */
    handle?: string;
    /**
     * @description query userBasic by defaultCode
     * @default ""
     * @type string | undefined
    */
    defaultCode?: string;
};
/**
 * @description Successful operation
*/
export type UserBasicInfo200 = WebResultBasicInfo;
/**
 * @description Successful operation
*/
export type UserBasicInfoQueryResponse = Omit<NonNullable<WebResultBasicInfo>, "responseEnum">;
export type UserBasicInfoQuery = {
    Response: UserBasicInfoQueryResponse;
    QueryParams: UserBasicInfoQueryParams;
};