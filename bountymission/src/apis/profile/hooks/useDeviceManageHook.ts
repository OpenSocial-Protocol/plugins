import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { DeviceManageMutationRequest, DeviceManageMutationResponse } from "../models/DeviceManage";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeviceManageClient = typeof client<DeviceManageMutationResponse, Error, DeviceManageMutationRequest>;
type DeviceManage = {
    data: DeviceManageMutationResponse;
    error: Error;
    request: DeviceManageMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeviceManageMutationResponse;
    client: {
        parameters: Partial<Parameters<DeviceManageClient>[0]>;
        return: Awaited<ReturnType<DeviceManageClient>>;
    };
};
/**
 * @link /v1/customer/device
 */
export function useDeviceManageHook(options: {
    mutation?: UseMutationOptions<DeviceManage["response"], DeviceManage["error"], DeviceManage["request"]>;
    client?: DeviceManage["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<DeviceManage["data"], DeviceManage["error"], DeviceManage["request"]>({
                method: "post",
                url: `/v1/customer/device`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}