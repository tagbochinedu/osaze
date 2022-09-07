import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageGrid } from "../../../Resources/Image";

const MaleProductItems = () => {
  const params = useParams();

  const [menProductItem, setMenProductItem] = useState([]);
  useEffect(() => {
    setMenProductItem(
      ImageGrid.filter((item) => {
        return params.id === item.id;
      })
    );
  }, [params.id]);

  //Add-to-Cart Functionality
  const cartHandler = () => {};

  return (
    <div className="px-6 py-4 bg-black text-white ">
      {menProductItem.map((menItem) => {
        return (
          <div key={menItem.id}>
            <h1 className="text-lg font-semibold underline">
              Men{">"}
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
                <p className="text-2xl my-5">{menItem.price}</p>
                <p className="text-xl font-semibold min-h-[250px] my-5">
                  {menItem.desc}
                </p>
                <select className="bg-black outline outline-white w-full h-12 text-xl">
                  <option className="h-12">Select A Color</option>
                  {menItem.colors.map((color) => {
                    return (
                      <option
                        key={color}
                        value={color}
                        className="h-12 bg-black hover:bg-black"
                      >
                        {color}
                      </option>
                    );
                  })}{" "}
                </select>
                <div className="flex">
                  {menItem.fabrics.map((fabric, i) => {
                    return (
                      <div
                        className="form-check my-2 relative flex items-center mx-6 my-5"
                        key={i}
                      >
                        <input
                          className="form-check-input appearance-none rounded-full border border-gray-300 bg-white checked:bg-headerHover checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-16 h-16 absolute z-10 opacity-0"
                          type="radio"
                          name="fabric"
                          id="men"
                          required
                        />
                        <img
                          src={fabric}
                          alt="fabrics"
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {" "}
                  <input
                    type="number"
                    min="150"
                    max="1000000"
                    className="mx-2 border border-white bg-black text-white text-center h-12"
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
