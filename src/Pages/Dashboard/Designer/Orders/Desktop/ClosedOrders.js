import {useState, useEffect} from 'react';
import { useAuth } from "../../../../../Context/AuthenticationContext";
import { useModalAuth } from "../../../../../Context/ModalContext";

const   ClosedOrders = () => {
  const { setStatusModal } = useModalAuth();
  const { token } = useAuth();
  const [ closedOrders, setClosedOrders] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const request = await fetch(
          "https://osazebackendapi.herokuapp.com/api/designer/requests",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const response = await request.json();
        if (response.status === "success") {
          const pending = response.allOrders.filter((order) => {
            return order.status === "closed";
          });
          setClosedOrders(pending);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchHandler();
  }, [token])
 
  return (
    <div className="min-h-[57vh] flex justify-center items-center text-gray-300 text-xl animate-pulse">
      { closedOrders.length === 0 ? (
        <div>
          <p>There are no complete orders</p>
        </div>
      ) : (
          closedOrders.map((order) => {
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
                    setStatusModal(true);
                  }}
                >
                  Track this order
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default  ClosedOrders;
