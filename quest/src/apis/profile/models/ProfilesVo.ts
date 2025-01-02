/**
 * @description **举例：** 用户使用github登录 ```json      {         \"url\": \"https://github.com/thomasdavis\",         \"username\": \"thomasdavis\",         \"network\": \"github\"     } ```
*/
export type ProfilesVo = {
    /**
     * @description 第三方url
     * @type string | undefined
    */
    url?: string;
    /**
     * @description 第三方身份认证提供商
     * @type string | undefined
    */
    network?: string;
    /**
     * @description 第三方用户名
     * @type string | undefined
    */
    username?: string;
};