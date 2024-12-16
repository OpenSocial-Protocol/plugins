import type { WebResultEmailBadgeWhiteListResponse } from "./WebResultEmailBadgeWhiteListResponse";

 export type ListEmailBadgeWhiteListPathParams = {
    /**
     * @description series eg:BerachainInvestor
     * @type string
    */
    series: string;
};
/**
 * @description Successful operation
*/
export type ListEmailBadgeWhiteList200 = WebResultEmailBadgeWhiteListResponse;
/**
 * @description Successful operation
*/
export type ListEmailBadgeWhiteListQueryResponse = Omit<NonNullable<WebResultEmailBadgeWhiteListResponse>, "responseEnum">;
export type ListEmailBadgeWhiteListQuery = {
    Response: ListEmailBadgeWhiteListQueryResponse;
    PathParams: ListEmailBadgeWhiteListPathParams;
};