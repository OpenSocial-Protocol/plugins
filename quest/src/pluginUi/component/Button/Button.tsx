import { Typography } from "antd";
const { Text } = Typography;

interface ButtonProps {
  onClick?: () => void;
  enable?: boolean;
  content?: string;
  type?: "light" | "gray";
}
const SubmitButton: React.FC<ButtonProps> = (props) => {
  const { onClick: onclick, enable: enable, content, type = "light" } = props;

  const bgColor =
    type === "light"
      ? enable
        ? "bg-[#FFF345]"
        : "bg-[#b5ad30]"
      : enable
        ? "bg-[#FEFEFE33]"
        : "bg-[#fefefe33]";

  const textColor =
    type === "gray"
      ? enable
        ? "text-[#fff]"
        : "text-[#6D6D6D]"
      : enable
        ? "text-[#0A0A0A]"
        : "text-[#6d6d6d]";

  return (
    <div
      className="flex-1  h-56 flex-col"
      style={{
        pointerEvents: enable ? "auto" : "none",
      }}
      onClick={onclick}
    >
      <div
        className={`w-full rounded-36 ${bgColor} px-16 py-8 flex flex-col justify-center items-center h-56`}
      >
        <div className="flex flex-row justify-center items-center  h-20">
          <div
            className={`text-left align-top text-16 font-SF Pro Display font-bold leading-24 whitespace-nowrap ${textColor}`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitButton;
