import { auth } from "@/auth";
import Cart from "@/components/Cart";
import { redirect } from "next/navigation";
import React from "react";

async function Cardpage() {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauthPage");
  return (
    <div>
      <Cart />
    </div>
  );
}

export default Cardpage;
