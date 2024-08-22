"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function UnAuthpage() {
    const getSession = await auth();
    if (getSession?.user) redirect("/");
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-5xl font-extrabold">
        You are not logged in | please log in
      </h2>
    </div>
  );
}

export default UnAuthpage;
