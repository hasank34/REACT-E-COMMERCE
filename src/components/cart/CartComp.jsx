import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-10 flex items-center justify-between gap-2">
      <img src={cart?.image} alt="" className="size-[150px] object-cover" />
      <div className="max-md:w-[250px] w-[450px]">
        <div className="text-xl">{cart?.title}</div>
        <div className="">{cart?.description}</div>
      </div>
      <div className="font-bold">
        {cart?.price} ₺ ({cart?.quantity}){" "}
      </div>
      <div
        onClick={() => {
          dispatch(removeFromCart(cart?.id));
        }}
        className="bg-red-500 text-white w-[150px] max-md:w-[100px]  cursor-pointer rounded-md h-16 max-md:h-10 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
