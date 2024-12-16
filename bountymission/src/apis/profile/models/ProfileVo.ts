import type { ProfileVoBadges } from "./ProfileVoBadges";
import type { ProfileVoTelegramInfo } from "./ProfileVoTelegramInfo";
import type { ProfileVoQuests } from "./ProfileVoQuests";
import type { ProfileVoBasic } from "./ProfileVoBasic";
import type { ProfileVoOpenSocial } from "./ProfileVoOpenSocial";

 export type ProfileVo = {
    /**
     * @type object | undefined
    */
    badges?: ProfileVoBadges;
    /**
     * @type object | undefined
    */
    telegramInfo?: ProfileVoTelegramInfo;
    /**
     * @type object | undefined
    */
    quests?: ProfileVoQuests;
    /**
     * @type object | undefined
    */
    basic?: ProfileVoBasic;
    /**
     * @type object | undefined
    */
    openSocial?: ProfileVoOpenSocial;
};