import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DUMMY_DATA2 } from "../../../DummyData";
import { XIcon } from "@heroicons/react/solid";
import { ImageGrid } from "../../../Resources/Image";

const MaleProducts = () => {
  const navigate = useNavigate();
  const [designerList, setDesignerList] = useState(DUMMY_DATA2);
  const [menProducts, setMenProducts] = useState(ImageGrid);
  const [width, setWidth] = useState(window.innerWidth);

  //SETTING UP THE FILTER
  const [filter, setFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState({
    designers: [],
    category: [],
    range: 500000,
  });

  const designerChangeHandler = (e) => {
    if (e.target.checked === true) {
      setFilterProducts({
        designers: [...filterProducts.designers, e.target.value],
        category: [...filterProducts.category],
        range: filterProducts.range,
      });
    } else {
      const removeDesigner = filterProducts.designers.filter((check) => {
        return e.target.value !== check;
      });
      setFilterProducts({
        designers: removeDesigner,
        category: [...filterProducts.category],
        range: filterProducts.range,
      });
    }
  };
  const categoryChangeHandler = (e) => {
    if (e.target.checked === true) {
      setFilterProducts({
        category: [...filterProducts.category, e.target.value],
        designers: [...filterProducts.designers],
        range: filterProducts.range,
      });
    } else {
      const removeCategory = filterProducts.category.filter((check) => {
        return e.target.value !== check;
      });
      setFilterProducts({
        category: removeCategory,
        designers: [...filterProducts.designers],
        range: filterProducts.range,
      });
    }
  };
  const priceRangeChangeHandler = (e) => {
    setFilterProducts({
      designers: [...filterProducts.designers],
      category: [...filterProducts.category],
      range: parseInt(e.target.value),
    });
  };

  //IMPLEMENTING THE FILTER
  const filterHandler = () => {
    const filterItems = ImageGrid;
    let filteredProducts = [];
    if (filterProducts.designers.length === 0) {
      filteredProducts = filterItems;
    } else {
      filteredProducts = filterItems.filter((item) => {
        return filterProducts.designers.some((newitem) => {
          return item.designer === newitem;
        });
      });
    }
    const filteredProducts1 = filteredProducts.filter((item) => {
      if (filterProducts.category.length === 0) {
        return filteredProducts;
      } else {
        return filterProducts.category.some((newitem) => {
          return item.type === newitem;
        });
      }
    });
    const finalStep = filteredProducts1.filter((item) => {
      return item.price <= filterProducts.range;
    });
    setMenProducts(finalStep);
  };

  //Screen-Resize Functionality
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  //Designer-Filter Functionality
  const filterChangeHandler = (e) => {
    const filteredDesigners = DUMMY_DATA2.filter((filtered) => {
      if (e.target.value === "") {
        return filtered;
      } else {
        return filtered.name.includes(e.target.value);
      }
    });
    setDesignerList(filteredDesigners);
  };

  return (
    <>
      <div className="fixed rounded-full p-2 z-10 bg-black max-w-max xl:hidden text-center mt-6 top-10 lg:top-28 left-2 shadow-md shadow-gray-300 cursor-pointer">
        <button
          onClick={() => {
            setFilter(true);
          }}
          className="flex justify-center items-center "
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center lg:justify-between">
        {width > 1024 ? (
          <div className="w-3/12 bg-black text-white hidden xl:block font-merri">
            <div className="border-b border-white py-4 px-6">
              <h2 className="mb-2 ml-1 font-julius">Designer</h2>
              <div className="flex justify-center mb-3">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                  <input
                    type="search"
                    className="form-control relative w-10/12 flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-black bg-white transition ease-in-out m-0 focus:text-black focus:bg-white rounded-l-3xl outline-0"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    onChange={filterChangeHandler}
                  />
                  <button
                    className="btn inline-block px- py-2.5 w-2/12 bg-header text-white font-medium text-xs leading-tight uppercase shadow-md active:bg-headerHover transition duration-150 ease-in-out flex items-center rounded-r-3xl"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4 mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <form className="overflow-y-scroll max-h-28 scrollbar">
                {" "}
                {designerList.map((designer) => {
                  return (
                    <div className="form-check text-white" key={designer.key}>
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value={designer.name}
                          id="flexCheckDefault"
                          onChange={designerChangeHandler}
                        />
                        <label
                          className="form-check-label inline-block"
                          htmlFor="flexCheckDefault"
                        >
                          {designer.name}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </form>
            </div>
            <div className="border-b border-white py-4 px-6">
              <h2 className="mb-2 ml-1 font-julius text-white">CATEGORY</h2>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Long Sleeve Shirts"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Long Sleeve Shirts
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Short Sleeve Shirts"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Short Sleeve Shirts
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Traditional Wears"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Traditional Wears
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Suits"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Suits
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Trousers"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Trousers
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Shorts"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Shorts
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b border-white py-4 px-6">
              <h2 className="mb-2 ml-1 font-julius text-white">Price Range</h2>
              <input
                id="default-range"
                type="range"
                min="150"
                max="1000000"
                value={filterProducts.range}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={priceRangeChangeHandler}
              />
              <div className="flex justify-center mt-4">
                <span className="mx-2 border border-white py-1 px-7 rounded">
                  150
                </span>
                -
                <input
                  type="number"
                  min="150"
                  max="1000000"
                  value={filterProducts.range}
                  onChange={priceRangeChangeHandler}
                  className="mx-2 border border-white bg-black text-white text-center number"
                />
              </div>
            </div>
            <button onClick={filterHandler}>button</button>
          </div>
        ) : (
          <div
            className={`${"w-full bg-black block xl:hidden overflow-y-scroll text-white z-20 font-merri fixed py-16 z-20 top-0 bottom-0 transition-all ease-in-out duration-1000"} ${
              filter ? "left-0 opacity-100" : "-left-[1000px] opacity-0"
            }`}
          >
            <XIcon
              className="text-white h-6 w-6 ml-4 mb-4 cursor-pointer"
              onClick={() => {
                setFilter(false);
              }}
            />
            <div className="border-b border-white py-4 px-6 max-w-xl mx-auto">
              <h2 className="mb-2 ml-1 font-julius">Designer</h2>
              <div className="flex justify-center mb-3">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                  <input
                    type="search"
                    className="form-control relative w-10/12 flex-auto min-w-0 text-sm block px-3 py-1.5 text-base font-normal text-black bg-white transition ease-in-out m-0 focus:text-black focus:bg-white outline-0"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    onChange={filterChangeHandler}
                  />
                  <button
                    className="btn inline-block px- py-2.5 w-2/12 bg-header text-white font-medium text-xs leading-tight uppercase shadow-md active:bg-headerHover transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4 mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <form className="overflow-y-scroll max-h-36 scrollbar">
                {" "}
                {designerList.map((designer) => {
                  return (
                    <div
                      className="form-check text-white my-2"
                      key={designer.key}
                    >
                      <input
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value={designer.name}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label inline-block"
                        htmlFor="flexCheckDefault"
                      >
                        {designer.name}
                      </label>
                    </div>
                  );
                })}
              </form>
            </div>
            <div className="border-b border-white py-4 px-6  max-w-xl mx-auto">
              <h2 className="mb-2 ml-1 font-julius text-white">CATEGORY</h2>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Long Sleeve Shirts"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Long Sleeve Shirts
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Short Sleeve Shirts"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Short Sleeve Shirts
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Traditional Wears"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Traditional Wears
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Suits"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Suits
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Trousers"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Trousers
                  </label>
                </div>
              </div>
              <div className="form-check text-white">
                <div className="my-2">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value="Shorts"
                    id="flexCheckDefault"
                    onChange={categoryChangeHandler}
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="flexCheckDefault"
                  >
                    Shorts
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b border-white py-4 px-6  max-w-xl mx-auto">
              <h2 className="mb-2 ml-1 font-julius text-white">Price Range</h2>
              <input
                id="default-range"
                type="range"
                min="150"
                max="1000000"
                value={filterProducts.range}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={priceRangeChangeHandler}
              />
              <div className="flex justify-center mt-4">
                <span className="mx-2 border border-white py-1 px-7 rounded">
                  150
                </span>
                -
                <input
                  type="number"
                  min="150"
                  max="1000000"
                  value={filterProducts.range}
                  onChange={priceRangeChangeHandler}
                  className="mx-2 border border-white bg-black text-white text-center number"
                />
              </div>
            </div>
          </div>
        )}

        <div className="w-full xl:w-9/12 w-full justify-items-center text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 py-4">
          {" "}
          {menProducts.map((gridImage) => {
            return (
              <div
                className="flip-card w-44 md:w-56 h-80 mx-1 md:mx-2  my-0 md:my-4 hover:rounded-sm cursor-pointer"
                key={gridImage.id}
                onClick={() => {
                  navigate(`/men/${gridImage.id}`, {
                    state: { name: "hello" },
                  });
                }}
              >
                <div className="flip-card-inner h-full w-full relative text-center rounded-sm">
                  <div className="flip-card-front absolute w-full h-full rounded-md text-black">
                    <img
                      src={gridImage.url}
                      alt={gridImage.name}
                      className="w-full h-full rounded-sm"
                    />
                  </div>
                  <div
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${gridImage.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "cover",
                    }}
                    className="flip-card-back bg-cover absolute w-full h-full rounded-md text-white font-merri rounded-sm md:px-8 py-12"
                  >
                    <h1 className="text-2xl font-semibold">{gridImage.name}</h1>
                    <p className="text-lg mt-4 mb-4 font-semibold">
                      N{gridImage.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MaleProducts;
