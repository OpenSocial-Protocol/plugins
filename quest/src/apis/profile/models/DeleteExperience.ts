import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";

 export type DeleteExperienceQueryParams = {
    /**
     * @description 删除用户工作经历ID
     * @type string | undefined
    */
    id?: string;
};
/**
 * @description Successful operation
*/
export type DeleteExperience200 = WebResultBasicUpsert;
/**
 * @description Successful operation
*/
export type DeleteExperienceMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type DeleteExperienceMutation = {
    Response: DeleteExperienceMutationResponse;
    QueryParams: DeleteExperienceQueryParams;
};