import { useState } from "react";
import { uid } from "uid";
import { useImageAuth } from "../../../Context/ImageContext";
import Card from "../../../Components/UI/Card";

const DesignerProductUpload = () => {
  const uuid = uid();
  const [images, setImages] = useState([]);
  const [imageValue, setImageValue] = useState("");
  const [imageValue2, setImageValue2] = useState("");
  const [fabric, setFabric] = useState("");
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

  const [imageDetails, setImageDetails] = useState({
    id: uuid,
    name: "",
    price: "",
    desc: "",
    image: undefined,
    sizes: [],
    customization: [],
    fabric: [],
    category: "",
  });
  const { setImageFullScreen, setImageSource, setImageID } = useImageAuth();

  const customizationChangeHandler = (e) => {
    if (e.target.checked === true) {
      setImageDetails({
        id: imageDetails.id,
        name: imageDetails.name,
        price: imageDetails.price,
        desc: imageDetails.desc,
        image: imageDetails.image,
        customization: [...imageDetails.customization, e.target.value],
        fabric: imageDetails.fabric,
        sizes: imageDetails.sizes,
      });
    } else {
      const removeCustomization = imageDetails.customization.filter((check) => {
        return e.target.value !== check;
      });
      setImageDetails({
        id: imageDetails.id,
        name: imageDetails.name,
        price: imageDetails.price,
        desc: imageDetails.desc,
        image: imageDetails.image,
        fabric: imageDetails.fabric,
        customization: removeCustomization,
        sizes: imageDetails.sizes,
      });
    }
  };
  const sizeChangeHandler = (e) => {
    if (e.target.checked === true) {
      setImageDetails({
        id: imageDetails.id,
        name: imageDetails.name,
        price: imageDetails.price,
        desc: imageDetails.desc,
        image: imageDetails.image,
        sizes: [...imageDetails.sizes, e.target.value],
        fabric: imageDetails.fabric,
        customization: imageDetails.customization,
      });
    } else {
      const removeSizes = imageDetails.sizes.filter((check) => {
        return e.target.value !== check;
      });
      setImageDetails({
        id: imageDetails.id,
        name: imageDetails.name,
        price: imageDetails.price,
        desc: imageDetails.desc,
        image: imageDetails.image,
        fabric: imageDetails.fabric,
        sizes: removeSizes,
        customization: imageDetails.customization,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setImageValue2("");
    console.log(imageDetails);
    setImages((prev) => [
      ...prev,
      { img: imageDetails.image, id: imageDetails.id },
    ]);
    setImageDetails({
      name: "",
      price: 0,
      desc: "",
      image: undefined,
      sizes: [],
      customization: [],
      fabric: [],
      category: "",
    });
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
              <div className="h-[150px] text-gray-200 flex justify-center items-center font-semibold text-xl">
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
                        setImageDetails({
                          id: imageDetails.id,
                          name: e.target.value,
                          price: imageDetails.price,
                          desc: imageDetails.desc,
                          image: imageDetails.image,
                          customization: imageDetails.customization,
                          fabric: imageDetails.fabric,
                          sizes: imageDetails.sizes,
                          category: imageDetails.category,
                        });
                      }}
                      value={imageDetails.name}
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
                        setImageDetails({
                          id: imageDetails.id,
                          name: imageDetails.name,
                          price: parseInt(e.target.value),
                          desc: imageDetails.desc,
                          image: imageDetails.image,
                          customization: imageDetails.customization,
                          fabric: imageDetails.fabric,
                          sizes: imageDetails.sizes,
                          category: imageDetails.category,
                        });
                      }}
                      value={imageDetails.price}
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
                      setImageDetails({
                        id: imageDetails.id,
                        name: imageDetails.name,
                        price: imageDetails.price,
                        desc: e.target.value,
                        image: imageDetails.image,
                        customization: imageDetails.customization,
                        fabric: imageDetails.fabric,
                        sizes: imageDetails.sizes,
                        category: imageDetails.category,
                      });
                    }}
                    value={imageDetails.desc}
                    required
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Item Description
                  </label>
                </div>
                <div className="flex justify-between">
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
                      required
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
                      onClick={(e) => {
                        setImageValue("");
                        setImageDetails({
                          id: imageDetails.id,
                          name: imageDetails.name,
                          price: imageDetails.price,
                          desc: imageDetails.desc,
                          image: imageDetails.image,
                          customization: imageDetails.customization,
                          colors: imageDetails.colors,
                          fabric: [...imageDetails.fabric, fabric],
                          category: imageDetails.category,
                        });

                        alert("fabric has been added");
                        setFabric("");
                      }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-2 h-2 text-red-700"
                    >
                      <path d="M417.1 368c-4.437 7.688-12.5 12-20.81 12c-4.062 0-8.188-1.031-11.97-3.219L248 297.6V456c0 13.25-10.75 24-23.1 24S200 469.3 200 456V297.6l-137.2 79.22C59 378.1 54.88 380 50.81 380c-8.312 0-16.37-4.312-20.81-12c-6.625-11.47-2.687-26.16 8.781-32.78L176 256l-137.2-79.22C27.31 170.2 23.38 155.5 29.1 144C36.59 132.6 51.28 128.5 62.78 135.2L200 214.4V56C200 42.75 210.8 32 224 32S248 42.75 248 56v158.4l137.2-79.22C396.8 128.5 411.4 132.6 417.1 144c6.625 11.47 2.688 26.16-8.781 32.78L271.1 256l137.2 79.22C420.7 341.8 424.6 356.5 417.1 368z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500">
                    Color or fabric can be added but not both{" "}
                  </span>
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
                      onChange={(e) => {
                        setImageDetails({
                          id: imageDetails.id,
                          name: imageDetails.name,
                          price: imageDetails.price,
                          desc: imageDetails.desc,
                          image: imageDetails.image,
                          customization: imageDetails.customization,
                          fabric: imageDetails.fabric,
                          colors: imageDetails.colors,
                          category: e.target.value,
                        });
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
                      onChange={(e) => {
                        setImageDetails({
                          id: imageDetails.id,
                          name: imageDetails.name,
                          price: imageDetails.price,
                          desc: imageDetails.desc,
                          image: imageDetails.image,
                          customization: imageDetails.customization,
                          fabric: imageDetails.fabric,
                          colors: imageDetails.colors,
                          category: e.target.value,
                        });
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
                      onChange={(e) => {
                        setImageDetails({
                          id: imageDetails.id,
                          name: imageDetails.name,
                          price: imageDetails.price,
                          desc: imageDetails.desc,
                          image: imageDetails.image,
                          customization: imageDetails.customization,
                          fabric: imageDetails.fabric,
                          colors: imageDetails.colors,
                          category: e.target.value,
                        });
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
                      setImageDetails({
                        id: imageDetails.id,
                        name: imageDetails.name,
                        price: imageDetails.price,
                        desc: imageDetails.desc,
                        image: undefined,
                        colors: imageDetails.colors,
                        customization: imageDetails.customization,
                        fabric: imageDetails.fabric,
                        category: imageDetails.category,
                      });
                    }}
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full min-h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      {!imageDetails.image ? (
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
                          src={URL.createObjectURL(imageDetails.image)}
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
                        setImageDetails({
                          id: imageDetails.id,
                          name: imageDetails.name,
                          price: imageDetails.price,
                          desc: imageDetails.desc,
                          image: e.target.files[0],
                          colors: imageDetails.colors,
                          customization: imageDetails.customization,
                          fabric: imageDetails.fabric,
                          category: imageDetails.category,
                        });
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
