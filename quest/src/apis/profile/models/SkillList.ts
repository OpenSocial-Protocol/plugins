import type { WebResultSkillTemplates } from "./WebResultSkillTemplates";

 /**
 * @description Successful operation
*/
export type SkillList200 = WebResultSkillTemplates;
/**
 * @description Successful operation
*/
export type SkillListQueryResponse = Omit<NonNullable<WebResultSkillTemplates>, "responseEnum">;
export type SkillListQuery = {
    Response: SkillListQueryResponse;
};