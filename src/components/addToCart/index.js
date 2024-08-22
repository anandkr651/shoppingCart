"use client";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/card-slice";

function AddToCart({ currentProduct }) {
  const { cart } = useSelector((state) => state);
  // console.log(cart?.cartItem);

  const dispatch = useDispatch();

  function handleToAddCart() {
    dispatch(addToCart(currentProduct));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(currentProduct?.id));
  }

  return (
    <div className="my-2">
      <Button
        type="button"
        onClick={
          cart.cartItem?.some((item) => item.id === currentProduct.id)
            ? handleRemoveFromCart
            : handleToAddCart
        }
      >
        {cart.cartItem?.some((item) => item.id === currentProduct.id)
          ? "Remove From Cart"
          : "Add To Cart"}
      </Button>
    </div>
  );
}

export default AddToCart;
