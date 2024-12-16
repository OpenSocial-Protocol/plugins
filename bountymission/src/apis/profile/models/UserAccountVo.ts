/**
 * @description user balance VO
*/
export type UserAccountVo = {
    /**
     * @description total value
     * @type string | undefined
    */
    total?: string;
    /**
     * @description created time
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @description available value
     * @type string | undefined
    */
    available?: string;
    /**
     * @description frozen value
     * @type string | undefined
    */
    frozen?: string;
    /**
     * @description modified time
     * @type integer | undefined, int64
    */
    modified?: number;
    /**
     * @description account id
     * @type string | undefined
    */
    id?: string;
    /**
     * @description account owner id
     * @type string | undefined
    */
    ownerId?: string;
    /**
     * @description account type
     * @type string | undefined
    */
    type?: string;
    /**
     * @description account token address
     * @type string | undefined
    */
    token?: string;
    /**
     * @description operation time
     * @type integer | undefined, int64
    */
    operationTime?: number;
};