/**
 * @description story 图片视频信息
*/
export type MediaVo = {
    /**
     * @description 背景图片
     * @type string | undefined
    */
    img?: string;
    /**
     * @description 背景视频
     * @type string | undefined
    */
    video?: string;
    /**
     * @description 排序字段
     * @type integer | undefined, int32
    */
    sort?: number;
};