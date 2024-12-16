import type { MediaVo } from "./MediaVo";

 export const storyUpSertVoStatus = {
    "Enable": "Enable",
    "Disable": "Disable"
} as const;
export type StoryUpSertVoStatus = (typeof storyUpSertVoStatus)[keyof typeof storyUpSertVoStatus];
export type StoryUpSertVo = {
    /**
     * @description story 图片视频信息
     * @type array | undefined
    */
    medias?: MediaVo[];
    /**
     * @description story name
     * @type string | undefined
    */
    name?: string;
    /**
     * @description story id
     * @type string | undefined
    */
    id?: string;
    /**
     * @description 状态
     * @type string | undefined
    */
    status?: StoryUpSertVoStatus;
};