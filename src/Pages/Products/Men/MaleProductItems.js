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
    <div className="px-6 py-4">
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
                  clasName="w-full h-auto"
                  src={menItem.url}
                  alt={menItem.name}
                />
              </div>{" "}
              <div className='w-5/12'><h1 className='text-xl '>{menItem.name}</h1></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MaleProductItems;
