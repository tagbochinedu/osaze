import React from "react";

const Unauthorized = () => {
  return (
    <div className="h-[81vh] text-xl flex justify-center items-center font-merri bg-gradient-to-r from-header to-headerHover">
      <div className="text-center">
        <h1 className="text-7xl text-red-700 mb-8">
          Error <span className="font-bold">403</span>
        </h1>
        <h3 className='text-white text-2xl'>You Are Not Authorized To Visit This Page</h3>
      </div>
    </div>
  );
};

export default Unauthorized;
