import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { ExperienceVo } from "./ExperienceVo";

 /**
 * @description Successful operation
*/
export type UpdateExperience200 = WebResultBasicUpsert;
export type UpdateExperienceMutationRequest = ExperienceVo;
/**
 * @description Successful operation
*/
export type UpdateExperienceMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type UpdateExperienceMutation = {
    Response: UpdateExperienceMutationResponse;
    Request: UpdateExperienceMutationRequest;
};