
type PendingMapType = {
    [key: string]: Promise<unknown>
}


export class PendingPromise {
    private pendingMap: PendingMapType

    private static instance: PendingPromise

    constructor() {
        this.pendingMap = {}
    }
    
    public static getInstance(): PendingPromise {
        if (!PendingPromise.instance) {
            PendingPromise.instance = new PendingPromise()
        }
        return PendingPromise.instance
    }


    isPending(key: string) {
        return !!this.pendingMap[key]
    }

    async makePromiseProxy<T>(key: string, executePromiss: () => Promise<T>) {
        if (!this.pendingMap[key]) {
            this.pendingMap[key] = executePromiss()
        }
        const currentPromise = this.pendingMap[key] as Promise<T>
        try{
            const result = await currentPromise
            return result
        }catch(e){
            throw e
        }finally{
            delete this.pendingMap[key]
        }
       
    }
}
