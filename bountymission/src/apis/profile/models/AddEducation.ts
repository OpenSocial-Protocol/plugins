import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { EducationVo } from "./EducationVo";

 /**
 * @description Successful operation
*/
export type AddEducation200 = WebResultBasicUpsert;
export type AddEducationMutationRequest = EducationVo;
/**
 * @description Successful operation
*/
export type AddEducationMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type AddEducationMutation = {
    Response: AddEducationMutationResponse;
    Request: AddEducationMutationRequest;
};