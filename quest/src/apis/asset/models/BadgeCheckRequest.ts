export const badgeCheckRequestLimitType = {
    "LIMIT": "LIMIT",
    "NO_LIMIT": "NO_LIMIT"
} as const;
export type BadgeCheckRequestLimitType = (typeof badgeCheckRequestLimitType)[keyof typeof badgeCheckRequestLimitType];
export type BadgeCheckRequest = {
    /**
     * @description nft type
     * @type string | undefined
    */
    limitType?: BadgeCheckRequestLimitType;
};