import type { WebResultSignVo } from "./WebResultSignVo";

 /**
 * @description Successful operation
*/
export type GetSign200 = WebResultSignVo;
/**
 * @description Successful operation
*/
export type GetSignQueryResponse = Omit<NonNullable<WebResultSignVo>, "responseEnum">;
export type GetSignQuery = {
    Response: GetSignQueryResponse;
};