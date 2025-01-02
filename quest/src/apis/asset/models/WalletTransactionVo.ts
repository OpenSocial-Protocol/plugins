export const walletTransactionVoCategory2 = {
    "SEND": "SEND",
    "RECEIVE": "RECEIVE",
    "WISH_POST": "WISH_POST",
    "WISH_TRADE": "WISH_TRADE",
    "CLAIM_REWARDS": "CLAIM_REWARDS",
    "UNLOCK_ANSWERS": "UNLOCK_ANSWERS",
    "GET_AN_OFFER": "GET_AN_OFFER",
    "MINT_NFT": "MINT_NFT",
    "WISH_UNLOCKED": "WISH_UNLOCKED",
    "QUEST_POST": "QUEST_POST",
    "QUEST_VERIFY": "QUEST_VERIFY",
    "WISH_REFUND": "WISH_REFUND"
} as const;
export type WalletTransactionVoCategory2 = (typeof walletTransactionVoCategory2)[keyof typeof walletTransactionVoCategory2];
export const walletTransactionVoDirection2 = {
    "SEND": "SEND",
    "RECEIVE": "RECEIVE"
} as const;
export type WalletTransactionVoDirection2 = (typeof walletTransactionVoDirection2)[keyof typeof walletTransactionVoDirection2];
export type WalletTransactionVo = {
    /**
     * @description currency symbol
     * @type string | undefined
    */
    symbol?: string;
    /**
     * @description transaction title
     * @type string | undefined
    */
    title?: string;
    /**
     * @description transaction category
     * @type string | undefined
    */
    category?: WalletTransactionVoCategory2;
    /**
     * @description transaction value
     * @type integer | undefined, int64
    */
    value?: number;
    /**
     * @description transaction value
     * @type string | undefined
    */
    tokenValue?: string;
    /**
     * @description transaction hash
     * @type string | undefined
    */
    transactionHash?: string;
    /**
     * @description transaction timestamp
     * @type integer | undefined, int64
    */
    timestamp?: number;
    /**
     * @description token address
     * @type string | undefined
    */
    token?: string;
    /**
     * @description transaction direction
     * @type string | undefined
    */
    direction?: WalletTransactionVoDirection2;
};