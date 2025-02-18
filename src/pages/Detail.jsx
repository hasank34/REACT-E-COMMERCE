import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productsDetailStatus, productsDetail } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);
  return (
    <div>
      {productsDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productsDetail={productsDetail} />
      )}
    </div>
  );
};

export default Detail;
