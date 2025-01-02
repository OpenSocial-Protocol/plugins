export const userOpHashProcessRequestVoProcessType = {
    "ERC20_TRANSFER": "ERC20_TRANSFER"
} as const;
export type UserOpHashProcessRequestVoProcessType = (typeof userOpHashProcessRequestVoProcessType)[keyof typeof userOpHashProcessRequestVoProcessType];
export type UserOpHashProcessRequestVo = {
    /**
     * @description 合约调用成功后返回的：userOpsHash
     * @type string
    */
    userOperationHash: string;
    /**
     * @description 处理类型
     * @type string | undefined
    */
    processType?: UserOpHashProcessRequestVoProcessType;
};