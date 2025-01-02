import type { SkillVo } from "./SkillVo";
import type { SelfIntroductionVo } from "./SelfIntroductionVo";

 export type UserBasicLiteVo = {
    /**
     * @type array | undefined
    */
    skills?: SkillVo[];
    /**
     * @description 用户头像
     * @type string | undefined
    */
    image?: string;
    /**
     * @description chain profile id
     * @type string | undefined
    */
    chainProfileId?: string;
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 用户名
     * @type string | undefined
    */
    name?: string;
    /**
     * @description 用户handle 同osp
     * @type string | undefined
    */
    handle?: string;
    /**
     * @type array | undefined
    */
    selfIntroduction?: SelfIntroductionVo[];
    /**
     * @description 排序字段
     * @type integer | undefined, int64
    */
    sort?: number;
    /**
     * @description refer code
     * @type string | undefined
    */
    chainLinkCode?: string;
};