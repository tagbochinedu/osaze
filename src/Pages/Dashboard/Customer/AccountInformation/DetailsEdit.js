import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DUMMY_DATA } from "../../../../DummyData";
import Card from "../../../../Components/UI/Card";

const DetailsEdit = () => {
  const navigate = useNavigate();
  const [newDetails, setNewDetails] = useState({
    firstName: DUMMY_DATA[0].signupData.firstName,
    lastName: DUMMY_DATA[0].signupData.lastName,
    eMail: DUMMY_DATA[0].signupData.eMail,
    address: DUMMY_DATA[0].signupData.houseAddress,
    phoneNumber: DUMMY_DATA[0].signupData.phoneNumber,
  });
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const [focus5, setFocus5] = useState(false);
  const [focus6, setFocus6] = useState(false);

  //Function Handlers
  const firstNameHandler = (e) => {
    setNewDetails({
      firstName: e.target.value,
      lastName: newDetails.lastName,
      eMail: newDetails.eMail,
      address: newDetails.houseAddress,
      phoneNumber: [newDetails.phoneNumber[0], newDetails.phoneNumber[1]],
    });
  };
  const lastNameHandler = (e) => {
    setNewDetails({
      firstName: newDetails.firstName,
      lastName: e.target.value,
      eMail: newDetails.eMail,
      address: [newDetails.address[0], newDetails.address[1]],
      phoneNumber: [newDetails.phoneNumber[0], newDetails.phoneNumber[1]],
    });
  };
  const addressHandler = (e) => {
    setNewDetails({
      firstName: newDetails.firstName,
      lastName: newDetails.lastName,
      eMail: newDetails.eMail,
      address: [e.target.value, newDetails.address[1]],
      phoneNumber: [newDetails.phoneNumber[0], newDetails.phoneNumber[1]],
    });
  };
  const address2Handler = (e) => {
    setNewDetails({
      firstName: newDetails.firstName,
      lastName: newDetails.lastName,
      eMail: newDetails.eMail,
      address: [newDetails.address[0], e.target.value],
      phoneNumber: [newDetails.phoneNumber[0], newDetails.phoneNumber[1]],
    });
  };
  const phoneNumberHandler = (e) => {
    setNewDetails({
      firstName: newDetails.firstName,
      lastName: newDetails.lastName,
      eMail: newDetails.eMail,
      address: [newDetails.address[0], newDetails.address[1]],
      phoneNumber: [e.target.value, newDetails.phoneNumber[1]],
    });
  };
  const phoneNumber2Handler = (e) => {
    setNewDetails({
      firstName: newDetails.firstName,
      lastName: newDetails.lastName,
      eMail: newDetails.eMail,
      address: [newDetails.address[0], newDetails.address[1]],
      phoneNumber: [newDetails.phoneNumber[0], e.target.value],
    });
  };
  const submitHander = (e) => {
    e.preventDefault();
    console.log(newDetails);
    navigate("/profile");
  };

  return (
    <Card pageTitle="Edit Details" className="min-h-[80vh]">
      <form className=" px-6 py-10 relative h-full" onSubmit={submitHander}>
        {DUMMY_DATA.map((data, i) => {
          return (
            <div
              className="grid grid-cols-2 grid-rows-2 gap-6 mb-24"
              key={i}
            >
              <div className="relative z-0 mb-6">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                  placeholder={focus ? data.signupData.firstName : " "}
                  onChange={firstNameHandler}
                  onFocus={() => {
                    setFocus(true);
                  }}
                  onBlur={() => {
                    setFocus(false);
                  }}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  First Name
                </label>
              </div>

              <div className="relative z-0 mb-6">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                  placeholder={focus2 ? data.signupData.lastName : " "}
                  onChange={lastNameHandler}
                  onFocus={() => {
                    setFocus2(true);
                  }}
                  onBlur={() => {
                    setFocus2(false);
                  }}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Last Name
                </label>
              </div>
              <div className="relative z-0 mt-6 col-span-full">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                  placeholder={focus3 ? data.signupData.address : " "}
                  onChange={addressHandler}
                  onFocus={() => {
                    setFocus3(true);
                  }}
                  onBlur={() => {
                    setFocus3(false);
                  }}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Primary Address
                </label>
              </div>
              <div className="relative z-0 mt-6 col-span-full">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                  placeholder={focus4 ? data.signupData.address2 : " "}
                  onChange={address2Handler}
                  onFocus={() => {
                    setFocus4(true);
                  }}
                  onBlur={() => {
                    setFocus4(false);
                  }}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Secondary Address(optional)
                </label>
              </div>
              <div className="relative z-0 mt-6">
                <input
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                  placeholder={focus5 ? data.signupData.phoneNumber : " "}
                  onChange={phoneNumberHandler}
                  onFocus={() => {
                    setFocus5(true);
                  }}
                  onBlur={() => {
                    setFocus5(false);
                  }}
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Phone number(1) (0814-123-4567)
                </label>
              </div>
              <div className="relative z-0 mt-6">
                <input
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                  placeholder={focus6 ? data.signupData.phoneNumber2 : " "}
                  onChange={phoneNumber2Handler}
                  onFocus={() => {
                    setFocus6(true);
                  }}
                  onBlur={() => {
                    setFocus6(false);
                  }}
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Phone number(2) (optional)
                </label>
              </div>
            </div>
          );
        })}
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
