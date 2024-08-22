"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { removeFromCart } from "@/store/slices/card-slice";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  // console.log(cart?.cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.cartItem) {
      setTotalAmount(cart.cartItem.reduce((acc, curr) => acc + curr?.price, 0));
    }
  }, [cart?.cartItem]);

  function handleClick(productId) {
    dispatch(removeFromCart(productId));
  }

  if (!cart?.cartItem?.length)
    return (
      <h1 className="text-3xl font-extrabold text-center text-slate-600 ">
        Cart is empty
      </h1>
    );

  return (
    <div className="mx-5">
      <Table className="px-10 border-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Return Policy</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.cartItem.map((buyItem) => (
            <TableRow key={buyItem.id}>
              <TableCell className="font-medium">
                {buyItem.title || "N/A"}
              </TableCell>
              <TableCell>
                {buyItem.returnPolicy || "No return policy"}
              </TableCell>
              <TableCell>{buyItem.brand || "Unknown brand"}</TableCell>
              <TableCell>
                {buyItem.price != null ? buyItem.price : "N/A"}
              </TableCell>
              <TableCell>
                <Button onClick={() => handleClick(buyItem.id)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>{totalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Cart;
