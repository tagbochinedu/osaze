import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthenticationContext";
import useFetch from "../../../../CustomHooks/useFetch";

import Card from "../../../../Components/UI/Card";

const DetailsEdit = () => {
  const { fetchHandler } = useFetch();
  const { userData, token } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [country, setCountry] = useState(userData.country);
  const [state, setState] = useState(userData.state);
  const [city, setCity] = useState(userData.city);
  const [houseAddress, setHouseAddress] = useState(userData.houseAddress);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);

  const submitHander = async (e) => {
    e.preventDefault();
    const editDetails = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      state: state,
      city: city,
      houseAddress: houseAddress,
      phoneNumber: phoneNumber,
    };
    try {
      const endpoint =
        "https://osazeapi.herokuapp.com/api/designer/updateaccount";
      const requestConfiguration = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: editDetails,
      };
      const response = await fetchHandler(endpoint, requestConfiguration);
      console.log(response);
    } catch {}
    navigate("/profile");
  };

  return (
    <Card pageTitle="Edit Account Details" className="min-h-fit">
      <form className=" px-6 py-10 relative h-full" onSubmit={submitHander}>
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="relative z-0">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              First Name
            </label>
          </div>

          <div className="relative z-0">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 mb-10">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              id="country"
              className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <label
              htmlFor="country"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Country
            </label>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="text"
              id="state"
              className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <label
              htmlFor="state"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              State/Province
            </label>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="text"
              id="city"
              className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required=""
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              City
            </label>
          </div>
        </div>
        <div className="relative z-0 mb-10 w-full group">
          <input
            type="text"
            id="floating_address"
            className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
            placeholder=" "
            required
            value={houseAddress}
            onChange={(e) => {
              setHouseAddress(e.target.value);
            }}
          />
          <label
            htmlFor="floating_address"
            className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            House Address
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full font-merri text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
            placeholder=" "
            required
            value={`+${phoneNumber}`}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Phone number
          </label>
        </div>

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

export default DetailsEdit;
