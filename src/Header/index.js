"use client";
import { loginAction, logoutAction } from "@/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header({ getSession }) {
  // console.log(getSession,"getSession in header");

  async function handleAuthSignIn() {
    await loginAction();
  }
  async function handleAuthSignOut() {
    await logoutAction();
  }

  return (
    <header className="font-semibold lg:text-2xl text-lg flex  border-2 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] lg:m-8 m-4 px-4 min-h-16 tracking-wide z-50">
      <div className="flex justify-between items-center flex-wrap w-full">
        <h1>Shopping Cart</h1>
      </div>
      <ul className="flex lg:gap-6 gap-2 items-center ">
        <li>
          <Link href="/">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
      <div className="flex space-x-3 justify-center items-center lg:ml-6 ml-4">
        <form action={getSession?.user ? handleAuthSignOut : handleAuthSignIn}>
          <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
