import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../Context/AuthenticationContext";
import useFetch from "../../../../../CustomHooks/useFetch";

import Card from "../../../../../Components/UI/Card";

const DesignerBusinessDetailsEdit = () => {
  const { userData, token } = useAuth();
  const fetchHandler = useFetch();
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState(userData.brandName);
  const [brandLocation, setBrandLocation] = useState(userData.brandLocation);
  const [brandInfo, setBrandInfo] = useState(userData.brandInfo);
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
setLoading((true))
    const editDetails = {
      brandName: brandName,
      brandLocation: brandLocation,
      brandInfo: brandInfo,
    };
    try {
      const endpoint =
        "https://osazebackendapi.herokuapp.com/api/designer/updatebusinessinfo";
      const requestConfiguration = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: editDetails,
      };
      const response = await fetchHandler(endpoint, requestConfiguration);

      console.log(response);
      if (response.status === "success") {
        setLoading(false)
        navigate('/profile/designer')
      }
    } catch(error) {
      console.log(error.message)
      setLoading(false)
    }
  };
  return (
    <Card pageTitle="Edit Business Details" className="min-h-fit">
      <form className=" px-6 py-10 relative h-full" onSubmit={submitHandler}>
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
            className="text-white bg-header active:bg-headerHover mx-1 transition ease-in-out duration-150 font-medium rounded-lg text-sm block w-full px-5 py-2.5 text-center"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div
                  className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                  role="status"
                >
                  <span className="bg-inherit ml-2 text-xs text-header">
                    Load
                  </span>
                </div>
              </div>
            ) : (
              <p>Submit</p>
            )}
          </button>
      </form>
    </Card>
  );
};

export default DesignerBusinessDetailsEdit;
