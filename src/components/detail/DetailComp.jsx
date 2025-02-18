import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const DetailComp = ({ productsDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productsDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    navigate("/cart");
    dispatch(
      addToCart({
        id: productsDetail?.id,
        title: productsDetail?.title,
        image: productsDetail?.image,
        price: productsDetail?.price,
        quantity: quantity,
      })
    );
  };
  //
  return (
    <div className="flex gap-10 my-10 max-md:flex-col max-md:gap-40">
      <div className="m-auto min-w-[300px] max-w-[400px] min-h-[300px] max-h-[400px] object-cover">
        <img src={productsDetail?.image} alt="" className="" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-3xl font-semibold">{productsDetail?.title}</div>
        <div className="text-2xl text-gray-500 ">
          {productsDetail?.description}
        </div>
        <div className="flex justify-between align-items-center">
          <div className="flex flex-col gap-3">
            <div className="text-2xl text-gray-500 ">
              Derecesi: {productsDetail?.rating?.rate}
            </div>
            <div className="text-2xl text-red-500">
              Adet: {productsDetail?.rating?.count}
            </div>
            <div className="text-2xl font-semibold text-green-600">
              Fiyat: {productsDetail?.price} <span className="text-sm">₺</span>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="flex items-center    p-2 rounded-md  gap-5 ">
              <div
                disabled={quantity === 0}
                onClick={decrement}
                className={`text-5xl cursor-pointer ${
                  quantity === 0 && "text-gray-300"
                }  `}
              >
                -
              </div>
              <input
                className="w-14 text-3xl text-center"
                type="text"
                value={quantity}
              />
              <div onClick={increment} className="text-4xl cursor-pointer">
                +
              </div>
            </div>
            <div
              onClick={addBasket}
              className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center"
            >
              Sepete Ekle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
