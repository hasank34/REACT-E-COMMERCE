import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount, carts } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  return (
    <div className="flex items-center gap-5 max-lg:gap-3">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          type="text"
          placeholder="Arama Yapınız..."
          className=" bg-gray-200 outline-none max-md:w-[150px]"
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full size-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
