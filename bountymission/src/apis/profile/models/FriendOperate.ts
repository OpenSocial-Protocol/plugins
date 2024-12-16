import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { FriendOperateRequestVo } from "./FriendOperateRequestVo";

 export type FriendOperatePathParams = {
    /**
     * @description 好友操作类型
     * @type string
    */
    operate: string;
};
/**
 * @description Successful operation
*/
export type FriendOperate200 = WebResultBasicUpsert;
export type FriendOperateMutationRequest = FriendOperateRequestVo;
/**
 * @description Successful operation
*/
export type FriendOperateMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type FriendOperateMutation = {
    Response: FriendOperateMutationResponse;
    Request: FriendOperateMutationRequest;
    PathParams: FriendOperatePathParams;
};