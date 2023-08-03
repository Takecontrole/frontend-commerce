import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Ваш заказ обрабатывается.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Передаётся в службу доставки.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Ваш заказ в пути.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Ваш заказ уже в вашем городе.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Курьер на пути к вам 
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Ваш заказ доставлен!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Ваш возврат оформляется!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Возврат прошёл успешно!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
