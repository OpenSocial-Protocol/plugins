export const getWishListRequestVoRole = {
    "maker": "maker",
    "participant": "participant"
} as const;
export type GetWishListRequestVoRole = (typeof getWishListRequestVoRole)[keyof typeof getWishListRequestVoRole];
export type GetWishListRequestVo = {
    /**
     * @description 查询角色 非必传 按照角色查询的时候需要传offset and limit
     * @type string | undefined
    */
    role?: GetWishListRequestVoRole;
    /**
     * @description 起始下标 >=0
     * @type integer | undefined, int32
    */
    offset?: number;
    /**
     * @description customer id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 查询条数 >=1 <=20
     * @type integer | undefined, int32
    */
    limit?: number;
    /**
     * @description osp profileId_contentId
     * @type array | undefined
    */
    bizIds?: string[];
};