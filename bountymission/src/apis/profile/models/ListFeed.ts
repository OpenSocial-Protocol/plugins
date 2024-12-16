import type { WebResultListFeedResponseVo } from "./WebResultListFeedResponseVo";

 export type ListFeedPathParams = {
    /**
     * @description feed type wish/referral/quest/mix
     * @type string
    */
    feed_type: string;
    /**
     * @description feed mode recommend/timeline/latest/reward/participation
     * @type string
    */
    feed_mode: string;
};
export type ListFeedQueryParams = {
    /**
     * @description query customerId
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description query role
     * @type string | undefined
    */
    role?: string;
    /**
     * @type string | undefined
    */
    nextToken?: string;
    /**
     * @default 10
     * @type integer | undefined, int32
    */
    limit?: number;
};
/**
 * @description Successful operation
*/
export type ListFeed200 = WebResultListFeedResponseVo;
/**
 * @description Successful operation
*/
export type ListFeedQueryResponse = Omit<NonNullable<WebResultListFeedResponseVo>, "responseEnum">;
export type ListFeedQuery = {
    Response: ListFeedQueryResponse;
    PathParams: ListFeedPathParams;
    QueryParams: ListFeedQueryParams;
};