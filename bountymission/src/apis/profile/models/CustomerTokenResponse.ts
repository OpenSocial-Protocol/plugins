export type CustomerTokenResponse = {
    /**
     * @description 续期token过期时间
     * @type integer | undefined, int64
    */
    refreshTokenExpireIn?: number;
    /**
     * @description jwt token
     * @type string | undefined
    */
    jwtKey?: string;
    /**
     * @description 续期token
     * @type string | undefined
    */
    refreshToken?: string;
};