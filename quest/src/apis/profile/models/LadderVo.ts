/**
 * @description 排行榜数据
*/
export type LadderVo = {
    /**
     * @description 获得 offer 的数量
     * @type integer | undefined, int32
    */
    winCount?: number;
    /**
     * @description 用户头像
     * @type string | undefined
    */
    image?: string;
    /**
     * @description season level
     * @type integer | undefined, int32
    */
    level?: number;
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 用户名
     * @type string | undefined
    */
    name?: string;
    /**
     * @description 排名
     * @type integer | undefined, int32
    */
    rank?: number;
    /**
     * @description telegram first name
     * @type string | undefined
    */
    telegramFirstName?: string;
    /**
     * @description telegram 头像
     * @type string | undefined
    */
    telegramAvatarUrl?: string;
    /**
     * @description 用户handle 同osp
     * @type string | undefined
    */
    handle?: string;
    /**
     * @description telegram last name
     * @type string | undefined
    */
    telegramLastName?: string;
    /**
     * @description 积分余额
     * @type integer | undefined, int32
    */
    point?: number;
    /**
     * @description telegram user name
     * @type string | undefined
    */
    telegramUserName?: string;
};