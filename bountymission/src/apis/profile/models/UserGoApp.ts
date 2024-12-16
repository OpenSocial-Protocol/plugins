import type { WebResultGoAppResponse } from "./WebResultGoAppResponse";

 /**
 * @description Successful operation
*/
export type UserGoApp200 = WebResultGoAppResponse;
/**
 * @description Successful operation
*/
export type UserGoAppQueryResponse = Omit<NonNullable<WebResultGoAppResponse>, "responseEnum">;
export type UserGoAppQuery = {
    Response: UserGoAppQueryResponse;
};