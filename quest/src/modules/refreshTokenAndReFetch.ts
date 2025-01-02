import { ospStore, OspStore } from "@app/pluginUi/stores";
import { PendingPromise } from "./pendingPromise";


const maxTryTimes = 3
const refreshTokenInterval = 1000 * 20;

export class RefreshTokenAndReFetch {
    private static instance: RefreshTokenAndReFetch;
    private cacheTimes = 0;
    private hasInitToken = false
    private lastRefreshTime = 0;

    private constructor() {
    }


    public static getInstance(): RefreshTokenAndReFetch {
        if (!RefreshTokenAndReFetch.instance) {
            RefreshTokenAndReFetch.instance = new RefreshTokenAndReFetch();
        }
        return RefreshTokenAndReFetch.instance;
    }

    public setInitToken(initToken: boolean) {
        this.hasInitToken = initToken
    }

    private refreshTokenAync = async () => {
        if (!this.hasInitToken || !ospStore.ospClient || this.cacheTimes > maxTryTimes) {
            return null
        }
        // lastRefreshTime
        if(Date.now() - this.lastRefreshTime < refreshTokenInterval){
            this.lastRefreshTime = Date.now()
            return null
        }
        this.lastRefreshTime = Date.now()
        try {
            const accessToken = await ospStore.ospClient.authentication?.accessToken?.()
            const idToken = await ospStore.ospClient.authentication?.idToken?.()
            return {
                idToken: idToken?.id_token,
                accessToken: accessToken?.access_token
            }
        } catch (e) {
            this.cacheTimes++
            console.log(e)
        } finally {
        }
        return null
    }


    refreshToken = () => {
        return PendingPromise.getInstance().makePromiseProxy("refreshToken", this.refreshTokenAync)
    }

}