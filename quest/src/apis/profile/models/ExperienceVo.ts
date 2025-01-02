import type { SkillVo } from "./SkillVo";

 export const experienceVoEmploymentType = {
    "Full-time": "Full-time",
    "Part-time": "Part-time",
    "Contract": "Contract",
    "Freelance": "Freelance",
    "Self-employed": "Self-employed",
    "Internship": "Internship",
    "Apprenticeship": "Apprenticeship",
    "Seasonal": "Seasonal"
} as const;
export type ExperienceVoEmploymentType = (typeof experienceVoEmploymentType)[keyof typeof experienceVoEmploymentType];
export const experienceVoLocationType = {
    "Remote": "Remote",
    "On-site": "On-site",
    "Hybrid": "Hybrid"
} as const;
export type ExperienceVoLocationType = (typeof experienceVoLocationType)[keyof typeof experienceVoLocationType];
export type ExperienceVo = {
    /**
     * @description 工作类型
     * @type string | undefined
    */
    employmentType?: ExperienceVoEmploymentType;
    /**
     * @description 工作内容
     * @type string | undefined
    */
    workContent?: string;
    /**
     * @description 地点类型
     * @type string | undefined
    */
    locationType?: ExperienceVoLocationType;
    /**
     * @description 公司行业
     * @type string | undefined
    */
    industry?: string;
    /**
     * @description 职位title
     * @type string | undefined
    */
    title?: string;
    /**
     * @description 持续时间 1yr 1mo
     * @type string | undefined
    */
    duration?: string;
    /**
     * @description 技能
     * @type array | undefined
    */
    skills?: SkillVo[];
    /**
     * @description 公司logo
     * @type string | undefined
    */
    logo?: string;
    /**
     * @description 开始时间 MM/YYYY
     * @type string | undefined
    */
    startsAt?: string;
    /**
     * @description 公司名字
     * @type string | undefined
    */
    company?: string;
    /**
     * @description 工作地点
     * @type string | undefined
    */
    location?: string;
    /**
     * @description 唯一标识id 新增不用传
     * @type string | undefined
    */
    id?: string;
    /**
     * @description 结束时间 MM/YYYY
     * @type string | undefined
    */
    endsAt?: string;
};