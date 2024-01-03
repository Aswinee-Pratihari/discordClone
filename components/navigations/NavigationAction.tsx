"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "../ActionTooltip";

const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip label="Add a Server" align="center" side="right">
        <button className="group">
          <div className="flex mx-3 h-[50px] w-[50px] rounded-full hover:rounded-xl transition-all ease-in-out duration-200 overflow-hidden items-center justify-center bg-neutral-400 dark:bg-neutral-700 group-hover:bg-emerald-600">
            <Plus className="group-hover:text-white transition-all  text-emerald-600" />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
