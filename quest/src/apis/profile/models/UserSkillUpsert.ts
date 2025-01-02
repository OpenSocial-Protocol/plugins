import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { SkillUpSertVo } from "./SkillUpSertVo";

 /**
 * @description Successful operation
*/
export type UserSkillUpsert200 = WebResultBasicUpsert;
export type UserSkillUpsertMutationRequest = SkillUpSertVo;
/**
 * @description Successful operation
*/
export type UserSkillUpsertMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type UserSkillUpsertMutation = {
    Response: UserSkillUpsertMutationResponse;
    Request: UserSkillUpsertMutationRequest;
};