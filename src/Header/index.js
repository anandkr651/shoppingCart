"use client";
import { loginAction, logoutAction } from "@/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header({ getSession }) { //props comes from provider 
  // console.log(getSession,"getSession in header");

  async function handleAuthSignIn() {
    await loginAction();
  }
  async function handleAuthSignOut() {
    await logoutAction();
  }

  return (
    <header className=" sticky left-0 right-0 top-0 bg-white bottom-0 font-semibold lg:text-2xl text-lg  border-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] min-h-16 tracking-wide z-50">
      <div className="flex px-10 py-4">
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
      </div>
    </header>
  );
}

export default Header;
