import { PageMode } from "@open-social-protocol/osp-plugin-api-types"
import envConfig from "./envConfig.json"

export class ConfigManager {
    deepApi: string
    ipfsApi: string
    env: string
    mode: PageMode

    private static instance: ConfigManager;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ConfigManager();
        }
        return this.instance;
    }

    initEnv(env: string, mode: PageMode) {
        this.env = env || "dev";
        this.deepApi = envConfig.deepApis[env]
        this.ipfsApi = envConfig.ipfsApis[env]
        this.mode = mode
    }

}