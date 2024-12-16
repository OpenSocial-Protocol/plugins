import type { WebResultFriendApplyDetail } from "./WebResultFriendApplyDetail";

 export type FriendApplyDetailQueryParams = {
    /**
     * @description 申请人ID
     * @type string
    */
    applyCustomerId: string;
};
/**
 * @description Successful operation
*/
export type FriendApplyDetail200 = WebResultFriendApplyDetail;
/**
 * @description Successful operation
*/
export type FriendApplyDetailQueryResponse = Omit<NonNullable<WebResultFriendApplyDetail>, "responseEnum">;
export type FriendApplyDetailQuery = {
    Response: FriendApplyDetailQueryResponse;
    QueryParams: FriendApplyDetailQueryParams;
};