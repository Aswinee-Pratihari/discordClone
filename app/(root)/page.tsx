import InitialModal from "@/components/modal/InitialModal";
import db from "@/lib/db";
import { InitialProfile } from "@/lib/initialProfile";
import { redirect } from "next/navigation";
import React from "react";

const SetupPage = async () => {
  const profile = await InitialProfile();

  //finding server
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return (
    // <div className="flex justify-center items-center h-full">

    <InitialModal />
    // </div>
  );
};

export default SetupPage;
