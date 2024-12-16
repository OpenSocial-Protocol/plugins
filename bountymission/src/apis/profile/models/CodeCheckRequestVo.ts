export const codeCheckRequestVoScenes = {
    "MINT_GENESIS_NFT": "MINT_GENESIS_NFT",
    "MINT_OF_NFT": "MINT_OF_NFT"
} as const;
export type CodeCheckRequestVoScenes = (typeof codeCheckRequestVoScenes)[keyof typeof codeCheckRequestVoScenes];
export type CodeCheckRequestVo = {
    /**
     * @type string
    */
    code: string;
    /**
     * @description 类型(MINT_GENESIS_NFT, MINT_OF_NFT)
     * @type array | undefined
    */
    scenes?: CodeCheckRequestVoScenes[];
};