import { BigNumber, Contract, ethers, providers } from "ethers";
import {
  useCacheLocation,
  useCustomNavigate,
} from "@app/pluginUi/hook/useCustomLocation";
import { useEffect, useState } from "react";

import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import ImageContent from "@app/pluginUi/component/ImageContent";
import SubmitButton from "@app/pluginUi/component/Button/Button";
import { observer } from "mobx-react";
import { parseZoralNftUrl } from "@app/pluginUi/utils/parse/parseZoralNft";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";

function NftDetail() {
  const navigate = useCustomNavigate();
  const location = useCacheLocation();
  const postMessage = usePostMessage();
  const { imgUrl, zoraUrl } = location.state;
  const [collectionName, setCollectionName] = useState("");
  const [price, setPrice] = useState("");
  const [fee, setFee] = useState("");

  const { address, tokenId } = parseZoralNftUrl(zoraUrl ?? "");

  useEffect(() => {
    const getZoralInfo = async () => {
      const provider = new providers.JsonRpcProvider(
        "https://sepolia.base.org"
      );
      const contract = new Contract(
        "0x7dF02f85227FA1CCD3d6d89B613fc7b086d04D59",
        [
          "function getZoraCollectionInfo(address,address,uint256) view returns (string, uint256, uint256)",
        ],
        provider
      );
      try {
        const response = await contract.getZoraCollectionInfo(
          "0xd34872BE0cdb6b09d45FCa067B07f04a1A9aE1aE",
          address,
          tokenId
        );

        const collection = response[0];
        const price = response[1];
        const fee = response[2];

        setCollectionName(collection);
        setPrice(ethers.utils.formatUnits(BigNumber.from(price), 18));
        setFee(ethers.utils.formatUnits(BigNumber.from(fee), 18));
        console.log({ collection, price, fee }, "result");
      } catch (e) {
        console.error("get zoral collection info error", e);
      }
    };
    getZoralInfo();
  }, []);

  const mint = () => {
    const quantity = 1;
    const mintValue = ethers.utils
      .parseEther(price)
      .add(ethers.utils.parseEther(fee))
      .mul(quantity)
      .toString();
    const mintReferral = "0xCb4054cD972096C0582aFd71897b71Ca79B43665";
    const minterArguments = ethers.utils.hexZeroPad(mintReferral, 32);
    postMessage(ContractAction.mint, {
      playboardId: 12341234,
      minter: "0xd34872BE0cdb6b09d45FCa067B07f04a1A9aE1aE",
      collection: "0x8C323439E243AFe55554a1EA5Eb8e349bc75A965",
      tokenId: 1,
      quantity: quantity,
      minterArguments: minterArguments,
      mintReferral: mintReferral,
      value: mintValue,
    });
  };

  const backToMain = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex flex-col w-full ">
        <div className="absolute flex flex-col items-center  bottom-0 bg-[#121212] w-full rounded-tl-16 rounded-tr-16 px-16 pt-16 pb-24">
          <div className="w-full flex flex-col items-center ">
            <div className="w-full flex flex-col items-center ">
              {/* <div className="w-full flex-col rounded-12 overflow-hidden aspect-w-1 aspect-h-1 relative h-345 bg-[#111111]">
                <img
                  src={imgUrl ?? require("../../../assets/bricks-logo.png")}
                  className="w-full rounded-8"
                />
              </div> */}
              <ImageContent imgUrl={imgUrl} mode="preview" />

              <div className="flex flex-col items-center mt-24  h-54 ">
                <div className="flex flex-row justify-between w-full h-21">
                  <div className="text-left align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#a0a0a0]">
                    Collection
                  </div>
                  <div className="text-right align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#fdfdfd] ml-269">
                    {collectionName}
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full mt-12  h-21">
                  <div className="text-left align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#a0a0a0]">
                    Price
                  </div>
                  <div className="text-right align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#fdfdfd] ml-257">
                    {`${price}ETH`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-32 w-full h-108">
            <SubmitButton
              content="Mint not avaible in Preview mode"
              onClick={mint}
              enable={true}
            />
            <div
              className="w-full rounded-36 flex flex-col justify-center items-center mt-16 h-36"
              onClick={backToMain}
            >
              <div className="w-full rounded-36 py-8 flex flex-col justify-center items-center h-36">
                <div className="flex flex-row justify-center items-center w-58 h-20">
                  <div className="text-left align-top text-16 font-SF Pro Display font-bold leading-24 whitespace-nowrap text-[#6d6d6d]">
                    Zora
                  </div>
                  <img
                    src={require("../../../../assets/expand-alt.png")}
                    className="h-full ml-4 w-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(NftDetail);
