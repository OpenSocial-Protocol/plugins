import React, { useRef } from "react";
import "./style.css";
import SubmitButton from "../../component/Button/Button";
import {
  useCacheLocation,
  useCustomNavigate,
} from "@app/pluginUi/hook/useCustomLocation";
import { ImageState } from "../type";

const Canvas: React.FC = () => {
  const location = useCacheLocation();
  const navigate = useCustomNavigate();
  const { onCallBack } = (location.state || {}) as ImageState;

  const ref = useRef(null);
  const onClick = () => {
    const res = ref.current.getResult();
    onCallBack(res);
    navigate(-1);
  };
  return (
    <div className="w-full  h-full">
      <div className="flex justify-center items-center">
        <div className="mt-10 w-100">
          <SubmitButton enable={true} onClick={onClick} content="Done" />
        </div>
      </div>

      <drawing-board ref={ref} />
    </div>
  );
};

export default Canvas;
