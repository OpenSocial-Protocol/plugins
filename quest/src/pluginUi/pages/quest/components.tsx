"use client";

const NativeHeaderOrg = () => {
  return <div className="flex flex-col w-full h-full px-16 bg-[red]"></div>;
};
const NativeHeader = NativeHeaderOrg;

const CreateHeadOrg = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="headline-h7 text-content_primary">
        Set up Tasks for your Space Members!
      </div>
      <div className="text-content_primary body-m-regular">
        Rewards will be locked in Space and handed to eligible members after
        they follow your account.
      </div>
    </div>
  );
};
const CreateHead = CreateHeadOrg;

export { NativeHeader, CreateHead };
