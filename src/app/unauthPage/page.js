import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

async function UnAuthpage() {
  const getSession = await auth();
  if (getSession?.user) redirect("/");

  return (
    <div className="flex items-center justify-center">
      <h2 className="text-5xl font-extrabold">
        You are not login | please login
      </h2>
    </div>
  );
}

export default UnAuthpage;
