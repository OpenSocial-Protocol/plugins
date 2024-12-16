import type { NftMintResponseVo } from "./NftMintResponseVo";
import type { NftMintRequestVo } from "./NftMintRequestVo";

 /**
 * @description Successful operation
*/
export type NftMint200 = NftMintResponseVo;
export type NftMintMutationRequest = NftMintRequestVo;
/**
 * @description Successful operation
*/
export type NftMintMutationResponse = Omit<NonNullable<NftMintResponseVo>, "responseEnum">;
export type NftMintMutation = {
    Response: NftMintMutationResponse;
    Request: NftMintMutationRequest;
};