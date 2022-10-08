import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useFetch from "../../../../../CustomHooks/useFetch";
import { useAuth } from "../../../../../Context/AuthenticationContext";

const BodyEdit = () => {
  const fetchHandler = useFetch();
  const { userData, token } = useAuth();
  const [bust, setBust] = useState(userData.bodyProfile.bust);
  const [hip, setHip] = useState(userData.bodyProfile.hip);
  const [hipDip, setHipDip] = useState(userData.bodyProfile.hipDip);
  const [waist, setWaist] = useState(userData.bodyProfile.waist);
  const [frontWaistLength, setFrontWaistLength] = useState(
    userData.bodyProfile.frontWaistLength
  );
  const [backWaistLength, setBackWaistLength] = useState(
    userData.bodyProfile.backWaistLength
  );
  const [armLength, setArmLength] = useState(userData.bodyProfile.armLength);
  const [thigh, setThigh] = useState(userData.bodyProfile.thigh);
  const [ankle, setAnkle] = useState(userData.bodyProfile.ankle);
  const [inseam, setInseam] = useState(userData.bodyProfile.inseam);
  const [outseam, setOutseam] = useState(userData.bodyProfile.outseam);
  const [crotchDepth, setCrotchDepth] = useState(
    userData.bodyProfile.crotchDepth
  );
  const [shoulderLength, setShoulderLength] = useState(
    userData.bodyProfile.shoulderLength
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    for (const key in userData.bodyProfile) {
      if (userData.bodyProfile[key] === 0 ||
        userData.bodyProfile[key] === "0") {
        setMessageText("Fill all Measurements before shopping");
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 3000);
      }
    }
  }, [userData.bodyProfile]);

  const submitHander = async (e) => {
    e.preventDefault();
    setLoading(true);
    const bodyProfile = {
      bust: bust,
      waist: waist,
      hip: hip,
      hipDip: hipDip,
      frontWaistLength: frontWaistLength,
      backWaistLength: backWaistLength,
      armLength: armLength,
      thigh: thigh,
      ankle: ankle,
      inseam: inseam,
      outseam: outseam,
      crotchDepth: crotchDepth,
      shoulderLength: shoulderLength,
    };
    try {
      console.log(bodyProfile);
      const endpoint =
        "https://osazebackendapi.herokuapp.com/api/customer/updatebodyprofile";
      const requestConfiguration = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: bodyProfile,
      };

      const response = await fetchHandler(endpoint, requestConfiguration);
      if (response.status === "success") {
        console.log(response);
        setLoading(false);
        navigate("/profile/body");
      } else {
        setLoading(false);
      }
    } catch {}
  };
  return (
    <div className="w-full lg:rounded-lg shadow-md shadow-gray-200 border border-gray-400">
      <div className="flex justify-start items-center py-4 px-6 border-b border-gray-400 ">
        <Link to="/profile/body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-5 h-5 mr-3"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
        <h1 className="font-bold text-xl uppercase text-black">Body Edit</h1>
      </div>
      <div className="fixed h-min left-0 right-0 w-full flex justify-center py-2">
        {message && <p className='text-sm font-semibold bg-gray-300 p-1 rounded text-header'>{messageText}</p>}
      </div>
      <form className=" px-6 py-10 relative h-full" onSubmit={submitHander}>
        <h2 className="text-center font-semibold mb-6">Upper Body</h2>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={bust}
              onChange={(e) => {
                setBust(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Bust:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={shoulderLength}
              onChange={(e) => {
                setShoulderLength(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Shoulder Length:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={frontWaistLength}
              onChange={(e) => {
                setFrontWaistLength(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Front Waist Length:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={backWaistLength}
              onChange={(e) => {
                setBackWaistLength(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Back Waist Length:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={armLength}
              onChange={(e) => {
                setArmLength(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Arm Length:
            </label>
          </div>
        </div>
        <h2 className="text-center font-semibold mb-6">Lower Body</h2>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={waist}
              onChange={(e) => {
                setWaist(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Waist:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={hip}
              onChange={(e) => {
                setHip(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Hip:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={hipDip}
              onChange={(e) => {
                setHipDip(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Hip Dip:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={thigh}
              onChange={(e) => {
                setThigh(e.target.value);
              }}
            />

            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Thigh:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={ankle}
              onChange={(e) => {
                setAnkle(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Ankle:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={inseam}
              onChange={(e) => {
                setInseam(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Inseam:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={outseam}
              onChange={(e) => {
                setOutseam(e.target.value);
              }}
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Outseam:
            </label>
          </div>
          <div className="relative z-0 mb-6">
            <input
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              value={crotchDepth}
              onChange={(e) => {
                setCrotchDepth(e.target.value);
              }}
            />

            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Crotch Depth:
            </label>
          </div>
        </div>
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
    </div>
  );
};

export default BodyEdit;
