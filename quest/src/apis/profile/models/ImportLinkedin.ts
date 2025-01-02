import type { WebResultBasicUpsert } from "./WebResultBasicUpsert";

 /**
 * @description Successful operation
*/
export type ImportLinkedin200 = WebResultBasicUpsert;
/**
 * @description Successful operation
*/
export type ImportLinkedinMutationResponse = Omit<NonNullable<WebResultBasicUpsert>, "responseEnum">;
export type ImportLinkedinMutation = {
    Response: ImportLinkedinMutationResponse;
};