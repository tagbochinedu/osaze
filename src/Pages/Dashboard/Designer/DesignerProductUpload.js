import { useState, useEffect } from "react";
import { useImageAuth } from "../../../Context/ImageContext";
import Card from "../../../Components/UI/Card";

const DesignerProductUpload = () => {
  const { setImageFullScreen, setImageSource, setImageID } = useImageAuth();
  const [images, setImages] = useState([]);

  //product upload state
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [fabric, setFabric] = useState("");
  const [fabricArray, setFabricArray] = useState([]);
  const [customization, setCustomization] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [imageValue2, setImageValue2] = useState("");
  const [imageDetails, setImageDetails] = useState({
    name: "",
    price: "",
    desc: "",
    image: undefined,
    sizes: [],
    customization: [],
    fabric: [],
    category: "",
  });

  //state for clearing form
  const [sizeChecked1, setSizeChecked1] = useState(false);
  const [sizeChecked2, setSizeChecked2] = useState(false);
  const [sizeChecked3, setSizeChecked3] = useState(false);
  const [sizeChecked4, setSizeChecked4] = useState(false);
  const [sizeChecked5, setSizeChecked5] = useState(false);
  const [sizeChecked6, setSizeChecked6] = useState(false);
  const [sizeChecked7, setSizeChecked7] = useState(false);
  const [customChecked1, setCustomChecked1] = useState(false);
  const [customChecked2, setCustomChecked2] = useState(false);
  const [customChecked3, setCustomChecked3] = useState(false);
  const [customChecked4, setCustomChecked4] = useState(false);
  const [customChecked5, setCustomChecked5] = useState(false);
  const [customChecked6, setCustomChecked6] = useState(false);
  const [customChecked7, setCustomChecked7] = useState(false);

  useEffect(() => {
    console.log(imageDetails);
  }, [imageDetails]);

  //handler functions
  const customizationChangeHandler = (e) => {
    if (e.target.checked === true) {
      setCustomization((prev) => [...prev, e.target.value]);
    } else {
      const removeCustomization = customization.filter((check) => {
        return e.target.value !== check;
      });
      setCustomization(removeCustomization);
    }
  };
  const sizeChangeHandler = (e) => {
    if (e.target.checked === true) {
      setSizes((prev) => [...prev, e.target.value]);
    } else {
      const removeSizes = sizes.filter((size) => {
        return e.target.value !== size;
      });
      setSizes(removeSizes);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    setImages((prev) => [...prev, image]);
    setImageDetails({
      name: name,
      price: price,
      desc: desc,
      image: image,
      sizes: sizes,
      customization: customization,
      fabric: fabricArray,
      category: category,
    });
    setName("");
    setPrice(0);
    setDesc("");
    setImage("");
    setImageValue2("");
    setSizeChecked1(false);
    setSizeChecked2(false);
    setSizeChecked3(false);
    setSizeChecked4(false);
    setSizeChecked5(false);
    setSizeChecked6(false);
    setSizeChecked7(false);
    setCustomChecked1(false);
    setCustomChecked2(false);
    setCustomChecked3(false);
    setCustomChecked4(false);
    setCustomChecked5(false);
    setCustomChecked6(false);
    setCustomChecked7(false);
    setCategory("");
  };
  return (
    <Card pageTitle="Product Uploader">
      {" "}
      <div className="px-8 py-2">
        <div className="rounded-sm mt-6">
          <div className="px-3 py-2">
            <h2 className="text-center font-semibold">Product Gallery</h2>
          </div>
          <div className="min-h-[150px]">
            {images.length === 0 ? (
              <div className="h-[150px] text-gray-300 flex justify-center items-center font-semibold text-xl">
                <h2>No products have been uploaded yet</h2>
              </div>
            ) : (
              <ul className="overflow-x-auto whitespace-nowrap ... scrollbar-hide w-full">
                {images.map((img, index) => {
                  return (
                    <li
                      className="w-3/12 text-center inline-block md:border-l-2 md:border-white my-0.5 mx-2.5"
                      key={index}
                    >
                      <img
                        src={URL.createObjectURL(img.img)}
                        className="h-auto max-h-48 mx-auto"
                        alt="gallery"
                        onClick={() => {
                          setImageFullScreen(true);
                          setImageSource(img.img);
                          setImageID(img.id);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="rounded-sm mt-12 py-6">
          <div className="border border-gray-300 rounded-sm py-6">
            <div className="px-3">
              <h2 className="text-center font-semibold">Product Upload Form</h2>
            </div>
            <form onSubmit={submitHandler}>
              <div className="mt-6 mb-12 min-h-40 px-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative z-0 mb-6">
                    <input
                      type="text"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                      placeholder=" "
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      required
                    />
                    <label
                      htmlFor="floating_standard"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Item Name
                    </label>
                  </div>
                  <div className="relative z-0 mb-6">
                    <input
                      type="number"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                      placeholder=" "
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      value={price}
                      required
                    />
                    <label
                      htmlFor="floating_standard"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Item Price
                    </label>
                  </div>
                </div>
                <div className="relative z-0 mb-6">
                  <input
                    type="text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                    placeholder=" "
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    value={desc}
                    required
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Item Description
                  </label>
                </div>
                <div className="flex justify-between mb-6">
                  <div className="relative z-0 mb-2 flex w-6/12 ml-3">
                    <input
                      type="file"
                      className="block py-2.5 px-0 w-10/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                      placeholder=" "
                      accept=".jpeg,.jpg,.png"
                      value={imageValue}
                      onChange={(e) => {
                        setFabric(e.target.files[0]);
                        setImageValue(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="floating_standard"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Fabric
                    </label>
                    <button
                      type="button"
                      className="rounded text-white w-2/12 px-4 py-1 font-semibold bg-header active:bg-headerHover cursor-pointer ml-3"
                      onClick={() => {
                        setImageValue("");
                        setFabricArray((prev) => [...prev, fabric]);
                        alert("fabric has been added");
                        setFabric("");
                      }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="mb-3 font-merri uppercase text-gray-500">
                    Customization
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="Fit To Size"
                          id="flexCheckDefault1"
                          checked={customChecked1}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked1(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault1"
                        >
                          Fit To Size
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="No Sleeves"
                          id="flexCheckDefault2"
                          checked={customChecked2}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked2(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault2"
                        >
                          No Sleeves
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="Short Sleeves"
                          id="flexCheckDefault3"
                          checked={customChecked3}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked3(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault3"
                        >
                          Short Sleeves
                        </label>
                      </div>
                    </div>
                    <div className="form-check ">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="Medium Sleeves - Elbow Length"
                          id="flexCheckDefault4"
                          checked={customChecked4}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked4(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault4"
                        >
                          Medium Sleeves - Elbow Length
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="Long Sleeves - Wrist Length"
                          id="flexCheckDefault5"
                          checked={customChecked5}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked5(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault5"
                        >
                          Long Sleeves - Wrist Length
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="Pleated Skirt Base"
                          id="flexCheckDefault6"
                          checked={customChecked6}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked6(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault6"
                        >
                          Pleated Skirt Base
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="Knee Length"
                          id="flexCheckDefault7"
                          checked={customChecked7}
                          onChange={(e) => {
                            customizationChangeHandler(e);
                            setCustomChecked7(e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-500"
                          htmlFor="flexCheckDefault7"
                        >
                          Knee Length
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="mb-3 font-merri uppercase text-gray-500">
                    Available Sizes
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="XS"
                          checked={sizeChecked1}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked1(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          XS
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="S"
                          id="flexCheckDefault2"
                          checked={sizeChecked2}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked2(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          S
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="MD"
                          checked={sizeChecked3}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked3(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          MD
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="LG"
                          checked={sizeChecked4}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked4(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          LG
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="XL"
                          checked={sizeChecked5}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked5(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          XL
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="XXL"
                          checked={sizeChecked6}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked6(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          XXL
                        </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="my-2">
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value="custom"
                          checked={sizeChecked7}
                          onChange={(e) => {
                            sizeChangeHandler(e);
                            setSizeChecked7(e.target.checked);
                          }}
                        />
                        <label className="form-check-label inline-block text-gray-500">
                          Custom
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="mb-3 font-merri text-gray-500 uppercase">
                    Category
                  </h2>
                  <div className="form-check my-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-headerHover checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="category"
                      value="men"
                      id="men"
                      required
                      checked={category === "men"}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label inline-block text-gray-500"
                      htmlFor="men"
                    >
                      Men
                    </label>
                  </div>
                  <div className="form-check my-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="category"
                      value="women"
                      id="women"
                      checked={category === "women"}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label inline-block text-gray-500"
                      htmlFor="women"
                    >
                      Women
                    </label>
                  </div>
                  <div className="form-check my-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="category"
                      value="accessories"
                      id="accesories"
                      checked={category === "accessories"}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label inline-block text-gray-500"
                      htmlFor="accessories"
                    >
                      Accessories
                    </label>
                  </div>
                </div>
                <div className="flex justify-end mb-2">
                  <input
                    type="reset"
                    className="rounded text-white px-4 py font-semibold bg-header active:bg-headerHover cursor-pointer"
                    value="Clear"
                    onClick={() => {
                      setImage("");
                    }}
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full min-h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      {!image ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a file
                          </p>
                        </>
                      ) : (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="fullbody"
                          className="w-3/12 h-auto"
                        />
                      )}
                    </div>
                    <input
                      value={imageValue2}
                      type="file"
                      className="opacity-0"
                      accept=".jpeg,.jpg,.png"
                      onChange={(e) => {
                        setImageValue2(e.target.value);
                        setImage(e.target.files[0]);
                      }}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="px-6 ">
                <button
                  type="submit"
                  className="w-full bg-header text-white font-semibold py-2 rounded active:bg-headerHover"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DesignerProductUpload;
