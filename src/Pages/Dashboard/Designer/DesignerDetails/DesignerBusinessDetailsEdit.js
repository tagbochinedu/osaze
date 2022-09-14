import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthenticationContext";
import useFetch from "../../../../CustomHooks/useFetch";

import Card from "../../../../Components/UI/Card";

const DesignerBusinessDetailsEdit = () => {
  const { fetchHandler } = useFetch();
  const { userData,token } = useAuth();
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState(userData.brandName);
  const [brandLocation, setBrandLocation] = useState(userData.brandLocation);
  const [brandInfo, setBrandInfo] = useState(userData.brandInfo);

  const submitHander = async (e) => {
    e.preventDefault();
    const editDetails = {
      brandName: brandName,
      brandLocation: brandLocation,
      brandInfo: brandInfo,
    };
    try {
      const endpoint =
        "https://osazeapi.herokuapp.com/api/designer/updatebusinessinfo";
      const requestConfiguration = {
        method: "PATCH",
        headers: { "Content-type": "application/json", 'Authorization': `Bearer ${token}`, },
        body: editDetails,
      };
      const response = await fetchHandler(endpoint, requestConfiguration);
      console.log('hello');
      if (response) {
        navigate("/profile/designer");
      } else {
        console.log("e no work oh");
      }
    } catch {}
  };
  return (
    <Card pageTitle="Edit Business Details" className="min-h-fit">
      <form className=" px-6 py-10 relative h-full" onSubmit={submitHander}>
        <>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="brand"
              className="block py-2.5 px-0 font-merri w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required
              value={brandName}
              onChange={(e) => {
                setBrandName(e.target.value);
              }}
            />
            <label
              htmlFor="brand"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Name of Brand
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="brand_location"
              className="block py-2.5 px-0 font-merri w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required
              value={brandLocation}
              onChange={(e) => {
                setBrandLocation(e.target.value);
              }}
            />
            <label
              htmlFor="brand_location"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Where is your business located?
            </label>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-500"
            >
              Tell us about your brand
            </label>
            <textarea
              className="block py-2.5 px-0 font-merri w-full text-md text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              rows="3"
              placeholder="Your message"
              value={brandInfo}
              onChange={(e) => {
                setBrandInfo(e.target.value);
              }}
            />
          </div>
        </>

        <button
          type="submit"
          className="py-2 z-20 w-full bg-header text-white font-semibold rounded-md active:bg-headerHover"
        >
          Submit
        </button>
      </form>
    </Card>
  );
};

export default DesignerBusinessDetailsEdit;
