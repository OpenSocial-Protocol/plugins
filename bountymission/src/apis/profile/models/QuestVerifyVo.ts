export type QuestVerifyVo = {
    /**
     * @type string | undefined
    */
    questId?: string;
    /**
     * @type string | undefined
    */
    signatureExtension?: string;
    /**
     * @type string | undefined
    */
    singer?: string;
    /**
     * @type string | undefined
    */
    signature?: string;
    /**
     * @type string | undefined
    */
    talent?: string;
    /**
     * @type integer | undefined, int64
    */
    applyTime?: number;
    /**
     * @type integer | undefined, int64
    */
    deadline?: number;
    /**
     * @type string | undefined
    */
    nonce?: string;
};