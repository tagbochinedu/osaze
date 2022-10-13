import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../Context/AuthenticationContext";


const BodyProfile = () => {
  const { userData, setUserData, token } = useAuth();
  const userdata = [userData.bodyProfile];
  const [images, setImages] = useState([]);
  const [imageUpload, setImageUpload] = useState(undefined);
  const submitHandler = (e) => {
    e.preventDefault();
    setImages((prev) => [...prev, imageUpload]);
    setImageUpload(undefined);
    return;
  };

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const request = await fetch(
          "https://osazebackendapi.herokuapp.com/api/customer/getprofile",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const response = await request.json();
        const userObject = {
          firstName: response.user.userObject.firstName,
          lastName: response.user.userObject.lastName,
          email: response.user.userObject.email,
          phoneNumber: response.user.userObject.phoneNumber,
          country: response.user.userObject.country,
          state: response.user.userObject.state,
          city: response.user.userObject.city,
          houseAddress: response.user.userObject.houseAddress,
          bodyProfile: response.user.bodyProfile
          ? {
              bust: response.user.bodyProfile.bust,
              waist: response.user.bodyProfile.waist,
              hip: response.user.bodyProfile.hip,
              hipDip: response.user.bodyProfile.hipDip,
              frontWaistLength: response.user.bodyProfile.frontWaistLength,
              backWaistLength: response.user.bodyProfile.backWaistLength,
              armLength: response.user.bodyProfile.armLength,
              thigh: response.user.bodyProfile.thigh,
              ankle: response.user.bodyProfile.ankle,
              inseam: response.user.bodyProfile.inseam,
              outseam: response.user.bodyProfile.outseam,
              crotchDepth: response.user.bodyProfile.crotchDepth,
              shoulderLength: response.user.bodyProfile.shoulderLength,
            }
          : null,
          sketch: response.user.businessInfo
            ? response.user.businessInfo.sketch
            : null,
          sketchSkill: response.user.businessInfo
            ? response.user.businessInfo.sketchSkill
            : null,
          sew: response.user.businessInfo
            ? response.user.businessInfo.sew
            : null,
          sewSkill: response.user.businessInfo
            ? response.user.businessInfo.sewSkill
            : null,
          brandName: response.user.businessInfo
            ? response.user.businessInfo.brandName
            : null,
          brandLocation: response.user.businessInfo
            ? response.user.businessInfo.brandLocation
            : null,
          brandInfo: response.user.businessInfo
            ? response.user.businessInfo.brandInfo
            : null,
          url: response.user.businessInfo
            ? response.user.businessInfo.url
            : null,
          cart: response.user.cart ? response.user.cart : null,
          orders: response.user.orders ? response.user.orders : null,
          messages: response.user.messages ? response.user.messages : null,
          role: response.user.userObject.role,
          id: response.user.userId,
        };

        let newData = localStorage.getItem("osazeUserObject");
        newData = JSON.stringify(userObject);
        localStorage.setItem("osazeUserObject", newData);
        const userData = localStorage.getItem("osazeUserObject");
        setUserData(JSON.parse(userData));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchHandler();
  }, [token, setUserData]);

  return (
    <div className="w-full lg:rounded-lg shadow-md shadow-gray-200 border border-gray-400">
      <div className="flex justify-start items-center py-4 px-6 border-b border-gray-400 ">
        <Link to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-5 h-5 mr-3"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
        <h1 className="font-bold text-xl uppercase text-black">
          Body Profile
        </h1>
      </div>
      <div className="px-6 py-4">
        <div className="border-2 border-gray-300 rounded-sm">
          <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2">
            <h2 className="w-11/12 text-lg font-semibold">Measurements (cm)</h2>
            <Link to="/profile/body/edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="curentColor"
                className="w-6 h-6"
              >
                <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
              </svg>
            </Link>
          </div>
          {userdata.map((body) => {
            return (
              <div className="px-2 py-6" key="1">
                <div className="px-1 py-2 max-h-min mb-6">
                  <h2 className="text-center font-semibold">Upper Body</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 border-b border-gray-400">
                      Bust:<div>{body.bust}</div>
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Shoulder Length:<div>{body.shoulderLength}</div>{" "}
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Front Waist Length:
                      <div>{body.frontWaistLength}</div>
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Back Waist Length:
                      <div>{body.backWaistLength}</div>
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Arm Length:<div>{body.armLength}</div>{" "}
                    </div>
                  </div>
                </div>
                <div className="px-1 py-2">
                  <h2 className="text-center font-semibold">Lower Body</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 border-b border-gray-400">
                      Waist:<div>{body.waist}</div>
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Hip:<div>{body.hip}</div>{" "}
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Hip Dip:<div>{body.hipDip}</div>
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Thigh:<div>{body.thigh}</div>
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Ankle:<div>{body.ankle}</div>{" "}
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Inseam:<div>{body.inseam}</div>{" "}
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Outseam:<div>{body.outseam}</div>{" "}
                    </div>
                    <div className="p-2 border-b border-gray-400">
                      Crotch Depth:<div>{body.crotchDepth}</div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="border border-gray-300 rounded-sm mt-12">
            <div className="px-3 py-2 border-b border-gray-300">
              <h2 className="text-center font-semibold">Image Gallery</h2>
            </div>
            <div className="min-h-40">
              {images.map((img, index) => {
                return (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    className="w-2/12 h-auto"
                    alt="gallery"
                  />
                );
              })}
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm mt-12 py-6">
            <div>
              <div className="px-3">
                <h2 className="text-center font-semibold">Image Uploader</h2>
              </div>
              <form onSubmit={submitHandler}>
                <div className="mt-6 mb-12 min-h-40 px-6">
                  <div className="flex justify-end mb-2">
                    <input
                      type="reset"
                      className="rounded text-white px-4 py font-semibold bg-header active:bg-headerHover cursor-pointer"
                      value="Clear"
                      onClick={() => {
                        setImageUpload(undefined);
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full min-h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        {!imageUpload ? (
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
                            src={URL.createObjectURL(imageUpload)}
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
                          setImageUpload(e.target.files[0]);
                        }}
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
  );
};

export default BodyProfile;
