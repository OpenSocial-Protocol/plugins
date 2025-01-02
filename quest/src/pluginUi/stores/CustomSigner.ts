import { ethers } from "ethers";

/**
 * 自定义 signer 对象
 */
class CustomSigner extends ethers.Signer {
  private address: string;

  constructor(address: string, provider?: ethers.providers.Provider) {
    super();
    this.address = address;
    // this.provider = provider || ethers.getDefaultProvider();
  }

  // 实现 getAddress 方法
  async getAddress(): Promise<string> {
    return this.address;
  }

  // 其他方法可以抛出未实现的错误
  signMessage(message: ArrayLike<number> | string): Promise<string> {
    return Promise.resolve("");
  }

  signTransaction(
    transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>
  ): Promise<string> {
    throw new Error("signTransaction method not implemented.");
  }

  _signTypedData(
    domain: ethers.TypedDataDomain,
    types: Record<string, Array<ethers.TypedDataField>>,
    value: Record<string, any>
  ): Promise<string> {
    throw new Error("_signTypedData method not implemented.");
  }

  connect(provider: ethers.providers.Provider): ethers.Signer {
    return new CustomSigner(this.address, provider);
  }
}

export default CustomSigner;
