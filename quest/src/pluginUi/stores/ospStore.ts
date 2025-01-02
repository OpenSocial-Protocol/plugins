import { CHAIN_ID, ID_TOKEN } from "@app/modules/constant";
import {
  Environment,
  ZeekClient,
  ZeekEnvironment,
} from "@keccak256-evg/zeek-client";
import { TypedDataDomain, TypedDataField, ethers } from "ethers";
import { action, computed, makeObservable, observable } from "mobx";

import CustomSigner from "./CustomSigner";
import { OspClient } from "@open-social-protocol/osp-client";
import { OspInitProps } from "../component/Init/types";

export class OspStore {
  @observable isLogin: boolean = false;
  @observable zeekClient?: ZeekClient = null;
  @observable ospClient?: OspClient = null;
  @observable aaAddress?: string = null;

  constructor() {
    makeObservable(this);
  }

  @computed get config() {
    return this.zeekClient?.config;
  }

  @computed get zeekEnvironment() {
    return this.zeekClient?.environment;
  }

  @action
  useEffect = async (props: OspInitProps) => {
    const { aaAddr, env, accessToken, chainId, eoaAddr, appId, idToken } =
      props;
    // 将 osp 的 idToken 存起来
    console.log("初始化", accessToken, idToken);
    localStorage.setItem(ID_TOKEN, idToken);
    const chain_id = parseInt(chainId, 16).toString();
    localStorage.setItem(CHAIN_ID, chain_id);
    if (!accessToken) {
      return;
    }
    const zeekClientEnv = env === "dev" ? "alpha" : env;
    const zeekEnvironment = await ZeekEnvironment.create({
      env: zeekClientEnv as Environment,
      chainId: chain_id,
      getHeaders: async () => {
        // 这里返回 {} 也可以的
        return {};
      },
    });

    // 假的 signer 对象
    console.log(zeekEnvironment.chainConfig.rpcUrl, zeekEnvironment, " rpcUrl");
    const ethersProvider = ethers.getDefaultProvider(
      zeekEnvironment.chainConfig.rpcUrl
    );
    const customSigner = new CustomSigner(eoaAddr, ethersProvider) as any;
    this.zeekClient = new ZeekClient({
      environment: zeekEnvironment,
      accountAddress: aaAddr,
      signer: customSigner,
    });
    console.log(
      "zeek contract address-->",
      this.zeekClient?.config?.contracts["zeek"].address
    );
    this.aaAddress = aaAddr;
    this.ospClient = await this.createOsp(
      zeekClientEnv,
      appId,
      chainId,
      accessToken,
      customSigner
    );
  };
  createOsp = async (
    env: string,
    appId: string,
    chainId: string | number,
    accessToken: string,
    signer: any
  ) => {
    return OspClient.create({
      env: env as Environment,
      app_id: appId,
      chain_id: typeof chainId === "string" ? parseInt(chainId, 16) : chainId,
      login_options: {
        accessToken: accessToken,
        signer,
      },
    });
  };
}

export const ospStore = new OspStore();
