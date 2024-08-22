import Loading from "@/app/loading";
import { auth } from "@/auth";
const { default: ReduxProvider } = require("@/provider");
import { Suspense } from "react";

export async function CommonLayout({ children }) {
  const getSession = await auth();

  return (
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ReduxProvider>
  );
}
