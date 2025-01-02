import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { UserBasicUpsertVo } from "./UserBasicUpsertVo";

 /**
 * @description Successful operation
*/
export type UserBasicUpsert200 = WebResultBasicUpsert;
export type UserBasicUpsertMutationRequest = UserBasicUpsertVo;
/**
 * @description Successful operation
*/
export type UserBasicUpsertMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type UserBasicUpsertMutation = {
    Response: UserBasicUpsertMutationResponse;
    Request: UserBasicUpsertMutationRequest;
};