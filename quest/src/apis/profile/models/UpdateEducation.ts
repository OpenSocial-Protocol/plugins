import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { EducationVo } from "./EducationVo";

 /**
 * @description Successful operation
*/
export type UpdateEducation200 = WebResultBasicUpsert;
export type UpdateEducationMutationRequest = EducationVo;
/**
 * @description Successful operation
*/
export type UpdateEducationMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type UpdateEducationMutation = {
    Response: UpdateEducationMutationResponse;
    Request: UpdateEducationMutationRequest;
};