import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageGrid } from "../../../Resources/Image";

const MaleProductItems = () => {
  const params = useParams();
  const [selected, setSelected] = useState("");
  const [cartItem, setCartItem] = useState({
    itemName: "",
    itemPrice: "",
    customDesign: "",
    fabric: "",
    quantity: 0,
  });

  const [menProductItem, setMenProductItem] = useState([]);
  useEffect(() => {
    setMenProductItem(
      ImageGrid.filter((item) => {
        return params.id === item.id;
      })
    );
  }, [params.id]);
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  //Add-to-Cart Functionality
  const cartHandler = () => {
    console.log(cartItem);
  };

  return (
    <div className="px-6 py-4 bg-black text-white font-merri">
      {menProductItem.map((menItem) => {
        return (
          <div key={menItem.id}>
            <h1 className="text-lg font-semibold mb-6 ml-20">
              <Link to="/men" className='hover:underline'>Men</Link>
              {">"}
              {menItem.name}
            </h1>
            <div className="flex justify-evenly">
              <div className="w-5/12">
                <img
                  className="w-full h-auto"
                  src={menItem.url}
                  alt={menItem.name}
                />
              </div>{" "}
              <div className="w-5/12">
                <h1 className="text-4xl font-semibold mb-5">{menItem.name}</h1>
                <p className="text-2xl my-4">{menItem.price}</p>
                <p className="text-xl font-semibold min-h-[250px] my-4">
                  {menItem.desc}
                </p>
                <select
                  className="bg-black outline outline-white w-full h-12 text-xl my-4"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCartItem({
                      itemName: menItem.name,
                      itemPrice: menItem.price,
                      customDesign: e.target.value,
                      fabric: cartItem.fabric,
                      quantity: cartItem.quantity,
                    });
                  }}
                >
                  <option className="h-12" disabled selected hidden >Choose A Custom Design</option>
                  <option className="h-12" value='No Custom Design'>No Custom Design</option>
                  {menItem.customization.map((custom) => {
                    return (
                      <option
                        key={custom}
                        value={custom}
                        className="h-12 bg-black hover:bg-black"
                      >
                        {custom}
                      </option>
                    );
                  })}{" "}
                </select>
                <div className="my-4">
                  <h4 className="font-merri mb-2 mt- text-xl">Fabric</h4>
                  <div className="flex">
                    {menItem.fabrics.map((fabric, i) => {
                      return (
                        <div
                          className="form-check relative flex items-center mr-10"
                          key={i}
                        >
                          <input
                            className="form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-headerHover checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-16 h-16 absolute z-10 opacity-0"
                            type="radio"
                            name="men"
                            id={fabric}
                            required
                            onChange={() => {
                              setSelected(fabric);
                              setCartItem({
                                itemName: menItem.name,
                                itemPrice: menItem.price,
                                customDesign: cartItem.customDesign,
                                fabric: fabric,
                                quantity: cartItem.quantity,
                              });
                            }}
                          />
                          <img
                            src={fabric}
                            alt="fabrics"
                            className={`${"w-16 h-16 rounded-full"} ${
                              selected === fabric
                                ? "border-2 border-header"
                                : ""
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="my-4">
                  <h4 className="font-merri mb-2 mt- text-xl">Quantity</h4>
                  <input
                    type="number"
                    min="1"
                    className="border border-white bg-black text-white text-center h-12 w-24"
                    onChange={(e) => {
                      setCartItem({
                        itemName: menItem.name,
                        itemPrice: menItem.price,
                        customDesign: cartItem.customDesign,
                        fabric: cartItem.fabric,
                        quantity: parseInt(e.target.value),
                      });
                    }}
                  />
                </div>

                <button
                  className="bg-white text-black text-md w-full hover:bg-inherit hover:outline hover:outline-white  hover:text-white transitin-all ease-in-out duration-500 font-semibold mt-6 px-2 py-2 uppercase"
                  onClick={cartHandler}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MaleProductItems;
