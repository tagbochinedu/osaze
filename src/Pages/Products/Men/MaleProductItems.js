import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageGrid } from "../../../Resources/Image";

const MaleProductItems = () => {
  const params = useParams();
  const [customizable, setCustomizable] = useState(false);
  const [selected, setSelected] = useState("");
  const [size, setSize] = useState("");
  const [custom, setCustom] = useState({});
  const [customDesign, setCustomDesign] = useState("not customized");
  const [fabric, setFabric] = useState("not customized");
  const [qty, setQty] = useState();
  const [cartItem, setCartItem] = useState({
    ItemDesigner: "",
    itemName: "",
    itemPrice: "",
    customDesign: "",
    fabric: "",
    qty: 0,
    size: "",
    custom: {},
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

  const sizeChangeHandler = (e) => {
    if (e.target.value === "custom") {
      setCustom();
      setSize("Custom measurements are used");
    } else {
      setCustom("Standard measurements are used");
      setSize(e.target.value);
    }
  };

  //Add-to-Cart Functionality
  const cartHandler = () => {
    setCartItem({
      ItemDesigner: menProductItem.designer,
      name: menProductItem.name,
      image: "",
      price: menProductItem.price,
      customDesign: customDesign,
      fabric: fabric,
      qty: qty,
      size: size,
      custom: custom,
    });
  };

  return (
    <div className="px-6 py-4 bg-black text-white font-merri">
      {menProductItem.map((menItem) => {
        return (
          <div key={menItem.id}>
            <h1 className="text-lg font-semibold mb-6 ml-20">
              <Link to="/men" className="hover:underline">
                Men
              </Link>
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
                <div className="my-4">
                  <h2 className="mb-3 font-merri text-white text-xl">Sizes</h2>
                  <div className="grid grid-cols-3 gap-2">
                    {menItem.sizes.map((size) => {
                      return (
                        <div className="form-check my-2" key={size}>
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-headerHover checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="sizes"
                            value={size}
                            required
                            onChange={sizeChangeHandler}
                          />
                          <label className="form-check-label inline-block text-white text-lg">
                            {size}
                          </label>
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
                      setQty(e.target.value);
                    }}
                  />
                </div>

                <div>Click <span onClick={()=>{setCustomizable(!customizable)}} className='font-semibold cursor-pointer'>HERE</span> to customize</div>
                {customizable ? (
                  <>
                    <select
                      className="bg-black outline outline-white w-full h-12 text-xl my-4"
                      onChange={(e) => {
                        setCustomDesign(e.target.value);
                      }}
                    >
                      <option className="h-12" disabled defaultValue hidden>
                        Choose A Custom Design
                      </option>
                      <option className="h-12" value="No Custom Design">
                        No Custom Design
                      </option>
                      {menItem.customization.map((custom) => {
                        return (
                          <option
                            key={custom}
                            value={custom}
                            className="h-12 bg-black hover:bg-black text-lg"
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
                                  setFabric(fabric);
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
                  </>
                ) : (
                  <div></div>
                )}
                

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
