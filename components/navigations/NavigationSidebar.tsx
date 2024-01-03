import { currentProfile } from "@/lib/current-profile";
import db from "@/lib/db";
import React from "react";
import NavigationAction from "./NavigationAction";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./NavigationItem";
import { ModeToggle } from "../ModeToggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col h-full text-primary dark:bg-[#1e1f34] py-5">
      <NavigationAction />

      <Separator className="h-1  bg-gray-300 dark:bg-zinc-700  rounded-full w-10 mx-auto" />

      <ScrollArea className="flex-1 w-full">
        {servers?.map((server) => {
          return (
            <div key={server.id} className="mb-4">
              <NavigationItem
                id={server.id}
                name={server.name}
                imageurl={server.imageurl}
              />
            </div>
          );
        })}
      </ScrollArea>

      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSidebar;
