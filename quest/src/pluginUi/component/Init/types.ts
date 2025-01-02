import { Environment } from "@keccak256-evg/zeek-client";
import { ReactNode } from "react";

export type OspInitProps = {
  aaAddr: string;
  env: string;
  accessToken: string;
  appId: string;
  chainId: string;
  eoaAddr: string;
  idToken: string;
};

export type OspIniterProps = {
  children: ReactNode;
} & OspInitProps;

export enum TUIMsgEnum {
  Refund = "refund",
  Verify = "verify",
  Create_Approve = "create_approve",
}
