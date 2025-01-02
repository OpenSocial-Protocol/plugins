import { TPluginTemplate } from "@open-social-protocol/osp-plugin-api-types";

const fetchEnv = async () => {
    // @ts-expect-error
    console.log("fetch:--init" + !!fetchSync)

    //@ts-expect-error
    fetchSync("http://127.0.0.1:7001/plugin/previewabcdata", undefined, {
        type: "json",
        callBack: ({ isSuccess, body }) => {
            if (isSuccess && body.data) {

                ospSandbox.setPreviewData(body.data as TPluginTemplate)
            } else {
                ospSandbox.setPreviewData(undefined)
            }

        }
    })

}
console.log("ospSandbox.type", ospSandbox.type)

fetchEnv()