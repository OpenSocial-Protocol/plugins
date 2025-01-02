import type { ProfilesVo } from "./ProfilesVo";
import type { SelfIntroductionVo } from "./SelfIntroductionVo";
import type { StoryVo } from "./StoryVo";
import type { MediaVo } from "./MediaVo";
import type { LocationVo } from "./LocationVo";

 export type UserBasicUpsertVo = {
    /**
     * @description summary
     * @type string | undefined
    */
    summary?: string;
    /**
     * @description 用户头像
     * @type string | undefined
    */
    image?: string;
    /**
     * @description 用户website
     * @type string | undefined
    */
    website?: string;
    /**
     * @type object | undefined
    */
    profile?: ProfilesVo;
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
     * @description Story 列表
     * @type array | undefined
    */
    storys?: StoryVo[];
    /**
     * @description 用户标签
     * @type string | undefined
    */
    label?: string;
    /**
     * @description linkedIn账号
     * @type string | undefined
    */
    linkedIn?: string;
    /**
     * @description osp profile id
     * @type integer | undefined, int64
    */
    ospProfileId?: number;
    /**
     * @description 用户phone
     * @type string | undefined
    */
    phone?: string;
    /**
     * @description 背景图片
     * @type array | undefined
    */
    backgrounds?: MediaVo[];
    /**
     * @description 邀请码
     * @type string | undefined
    */
    inviteCode?: string;
    /**
     * @description 用户名
     * @type string | undefined
    */
    name?: string;
    /**
     * @type object | undefined
    */
    location?: LocationVo;
    /**
     * @description 用户email
     * @type string | undefined
    */
    email?: string;
};