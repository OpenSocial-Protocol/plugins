import React from "react";
import { message } from "antd";

const useErrorMessage = () => {
  const showError = (content: string) => {
    message.error({
      content: <div className="body-l-bold">{content}</div>,
      duration: 2,
      icon: <></>,
      key: `${content}`,
    });
  };

  return { showError };
};

export default useErrorMessage;
