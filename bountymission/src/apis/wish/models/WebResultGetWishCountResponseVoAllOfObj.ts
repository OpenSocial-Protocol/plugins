import type { TokenValueVo } from "./TokenValueVo";

 export type WebResultGetWishCountResponseVoAllOfObj = {
    /**
     * @description 所有奖金总和
     * @type string | undefined
    */
    reward?: string;
    /**
     * @description referral统计
     * @type integer | undefined, int64
    */
    referralCount?: number;
    /**
     * @description wish offer金额 上面的reward是后端按比例转过的
     * @type array | undefined
    */
    talentReward?: TokenValueVo[];
    /**
     * @description answer统计
     * @type integer | undefined, int64
    */
    answerCount?: number;
    /**
     * @description 发出去的offer金额
     * @type array | undefined
    */
    posterOffered?: TokenValueVo[];
    /**
     * @description 申请referral统计
     * @type integer | undefined, int64
    */
    applyCount?: number;
    /**
     * @description 赢得referral统计
     * @type integer | undefined, int64
    */
    winReferralCount?: number;
    /**
     * @description 发布Wish统计
     * @type integer | undefined, int64
    */
    postWishCount?: number;
    /**
     * @description 解锁分成金额
     * @type array | undefined
    */
    unlockVaulted?: TokenValueVo[];
    /**
     * @description 奖金币种
     * @type string | undefined
    */
    token?: string;
    /**
     * @description 赢得QA统计
     * @type integer | undefined, int64
    */
    winQuestionCount?: number;
};