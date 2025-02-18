import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product?.id}`)}
      className="w-[340px] border rounded-md p-2 mb-2 mx-2 relative cursor-pointer"
    >
      <div className="text-xl  absolute rounded-md top-2 right-2 bg-black text-white py-1">
        {product?.price} <span className="text-sm">₺</span>
      </div>

      <img
        src={product?.image}
        className="w-[200px] h-[200px] object-cover m-auto "
        alt=""
      />
      <div className="text-center px-3 mt-3  font-bold ">{product?.title}</div>
    </div>
  );
};

export default Product;
