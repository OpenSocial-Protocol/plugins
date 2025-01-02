export const userOpHashProcessRequestVoProcessType2 = {
    "ERC20_TRANSFER": "ERC20_TRANSFER"
} as const;
export type UserOpHashProcessRequestVoProcessType2 = (typeof userOpHashProcessRequestVoProcessType2)[keyof typeof userOpHashProcessRequestVoProcessType2];
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
    processType?: UserOpHashProcessRequestVoProcessType2;
};