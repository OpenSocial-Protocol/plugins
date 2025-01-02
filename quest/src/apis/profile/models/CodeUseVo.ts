export const codeUseVoScenes = {
    "DEFAULT_INVITE": "DEFAULT_INVITE",
    "MINT_GENESIS_NFT": "MINT_GENESIS_NFT",
    "MINT_BOX": "MINT_BOX"
} as const;
export type CodeUseVoScenes = (typeof codeUseVoScenes)[keyof typeof codeUseVoScenes];
export type CodeUseVo = {
    /**
     * @description 兑换码
     * @type string | undefined
    */
    code?: string;
    /**
     * @description 场景(DEFAULT_INVITE, MINT_GENESIS_NFT, MINT_BOX)
     * @type array | undefined
    */
    scenes?: CodeUseVoScenes[];
    /**
     * @description 使用方来源, WEB, APP, 默认WEB
     * @type string | undefined
    */
    source?: string;
};