import type { TokenValueVo } from "./TokenValueVo";

 export const transactionVoType2 = {
    "WishBidded_Talent": "WishBidded_Talent",
    "WishUnlocked_Issuer": "WishUnlocked_Issuer",
    "WishUnlocked_Owner": "WishUnlocked_Owner",
    "WishUnlocked_Talent": "WishUnlocked_Talent",
    "QuestVerify_Talent": "QuestVerify_Talent"
} as const;
export type TransactionVoType2 = (typeof transactionVoType2)[keyof typeof transactionVoType2];
export const transactionVoStatus2 = {
    "UNCLAIM": "UNCLAIM",
    "CLAIMED": "CLAIMED"
} as const;
export type TransactionVoStatus2 = (typeof transactionVoStatus2)[keyof typeof transactionVoStatus2];
export type TransactionVo = {
    /**
     * @type object | undefined
    */
    amount?: TokenValueVo;
    /**
     * @description 创建时间
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @description OSP查询ID
     * @type string | undefined
    */
    bizId?: string;
    /**
     * @type string | undefined
    */
    wishId?: string;
    /**
     * @type string | undefined
    */
    type?: TransactionVoType2;
    /**
     * @type string | undefined
    */
    content?: string;
    /**
     * @type string | undefined
    */
    status?: TransactionVoStatus2;
};