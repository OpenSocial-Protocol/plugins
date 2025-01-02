import type { AppVersionResponse } from "./AppVersionResponse";

 export type GetAppVersionPathParams = {
    /**
     * @description platform
     * @type string
    */
    platform: string;
};
export type GetAppVersionQueryParams = {
    /**
     * @description from version number
     * @type string | undefined
    */
    from?: string;
};
/**
 * @description OK
*/
export type GetAppVersion200 = AppVersionResponse;
/**
 * @description OK
*/
export type GetAppVersionQueryResponse = Omit<NonNullable<AppVersionResponse>, "responseEnum">;
export type GetAppVersionQuery = {
    Response: GetAppVersionQueryResponse;
    PathParams: GetAppVersionPathParams;
    QueryParams: GetAppVersionQueryParams;
};