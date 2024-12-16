import type { WebResultProfile } from "./WebResultProfile";

 export type GetProfilePathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description Successful operation
*/
export type GetProfile200 = WebResultProfile;
/**
 * @description Successful operation
*/
export type GetProfileQueryResponse = Omit<NonNullable<WebResultProfile>, "responseEnum">;
export type GetProfileQuery = {
    Response: GetProfileQueryResponse;
    PathParams: GetProfilePathParams;
};