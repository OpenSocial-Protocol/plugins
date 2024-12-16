export const skillVoStatus = {
    "Enable": "Enable",
    "Disable": "Disable"
} as const;
export type SkillVoStatus = (typeof skillVoStatus)[keyof typeof skillVoStatus];
export type SkillVo = {
    /**
     * @description 技能图片
     * @type array | undefined
    */
    imgs?: string[];
    /**
     * @description 技能名称
     * @type string | undefined
    */
    name?: string;
    /**
     * @description 技能视频
     * @type array | undefined
    */
    videos?: string[];
    /**
     * @description id
     * @type string | undefined
    */
    id?: string;
    /**
     * @description 技能卡分类
     * @type string | undefined
    */
    category?: string;
    /**
     * @description 技能描述
     * @type string | undefined
    */
    desc?: string;
    /**
     * @description 状态
     * @type string | undefined
    */
    status?: SkillVoStatus;
};