export type CustomerCodeUserListVoRowsInner = {
    /**
     * @description 使用者tg信息
     * @type object | undefined
    */
    telegramInfo?: object;
    /**
     * @description 使用者id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 使用
     * @type integer | undefined, int64
    */
    useTime?: number;
    /**
     * @description 使用者角色
     * @type object | undefined
    */
    userRole?: object;
};