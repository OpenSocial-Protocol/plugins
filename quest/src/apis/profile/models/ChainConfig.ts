import type { TokenVo } from "./TokenVo";
import type { ChainConfigBlockExplorer } from "./ChainConfigBlockExplorer";
import type { ChainConfigContractsValue } from "./ChainConfigContractsValue";
import type { ChainConfigRemote } from "./ChainConfigRemote";
import type { ChainConfigOsp } from "./ChainConfigOsp";
import type { ChainConfigConfig } from "./ChainConfigConfig";

 export type ChainConfig = {
    /**
     * @type object | undefined
    */
    nativeCurrency?: TokenVo;
    /**
     * @description chain name
     * @type string | undefined
    */
    name?: string;
    /**
     * @type object | undefined
    */
    blockExplorer?: ChainConfigBlockExplorer;
    /**
     * @type object | undefined
    */
    tokens?: {
        [key: string]: TokenVo;
    };
    /**
     * @description chain id
     * @type integer | undefined, int64
    */
    id?: number;
    /**
     * @type string | undefined
    */
    rpcUrl?: string;
    /**
     * @type object | undefined
    */
    contracts?: {
        [key: string]: ChainConfigContractsValue;
    };
    /**
     * @type object | undefined
    */
    remote?: ChainConfigRemote;
    /**
     * @type boolean | undefined
    */
    testnet?: boolean;
    /**
     * @type object | undefined
    */
    osp?: ChainConfigOsp;
    /**
     * @type object | undefined
    */
    config?: ChainConfigConfig;
};