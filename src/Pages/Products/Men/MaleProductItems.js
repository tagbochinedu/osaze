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
                <p className="text-xl font-semibold min-h-[250px] my-5 border border-white">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MaleProductItems;
