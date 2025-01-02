import type { WebResultBasicInfoList } from "./WebResultBasicInfoList";
import type { UserBasicListRequest } from "./UserBasicListRequest";

 /**
 * @description Successful operation
*/
export type UserBasicList200 = WebResultBasicInfoList;
export type UserBasicListMutationRequest = UserBasicListRequest;
/**
 * @description Successful operation
*/
export type UserBasicListMutationResponse = Omit<NonNullable<WebResultBasicInfoList>, "responseEnum">;
export type UserBasicListMutation = {
    Response: UserBasicListMutationResponse;
    Request: UserBasicListMutationRequest;
};