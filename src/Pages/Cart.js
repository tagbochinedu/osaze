import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthenticationContext";

const Cart = () => {
  const { userData, setUserData, token } = useAuth();
  const [cartEmpty, setCartEmpty] = useState(true);
  const [cartNumber] = useState(userData.cart.length);

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
          messages: response.user.messages ? response.user.messages : null,
          role: response.user.userObject.role,
          id: response.user.userId,
        };

        let newData = JSON.stringify(userObject);
        localStorage.setItem("osazeUserObject", newData);
        const userData = localStorage.getItem("osazeUserObject");
        setUserData(JSON.parse(userData));

        if (cartNumber > 0) {
          setCartEmpty(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchHandler();
  }, [token, setUserData, cartNumber]);

  return (
    <>
      <div className="pb-12 text-center border mx-6 md:mx-16 rounded-lg shadow-md shadow-gray-200 mt-4 mb-6">
        <div className="mb-12 border-b-2 border-gray-200 p-4">
          <h1 className="text-xl font-bold text-start text-gray-800 font-merri">
            Cart ({cartNumber})
          </h1>
        </div>
        {cartEmpty ? (
          <div className=" px-12">
            <div className="p-4 bg-gray-200 inline-block rounded-full my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className="w-16 h-16 text-cart mx-auto"
              >
                <path d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z" />
              </svg>
            </div>
            <h1 className="text-3xl text-header font-semibold font-julius">
              Your Cart Is Empty
            </h1>
            <p className="text-lg text-gray-800 font-semibold font-merric mt-2 mb-3">
              Browse our categories for something you may like
            </p>
            <Link
              to="/"
              className="bg-header hover:bg-headerHover hover:font-semibold rounded-sm text-white font-merri px-6 py-3 text-sm transition-all ease-in-out"
            >
              Keep Shopping
            </Link>
          </div>
        ) : (
          userData.cart.map((cartItem) => {
            return (
              <div className="flex justify-between" key={cartItem.id}>
                <div className="w-2/12"></div>
                <div className="w-7/12">
                  <h1>hello</h1>
                </div>
                <div className="w-3/12"></div>
              </div>
            );
          })
        )}
      </div>
      <div className="pb-12 text-center border mx-6 md:mx-16 rounded-lg shadow-md shadow-gray-200 mt-4 mb-6">
        <div className="mb-12 border-b-2 border-gray-200 p-4">
          <h1 className="text-xl font-bold text-start text-gray-800 font-merri">
            Saved Items
          </h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
