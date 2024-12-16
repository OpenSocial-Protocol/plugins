import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";

 export type DeleteEducationQueryParams = {
    /**
     * @description 删除用户教育经历ID
     * @type string | undefined
    */
    id?: string;
};
/**
 * @description Successful operation
*/
export type DeleteEducation200 = WebResultBasicUpsert;
/**
 * @description Successful operation
*/
export type DeleteEducationMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type DeleteEducationMutation = {
    Response: DeleteEducationMutationResponse;
    QueryParams: DeleteEducationQueryParams;
};