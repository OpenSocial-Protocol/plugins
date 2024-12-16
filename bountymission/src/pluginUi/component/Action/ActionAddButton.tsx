import { Typography, Image } from "antd";
const { Text } = Typography;

interface ActionButtonOps {
  onClick?: () => void;
  visibility?: boolean;
  text?: string;
}

const ActionAddButton: React.FC<ActionButtonOps> = (props) => {
  const { onClick: onclick, visibility = true, text = "Add Action" } = props;
  return visibility ? (
    <div
      className="w-full border-1 border-[#a0a0a0] border-dashed rounded-8 flex flex-col justify-center items-center mt-16"
      onClick={onclick}
    >
      <div className="w-full rounded-36 px-16 py-8 flex flex-col justify-center items-center h-46 ">
        <div className="flex flex-row justify-center items-center w-89 h-20">
          <img
            src={require("../../../../assets/plus.png")}
            className="h-full w-20"
          />
          <div className="text-left align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#a0a0a0] ml-4">
            {text}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ActionAddButton;
