import type { WebResultContentTemplateVo } from "./WebResultContentTemplateVo";

 export type ContentTemplateQueryParams = {
    /**
     * @description 模板名称
     * @type array
    */
    template_name: string[];
};
/**
 * @description Successful operation
*/
export type ContentTemplate200 = WebResultContentTemplateVo;
/**
 * @description Successful operation
*/
export type ContentTemplateQueryResponse = Omit<NonNullable<WebResultContentTemplateVo>, "responseEnum">;
export type ContentTemplateQuery = {
    Response: ContentTemplateQueryResponse;
    QueryParams: ContentTemplateQueryParams;
};