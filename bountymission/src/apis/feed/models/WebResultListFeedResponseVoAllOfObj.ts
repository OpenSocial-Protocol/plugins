import type { FeedVo } from "./FeedVo";

 export type WebResultListFeedResponseVoAllOfObj = {
    /**
     * @type string | undefined
    */
    nextToken?: string;
    /**
     * @type array | undefined
    */
    rows?: FeedVo[];
};