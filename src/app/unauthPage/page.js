"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function UnAuthpage() {
  const getSession = await auth();
  // console.log(getSession);

  if (getSession?.user) redirect("/");
  return (
    <div className="flex items-center justify-center">
      <h2 className="lg:text-5xl text-3xl text-center font-extrabold">
        You are not logged in | please log in
      </h2>
    </div>
  );
}

export default UnAuthpage;
