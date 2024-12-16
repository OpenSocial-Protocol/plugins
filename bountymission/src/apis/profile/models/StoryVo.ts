import type { MediaVo } from "./MediaVo";

 export type StoryVo = {
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
};