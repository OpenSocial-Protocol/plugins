import React from "react";

export default function LoadingView() {
  return (
    <div className="p-16 flex flex-col w-full bg-background_secondary mt-14 rounded-16 ">
      <div className="flex flex-col w-full ">
        <div className="flex flex-row">
          <div className="loader1 mt-12" />
          <div className="ml-12">
            <div className="loader2  mt-12 " />
            <div className="loader3  mt-12" />
          </div>
        </div>
        <div className="loader4 mt-24" />
        <div className="loader5  mt-24" />
      </div>
    </div>
  );
}
