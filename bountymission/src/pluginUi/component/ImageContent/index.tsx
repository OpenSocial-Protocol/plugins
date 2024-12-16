import { SourceType } from "@app/pluginUi/pages/create";
import { isMobile } from "@app/pluginUi/utils/parse/commonUtils";
import { Upload } from "antd";

interface ImageContentProps {
  imgUrl: string;
  imgSource?: "canvas" | "album";
  onClear?: () => void;
  onUpload?: (file) => void;
  onDraw?: () => void;
  mode?: "create" | "preview" | "interaction";
}

const ImageContent: React.FC<ImageContentProps> = (props) => {
  const {
    imgUrl,
    onClear,
    onUpload,
    onDraw,
    imgSource,
    mode = "create",
  } = props;
  const editButton = () => {
    if (imgSource === SourceType.Canvas) {
      return (
        <div
          className="absolute bottom-8 right-8  bg-[#0a0a0a33] rounded-36 flex flex-col justify-center items-center w-78 h-36"
          onClick={onDraw}
        >
          <div className="rounded-36 px-16 py-8 flex flex-col justify-center items-center w-78 h-36">
            <div className="flex flex-row justify-center items-center w-46 h-20">
              <img
                src={require("../../../../assets/edit-alt-gray.png")}
                className="h-full w-20"
              />
              <div className="text-left align-top text-12 font-SF Pro Display font-bold leading-18 whitespace-nowrap text-[#fdfdfd] ml-4">
                Edit
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="absolute bottom-8 right-8  bg-[#0a0a0a33] rounded-36 flex flex-col justify-center items-center w-78 h-36">
        <Upload
          className="rounded-36 px-16 py-8 flex flex-col justify-center items-center w-78 h-36"
          action="/upload-endpoint"
          accept={isMobile ? "image/*" : ""}
          onChange={(file) => onUpload(file)}
          showUploadList={false}
        >
          <div className="flex flex-row justify-center items-center w-46 h-20">
            <img
              src={require("../../../../assets/edit-alt-gray.png")}
              className="h-full w-20"
            />
            <div className="text-left align-top text-12 font-SF Pro Display font-bold leading-18 whitespace-nowrap text-[#fdfdfd] ml-4">
              Edit
            </div>
          </div>
        </Upload>
      </div>
    );
  };

  return (
    <div className="w-full flex mt-8 rounded-12">
      {imgUrl ? (
        <div className="w-full flex-col rounded-12 overflow-hidden aspect-w-1 aspect-h-1 relative h-345 bg-[#111111] ">
          <div className="w-full h-345">
            <img src={imgUrl} className="object-cover w-full h-full" />
          </div>
          <div
            className={`absolute top-0 right-0  m-8 object-cover rounded-36 w-24 h-24 inline-flex justify-center items-center ${
              mode === "create" ? "visible" : "invisible"
            }`}
            style={{
              zIndex: 1,
              backgroundColor: "rgba(10, 10, 10, 0.2)",
            }}
            onClick={onClear}
          >
            <img
              src={require("../../../../assets/icon-close.png")}
              className="w-24 h-24  object-cover"
            />
          </div>
          {mode === "create" && editButton()}
        </div>
      ) : (
        <div className="w-full bg-[#111111]  pt-32 flex flex-col justify-center items-center  h-182 rounded-12">
          <div
            className="flex flex-col justify-center items-center w-full h-65"
            onClick={onDraw}
          >
            <img
              className="w-40 h-40"
              src={require("../../../../assets/draw-canvas.png")}
            />
            <div className="text-left align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#a0a0a0] mt-4">
              Draw with Canvas
            </div>
          </div>
          <Upload
            className="w-full bg-[#0a0a0a] rounded-bl-12 rounded-br-12 py-16 flex flex-row justify-center items-center mt-32 h-53"
            action="/upload-endpoint"
            accept={isMobile ? "image/*" : ""}
            onChange={(file) => onUpload(file)}
          >
            <div className="flex flex-row justify-center items-center">
              <div className="text-14 font-SF Pro Display font-normal text-color_A1A1A1">
                or
              </div>
              <div className="text-14 font-SF Pro Display font-normal text-color_97DE44 ml-4">
                Upload
              </div>
            </div>
          </Upload>
        </div>
      )}
    </div>
  );
};

export default ImageContent;
