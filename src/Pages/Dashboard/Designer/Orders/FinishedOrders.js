import { DUMMY_DATA3 } from "../../../../DummyData";

const FinishedOrders = () => {
  return (
    <div className="min-h-[60vh]">
      {DUMMY_DATA3.length === 0 ? (
        <div className="h-[50vh] flex justify-center items-center text-gray-300 font-semibold text-xl">
          <h2>You have not finished any orders</h2>
        </div>
      ) : (
        <div>{DUMMY_DATA3.map((order) => {
          return (
            <div
              key={order.id}
              className="border border-bg-500 my-2 py-2 px-2 flex justify-between"
            >
              <div className="w-24">
                <img src={order.url} alt="order details" className="w-24 h-auto" />
              </div>
              <div className="flex flex-col justify-between w-8/12">
                <h3 className="font-bold ">{order.name}</h3>
                <p>Order ID: {order.id}</p>
                <p>Price: ${order.price}</p>
              </div>
            </div>
          );
        })}</div>
      )}
    </div>
  );
};

export default FinishedOrders;
