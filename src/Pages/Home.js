import { Link } from "react-router-dom";
import { ImagePreview, ImageGrid } from "../Resources/Image";

import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
    <Carousel/>
      <div
        className="text-xl text-black flex justify-around px-1.5 md:px-6 flex-wrap py-10"
        id="Collection"
      >
        
        {ImagePreview.map((image) => {
          return (
            <div
              className=" p-2 md:p-4 bg-white border-2 border-black my-4 mx-auto hover:scale-110 hover:rounded-md transition-all ease-in-out duration-300"
              key={image.id}
            >
              <img className="h-40 md:h-64 w-36 md:w-60" src={image.url} alt="preview" />
              <div className="text-center my-2">
                <h4 className="font-bold text-center mb-6 font-merri">{image.name}</h4>
                <Link to="" className="bg-black text-white mt-6 px-1.5 py-1.5">
                  Shop
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-1.5 md:px-6 py-10">
        <h4 className='p-2 md:p-4 text-4xl font-bold text-center mb-6 font-julius'>Customized Clothing - Coming Soon</h4>
        <div className='flex flex-wrap justify-around'>
          {ImageGrid.map((gridImage) => {
            return (
              <div className="flip-card w-44 md:w-60 h-80  my-4 mx-auto hover:rounded-sm" key={gridImage.id}>
                <div className="flip-card-inner h-full w-full relative text-center rounded-sm">
                  <div className="flip-card-front absolute w-full h-full rounded-sm text-black">
                    <img
                      src={gridImage.url}
                      alt={gridImage.name}
                      className="w-full h-full rounded-sm"
                    />
                  </div>
                  <div className="flip-card-back absolute w-full h-full text-black rounded-sm md:px-12 py-24">
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
          <div className="w-44 md:w-60 h-80 my-4 mx-auto lg:block hidden"/>
          <div className="w-44 md:w-60 h-80 my-4 mx-auto lg:block hidden"/>      
        </div>
      </div>
    </>
  );
};

export default Home;
