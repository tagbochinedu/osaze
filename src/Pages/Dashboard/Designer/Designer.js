import { useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_DATA4 } from "../../../DummyData";
import { useImageAuth } from "../../../Context/ImageContext";
import Card from "../../../Components/UI/Card";

const Designer = () => {
  const [images, setImages] = useState([]);
  const [imageDetails, setImageDetails] = useState({
    name: "",
    price: "",
    desc: "",
    image: undefined,
  });
  const { setImageFullScreen, setImageSource } = useImageAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(imageDetails);
    setImages((prev) => [...prev, imageDetails.image]);
    setImageDetails({
      name: "",
      price: 0,
      desc: "",
      image: undefined,
    });
  };

  return (
    <Card pageTitle="Designer">
      <div className="px-6 py-4">
        <div className="border-2 border-border-gray-300 rounded-sm max-h-40 mb-6">
          <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2 ">
            <h2 className="w-11/12 text-lg font-semibold">
              Account Information
            </h2>
            <Link to="/profile/account/edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="curentColor"
                className="w-6 h-6 text-header"
              >
                <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
              </svg>
            </Link>
          </div>
          <div className="py-2 px-6 flex justify-center">
            {DUMMY_DATA4.map((data) => {
              return (
                <div className="py-5" key={data.accountInformation.firstName}>
                  <h3 className="text-lg font-semibold">
                    {data.accountInformation.firstName}{" "}
                    {data.accountInformation.lastName}
                  </h3>
                  <p className="text-header text-sm mt-4">
                    {data.accountInformation.eMail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-border-gray-300 rounded-sm max-h-40 mb-6">
          <div className=" border-b-2 border-gray-300 py-1 px-2 ">
            <h2 className="w-11/12 text-lg font-semibold">
              Business Information
            </h2>
          </div>
          <div className="py-2 px-6 flex justify-center">
            {DUMMY_DATA4.map((data) => {
              return (
                <div className="py-5" key={data.accountInformation.firstName}>
                  <h3 className="text-lg font-semibold">
                    {data.accountInformation.firstName}{" "}
                    {data.accountInformation.lastName}
                  </h3>
                  <p className="text-header text-sm mt-4">
                    {data.accountInformation.eMail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-border-gray-300 rounded-sm mb-6">
          <div className=" border-b-2 border-gray-300">
            <h2 className="w-11/12 text-lg font-semibold">
              Contact Information
            </h2>
          </div>
          <div className="py-2 px-6 flex justify-center">
            {DUMMY_DATA4.map((data) => {
              return (
                <div
                  className="py-5 text-lg"
                  key={data.contactInformation.address}
                >
                  <h3 className="text-lg">
                    Country:{" "}
                    <span className="font-semibold">
                      {data.contactInformation.address.country}
                    </span>
                  </h3>
                  <h3>
                    State/Province:{" "}
                    <span className="font-semibold">
                      {data.contactInformation.address.state}
                    </span>
                  </h3>
                  <h3>
                    City:{" "}
                    <span className="font-semibold">
                      {data.contactInformation.address.city}
                    </span>
                  </h3>
                  <h3>
                    House Address:{" "}
                    <span className="font-semibold">
                      {data.contactInformation.address.houseAddress}
                    </span>
                  </h3>
                  <h3>Phone Number: {data.contactInformation.phoneNumber}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-border-gray-300 rounded-sm mb-6 py-2 px-6">
          <div className=" border-b-2 border-gray-300 py-1 px-2 ">
            <h2 className="w-11/12 text-lg font-semibold">Product Upload</h2>
          </div>
          <div>
            <div className="rounded-sm mt-6">
              <div className="px-3 py-2">
                <h2 className="text-center font-semibold">Product Gallery</h2>
              </div>
              <div className="min-h-40">
                <ul className="overflow-x-auto whitespace-nowrap ... scrollbar-hide w-full">
                  {images.map((img, index) => {
                    return (
                      <li
                        className="w-3/12 text-center inline-block md:border-l-2 md:border-white my-0.5 mx-2.5"
                        key={index}
                      >
                        <img
                          src={URL.createObjectURL(img)}
                          className="h-auto max-h-48 mx-auto"
                          alt="gallery"
                          onClick={() => {
                            setImageFullScreen(true);
                            setImageSource(img);
                          }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="rounded-sm mt-12 py-6">
              <div className="border border-gray-300 rounded-sm py-6">
                <div className="px-3">
                  <h2 className="text-center font-semibold">
                    Product Upload Forum
                  </h2>
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
                              name: e.target.value,
                              price: imageDetails.price,
                              desc: imageDetails.desc,
                              image: imageDetails.image,
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
                          type="text"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                          placeholder=" "
                          onChange={(e) => {
                            setImageDetails({
                              name: imageDetails.name,
                              price: parseInt(e.target.value),
                              desc: imageDetails.desc,
                              image: imageDetails.image,
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
                            name: imageDetails.name,
                            price: imageDetails.price,
                            desc: e.target.value,
                            image: imageDetails.image,
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
                    <div className="flex justify-end mb-2">
                      <input
                        type="reset"
                        className="rounded text-white px-4 py font-semibold bg-header active:bg-headerHover cursor-pointer"
                        value="Clear"
                        onClick={() => {
                          setImageDetails({
                            name: imageDetails.name,
                            price: imageDetails.price,
                            desc: imageDetails.desc,
                            image: undefined,
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
                          type="file"
                          className="opacity-0"
                          accept=".jpeg,.jpg,.png"
                          onChange={(e) => {
                            setImageDetails({
                              name: imageDetails.name,
                              price: imageDetails.price,
                              desc: imageDetails.desc,
                              image: e.target.files[0],
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
        </div>
      </div>
    </Card>
  );
};

export default Designer;
