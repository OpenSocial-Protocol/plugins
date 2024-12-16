"use client";

import { observer } from "mobx-react";
import { QuestCreateFrom } from "./createFrom";
import { CreateHead } from "./components";

const QuestCreateOrg = observer(() => {
  return (
    <div className="flex flex-col w-full h-full px-16">
      <CreateHead />
      <QuestCreateFrom />
    </div>
  );
});
const QuestCreate = QuestCreateOrg;

export { QuestCreate };
