import type { UserBasicLiteVo } from "./UserBasicLiteVo";

 export const userReviewsVoReviewType = {
    "BOUNTY": "BOUNTY"
} as const;
export type UserReviewsVoReviewType = (typeof userReviewsVoReviewType)[keyof typeof userReviewsVoReviewType];
export type UserReviewsVo = {
    /**
     * @description review keyWords
     * @type array | undefined
    */
    keyWords?: string[];
    /**
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @description review rating
     * @type number | undefined, double
    */
    rating?: number;
    /**
     * @description review type
     * @type string | undefined
    */
    reviewType?: UserReviewsVoReviewType;
    /**
     * @type object | undefined
    */
    reviewer?: UserBasicLiteVo;
    /**
     * @description review contentUrl
     * @type string | undefined
    */
    contentUrl?: string;
    /**
     * @description reviewType =BOUNTY时，related取值为Bounty Id
     * @type string | undefined
    */
    related?: string;
    /**
     * @type object | undefined
    */
    reviewee?: UserBasicLiteVo;
    /**
     * @type integer | undefined, int64
    */
    modified?: number;
    /**
     * @description chain review id
     * @type string | undefined
    */
    chainReviewId?: string;
    /**
     * @description review comment
     * @type string | undefined
    */
    comment?: string;
    /**
     * @description review id
     * @type string | undefined
    */
    id?: string;
    /**
     * @description reviewTime
     * @type integer | undefined, int64
    */
    reviewTime?: number;
};