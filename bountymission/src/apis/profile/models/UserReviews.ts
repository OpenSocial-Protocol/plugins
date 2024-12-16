import type { WebResultReviews } from "./WebResultReviews";

 export type UserReviewsQueryParams = {
    /**
     * @description 分页offset
     * @default 0
     * @type integer, int32
    */
    offset: number;
    /**
     * @description 分页limit
     * @default 10
     * @type integer, int32
    */
    limit: number;
    /**
     * @description 查询指定用户
     * @type string | undefined
    */
    customerId?: string;
};
/**
 * @description Successful operation
*/
export type UserReviews200 = WebResultReviews;
/**
 * @description Successful operation
*/
export type UserReviewsQueryResponse = Omit<NonNullable<WebResultReviews>, "responseEnum">;
export type UserReviewsQuery = {
    Response: UserReviewsQueryResponse;
    QueryParams: UserReviewsQueryParams;
};