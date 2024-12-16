import { IActionContext } from "@app/pluginUi/stores/types";
import ActionAddButton from "./ActionAddButton";
import action from "@app/pluginUi/pages/action";

interface ActionButtonGroupOps {
  mode?: "edit" | "interaction";
  onActionClick?: (index: number, action: IActionContext) => void;
  actions?: IActionContext[];
  onAddActionClick?: () => void;
  addButtonText?: string;
}
const ActionButtonGroup: React.FC<ActionButtonGroupOps> = (props) => {
  const {
    onActionClick: onclick,
    actions: actionList,
    mode = "edit",
    onAddActionClick,
    addButtonText = "Add",
  } = props;
  if (actionList.length > 4) {
    return <></>;
  }

  const getActionView = (index: number, action: IActionContext) => {
    const firstML = (index + 1) % 2 === 0 ? "ml-8" : "";
    return (
      <div
        key={index}
        className={`flex-1 bg-[#111111] rounded-8 flex w-full flex-col justify-center items-center h-46 ${firstML}`}
        onClick={() => {
          console.log("action click", index, JSON.stringify(action));
          onclick(index, action);
        }}
      >
        <div className=" px-16 flex flex-col justify-center items-center  h-46">
          <div className="flex flex-row justify-center items-center h-20">
            {mode === "edit" && (
              <img
                src={require("../../../../assets/edit-alt-gray.png")}
                className="h-20 w-20"
                style={{ objectFit: "contain" }}
              />
            )}
            <div className="text-left align-top text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#7d7d7d] ml-4">
              {action.name || "Action"}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row mt-8 h-46">
        {actionList.map((action, index) => {
          if (index <= 1) {
            return getActionView(index, action);
          }
        })}
      </div>
      {actionList.filter((_, index) => index >= 2).length > 0 && (
        <div className="flex flex-row mt-8 h-46">
          {actionList.map((action, index) => {
            if (index >= 2) {
              return getActionView(index, action);
            }
          })}
        </div>
      )}

      {mode === "edit" && (
        <ActionAddButton
          onClick={onAddActionClick}
          visibility={actionList.length < 4}
          text={addButtonText}
        />
      )}
    </div>
  );
};

export default ActionButtonGroup;
