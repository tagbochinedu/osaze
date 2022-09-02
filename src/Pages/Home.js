import { Link } from "react-router-dom";
import { ImagePreview, ImageGrid } from "../Resources/Image";

import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
    <Carousel/>
      <div
        className="text-xl text-black flex justify-around px-6 flex-wrap py-10"
        id="Collection"
      >
        
        {ImagePreview.map((image) => {
          return (
            <div
              className="p-4 bg-white border-2 border-black my-4 mx-4 mx-auto"
              key={image.id}
            >
              <img className="h-64 w-60" src={image.url} alt="preview" />
              <div className="text-center my-4">
                <h4 className="font-bold text-center mb-6 font-merri">{image.name}</h4>
                <Link to="" className="bg-black text-white mt-6 px-1.5 py-1.5">
                  Shop
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-24">
        <h4 className='text-4xl font-bold text-center mb-6 font-julius'>Customized Clothing - Coming Soon</h4>
        <div className='flex flex-wrap justify-around'>
          {ImageGrid.map((gridImage) => {
            return (
              <div className="flip-card w-48 md:w-72 h-80 mx-1 md:mx-2 my-4 hover:rounded-md" key={gridImage.id}>
                <div className="flip-card-inner h-full w-full relative text-center rounded-md">
                  <div className="flip-card-front absolute w-full h-full rounded-md text-black">
                    <img
                      src={gridImage.url}
                      alt={gridImage.name}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="flip-card-back absolute w-full h-full rounded-md text-black rounded-md md:px-12 py-24">
                    <h1 className='text-2xl font-semibold font-merri'>{gridImage.name}</h1>
                    <p className='text-lg mt-4 mb-6 font-semibold'>${gridImage.price}</p>
                    <Link
                      to=""
                      className="bg-black text-white text-2xl mt-6 px-2 py-4"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-56 md:w-72 h-80 md:mx-2 lg:block hidden my-4"/>
          <div className="w-56 md:w-72 h-80 md:mx-2 lg:block hidden my-4"/>      
        </div>
      </div>
    </>
  );
};

export default Home;
