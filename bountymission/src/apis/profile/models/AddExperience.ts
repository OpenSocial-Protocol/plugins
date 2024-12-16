import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";
import type { ExperienceVo } from "./ExperienceVo";

 /**
 * @description Successful operation
*/
export type AddExperience200 = WebResultBasicUpsert;
export type AddExperienceMutationRequest = ExperienceVo;
/**
 * @description Successful operation
*/
export type AddExperienceMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type AddExperienceMutation = {
    Response: AddExperienceMutationResponse;
    Request: AddExperienceMutationRequest;
};