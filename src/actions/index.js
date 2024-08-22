"use server";
import { signIn, signOut } from "@/auth";

//get All product
export async function fetchAllProduct() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await apiResponse.json();

    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

//ProductDetailsPage
export async function fetchProductDetails(currentId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/products/${currentId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await apiResponse.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

//signIn
export async function loginAction() {
  await signIn("github");
}

//signOut
export async function logoutAction() {
  await signOut("github");
}
