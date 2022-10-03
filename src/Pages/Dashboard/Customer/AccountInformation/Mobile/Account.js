import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../Context/AuthenticationContext";

const Account = () => {
  const { userData, setUserData, token } = useAuth();
  const userdata = [userData];
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

        let newData = localStorage.getItem("osazeUserObjecct");
        newData = JSON.stringify(userObject)
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
          Account Information
        </h1>
      </div>
      {userdata.map((data) => {
        return (
          <div className="px-6 py-4 md:grid grid-cols-2 gap-4" key={data.id}>
            <div className="border-2 border-gray-300 rounded-sm max-h-40 mb-6">
              <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2">
                <h2 className="w-11/12 text-lg font-semibold">
                  Account Details
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
              <div className="py-2 px-6  text-center">
                <div className="py-5">
                  <h3 className="text-lg font-semibold">
                    {data.firstName} {data.lastName}
                  </h3>
                  <p className="text-header text-sm mt-4">{data.email}</p>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded-sm min-h-40 mb-6">
              <div className=" border-b-2 border-gray-300 flex justify-center py-1 px-2">
                <h2 className="text-lg font-semibold text-center">
                  Delivery Address &amp; Contact Number
                </h2>
              </div>
              <div className="min-h-44">
                <div className="py-2 px-6  text-center">
                  <div className="py-5 flex items-center justify-center">
                    <div>
                      <p className="text-lg font-semibold">
                        {data.houseAddress}
                        {", "}
                        {data.city}
                        {", "}
                        {data.state}
                        {", "}
                        {data.country}
                      </p>
                      <p className="text-lg mt-3">{data.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
