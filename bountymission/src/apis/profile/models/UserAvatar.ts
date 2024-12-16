import type { WebResultAvatarInfo } from "./WebResultAvatarInfo";

 export type UserAvatarQueryParams = {
    /**
     * @description 查询获取用户头像基础信息
     * @type string
    */
    linkerCode: string;
};
/**
 * @description Successful operation
*/
export type UserAvatar200 = WebResultAvatarInfo;
/**
 * @description Successful operation
*/
export type UserAvatarQueryResponse = Omit<NonNullable<WebResultAvatarInfo>, "responseEnum">;
export type UserAvatarQuery = {
    Response: UserAvatarQueryResponse;
    QueryParams: UserAvatarQueryParams;
};