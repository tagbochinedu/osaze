import { useEffect } from "react";

import { useAuth } from "../../../../Context/AuthenticationContext";

import { useModalAuth } from "../../../../Context/ModalContext";

const CompletedOrders = () => {
  const { setReviewModal } = useModalAuth();
  const { userData } = useAuth();
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="min-h-[45vh] flex justify-center items-center text-gray-300 text-xl animate-pulse">
      {userData.orders.length === 0 ? (
        <div>
          <p>No orders have been completed</p>
        </div>
      ) : (
        userData.orders.map((order) => {
          return (
            <div
              key={order.id}
              className="border border-bg-500 my-2 py-2 px-2 flex justify-between"
            >
              <div className="w-24">
                <img
                  src={order.order.url}
                  alt="order details"
                  className="w-24 h-28"
                />
              </div>
              <div className="flex flex-col justify-between w-8/12">
                <h3 className="font-bold ">{order.name}</h3>
                <p>Order ID: {order.id}</p>
              </div>
              <div className="w-2/12">
                <button
                  onClick={() => {
                    setReviewModal(true);
                  }}
                >
                  Review This Item
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CompletedOrders;
