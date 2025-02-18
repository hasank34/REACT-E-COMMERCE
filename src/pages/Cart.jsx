import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, itemCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts.length === 0 ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-150px)]">
          <div className="flex flex-col gap-5">
            <span>Sepetinizde Ürün Bulunmamaktadır...</span>
            <Link
              to={"/"}
              className="bg-gray-200 p-2 rounded-full w-fit hover:bg-gray-400"
            >
              Ürün Eklemek için Tıklayın
            </Link>
          </div>
        </div>
      ) : (
        carts?.map((cart, i) => <CartComp key={i} cart={cart} />)
      )}{" "}
      {carts.length > 0 && (
        <div className="flex items-center justify-end  text-2xl   ">
          Toplam Tutar: <span className="ml-2">{totalAmount} ₺</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
