import type { EducationVo } from "./EducationVo";
import type { StoryVo } from "./StoryVo";
import type { SkillVo } from "./SkillVo";
import type { ProfilesVo } from "./ProfilesVo";
import type { SelfIntroductionVo } from "./SelfIntroductionVo";
import type { ExperienceVo } from "./ExperienceVo";
import type { MediaVo } from "./MediaVo";
import type { LocationVo } from "./LocationVo";

 export type UserBasicVo = {
    /**
     * @type array | undefined
    */
    education?: EducationVo[];
    /**
     * @type array | undefined
    */
    storys?: StoryVo[];
    /**
     * @type array | undefined
    */
    skills?: SkillVo[];
    /**
     * @description chain profile id
     * @type string | undefined
    */
    chainProfileId?: string;
    /**
     * @description User Id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 更新时间
     * @type integer | undefined, int64
    */
    modified?: number;
    /**
     * @description 好友申请deadline 只有pending状态且未过期返回 用于判断添加好友时是否需要弹出用户签名页面
     * @type integer | undefined, int64
    */
    deadline?: number;
    /**
     * @description 用户email
     * @type string | undefined
    */
    email?: string;
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
     * @description AA address
     * @type string | undefined
    */
    address?: string;
    /**
     * @description 创建时间
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @type array | undefined
    */
    profiles?: ProfilesVo[];
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
     * @description 用户标签
     * @type string | undefined
    */
    label?: string;
    /**
     * @type array | undefined
    */
    experiences?: ExperienceVo[];
    /**
     * @description refer code
     * @type string | undefined
    */
    chainLinkCode?: string;
    /**
     * @description 是否是好友 0:不是 1:是
     * @type integer | undefined, int32
    */
    connected?: number;
    /**
     * @description 是否绑定LinkedIn 0:不是 1:是
     * @type integer | undefined, int32
    */
    bindLinkedin?: number;
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
     * @description 用户名
     * @type string | undefined
    */
    name?: string;
    /**
     * @type object | undefined
    */
    location?: LocationVo;
};