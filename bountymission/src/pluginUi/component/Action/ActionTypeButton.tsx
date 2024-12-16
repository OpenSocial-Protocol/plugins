interface ActionTypeButtonOps {
  clickable?: boolean;
  selected?: boolean;
  onClick?: () => void;
  content?: string;
  title?: string;
  canEdit?: boolean;
}

const ActionTypeButton: React.FC<ActionTypeButtonOps> = (props) => {
  const {
    clickable = true,
    selected: completed = false,
    onClick: onclick,
    content,
    title,
    canEdit = true,
  } = props;

  return (
    <div
      className={`w-full ${
        completed ? "bg-[#FFF345]" : "bg-[#252525]"
      } rounded-16 p-16 flex flex-row items-center h-79 mb-16`}
      style={{
        pointerEvents: clickable ? "auto" : "none",
      }}
      onClick={onclick}
    >
      <div className="flex-1 flex flex-col justify-center h-47">
        <div className="flex flex-col justify-center  h-47">
          <div
            className={`w-full text-left align-middle text-16 font-SF Pro Display font-bold leading-24 whitespace-nowrap ${
              completed ? "text-[#0A0A0A]" : "text-[#fdfdfd]"
            }`}
          >
            {title}
          </div>
          <div
            className={`w-full text-left align-middle text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap mt-2 ${
              completed ? "text-[#0A0A0A]" : "text-[#a0a0a0]"
            }`}
          >
            {content}
          </div>
        </div>
      </div>
      {completed && canEdit && (
        <div className="ml-12 w-20 h-20 ">
          <img
            src={require("../../../../assets/edit-alt-black.png")}
            className=" w-20 h-20"
          />
        </div>
      )}
    </div>
  );
};

export default ActionTypeButton;
