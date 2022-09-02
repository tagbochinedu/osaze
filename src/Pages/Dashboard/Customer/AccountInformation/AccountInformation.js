import { Link } from "react-router-dom";
import { DUMMY_DATA } from "../../../../DummyData";

import Card from "../../../../Components/UI/Card";

const AccountInformation = () => {
  return (
    <Card className="" pageTitle="Account Information">
      <div className="px-6 py-4 grid grid-cols-2 gap-4 grid-rows-2 ">
        <div className="border-2 border-border-gray-300 rounded-sm max-h-40">
          <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2 ">
            <h2 className="w-11/12 text-lg font-semibold">Account Details</h2>
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
          <div className="py-2 px-6">
            {DUMMY_DATA.map((data) => {
              return (
                <div className="py-5" key={data.signupData.firstName}>
                  <h3 className="text-lg font-semibold">
                    {data.signupData.firstName} {data.signupData.lastName}
                  </h3>
                  <p className="text-header text-sm mt-4">
                    {data.signupData.eMail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-sm">
          <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2">
            <h2 className="w-11/12 text-lg font-semibold">
              Delivery Addresses
            </h2>
          </div>
          <div className="h-32">
            <form className="py-2 px-6">
              {DUMMY_DATA.map((address) => {
                return (
                  <div className="py-5 flex items-center">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-headerHover focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value={address.signupData.address}
                      id="flexCheckDefault"
                    />
                    <div>
                      <label
                        className="form-check-label inline-block text-lg font-semibold"
                        htmlFor="flexCheckDefault"
                      >
                        {address.signupData.address}
                      </label>
                      <p>{address.signupData.phoneNumber}</p>
                    </div>
                  </div>
                );
              })}
            </form>
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-sm">
          <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2">
            <h2 className="w-11/12 text-lg font-semibold">Account Details3</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="curentColor"
              className="w-6 h-6"
            >
              <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
            </svg>
          </div>
          <div className="h-48"></div>
        </div>
        <div className="border-2 border-gray-300 rounded-sm max-h-16">
          <div className=" border-b-2 border-gray-300 flex justify-between py-1 px-2">
            <h2 className="w-11/12 text-lg font-semibold">Account Details4</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="curentColor"
              className="w-6 h-6"
            >
              <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
            </svg>
          </div>
          <div className=""></div>
        </div>
      </div>
    </Card>
  );
};

export default AccountInformation;
