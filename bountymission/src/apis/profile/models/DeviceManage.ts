import type { WebResponse } from "./WebResponse";
import type { DeviceInfoRequest } from "./DeviceInfoRequest";

 /**
 * @description OK
*/
export type DeviceManage200 = WebResponse;
export type DeviceManageMutationRequest = DeviceInfoRequest;
/**
 * @description OK
*/
export type DeviceManageMutationResponse = WebResponse;
export type DeviceManageMutation = {
    Response: DeviceManageMutationResponse;
    Request: DeviceManageMutationRequest;
};