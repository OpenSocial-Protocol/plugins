export type AuthInfoVo = {
    /**
     * @description telegram phone
     * @type string | undefined
    */
    telegramPhone?: string;
    /**
     * @description telegram 创建时间
     * @type integer | undefined, int64
    */
    telegramCreated?: number;
    /**
     * @description telegram name
     * @type string | undefined
    */
    telegramName?: string;
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description twitter name
     * @type string | undefined
    */
    twitterName?: string;
    /**
     * @description telegram first name
     * @type string | undefined
    */
    telegramFirstName?: string;
    /**
     * @description twitter 创建时间
     * @type integer | undefined, int64
    */
    twitterCreated?: number;
    /**
     * @description telegram last name
     * @type string | undefined
    */
    telegramLastName?: string;
    /**
     * @description twitter id
     * @type string | undefined
    */
    twitterId?: string;
    /**
     * @description telegram id
     * @type string | undefined
    */
    telegramId?: string;
    /**
     * @description telegram avatar url
     * @type string | undefined
    */
    telegramAvatar?: string;
};