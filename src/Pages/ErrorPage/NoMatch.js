import React from "react";

const NoMatch = () => {
  return (
    <div className="h-[81vh] text-xl flex justify-center items-center font-merri bg-gradient-to-r from-header to-headerHover">
      <div className="text-center">
        <h1 className="text-7xl text-red-700 mb-8">
          Error <span className="font-bold">404</span>
        </h1>
        <h3 className='text-white text-2xl'>Page Not Found</h3>
      </div>
    </div>
  );
};

export default NoMatch;
