import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { StoryUpSertVo } from "./StoryUpSertVo";

 /**
 * @description Successful operation
*/
export type UserStoryUpsert200 = WebResultBasicUpsert;
export type UserStoryUpsertMutationRequest = StoryUpSertVo;
/**
 * @description Successful operation
*/
export type UserStoryUpsertMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type UserStoryUpsertMutation = {
    Response: UserStoryUpsertMutationResponse;
    Request: UserStoryUpsertMutationRequest;
};