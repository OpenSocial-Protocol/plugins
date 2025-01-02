import type { WebResultFriendList } from "./WebResultFriendList";

 export type FriendListPathParams = {
    /**
     * @description 好友列表查询类型 all-默认查询全部 会将申请记录设置为已查看   pending-查询未查看的新申请记录   accepted-查询已通过的记录
     * @type string
    */
    type: string;
};
export type FriendListQueryParams = {
    /**
     * @description 好友列表查询分页offset
     * @default 0
     * @type integer | undefined, int32
    */
    offset?: number;
    /**
     * @description 好友列表查询分页limit
     * @default 10
     * @type integer | undefined, int32
    */
    limit?: number;
};
/**
 * @description Successful operation
*/
export type FriendList200 = WebResultFriendList;
/**
 * @description Successful operation
*/
export type FriendListQueryResponse = Omit<NonNullable<WebResultFriendList>, "responseEnum">;
export type FriendListQuery = {
    Response: FriendListQueryResponse;
    PathParams: FriendListPathParams;
    QueryParams: FriendListQueryParams;
};