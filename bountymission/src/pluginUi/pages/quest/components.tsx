"use client";

const NativeHeaderOrg = () => {
  return <div className="flex flex-col w-full h-full px-16 bg-[red]"></div>;
};
const NativeHeader = NativeHeaderOrg;

const CreateHeadOrg = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="headline-h7 text-content_primary">Set your tasks</div>
      <div className="text-content_primary body-m-regular">
        Rewards will be locked on Space and given to XXX after they follow your
        account
      </div>
    </div>
  );
};
const CreateHead = CreateHeadOrg;

export { NativeHeader, CreateHead };
