import { useState, useRef, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import { useAuth } from "../../Context/AuthenticationContext";

const Login = () => {
  const fetchHandler = useFetch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setUserData, setToken } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  //error state
  const [errMsg, setErrMsg] = useState("");
  const [err, setErr] = useState(false);
  //loading state
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  //Screen-Resize Functionality
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  const passwordForgotHandler=()=>{}

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const endpoint =
        "https://osazebackendapi.herokuapp.com/api/customer/login";
      const requestConfiguration = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: loginDetails,
      };
      const response = await fetchHandler(endpoint, requestConfiguration);
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
        sew: response.user.businessInfo ? response.user.businessInfo.sew : null,
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
        url: response.user.businessInfo ? response.user.businessInfo.url : null,
        cart: response.user.cart ? response.user.cart : null,
        messages: response.user.messages ? response.user.messages : null,
        role: response.user.userObject.role,
        id: response.user.userId,
      };
      console.log(response);

      localStorage.setItem("osazeUserObject", JSON.stringify(userObject));
      const userData = localStorage.getItem("osazeUserObject");
      setUserData(JSON.parse(userData));

      localStorage.setItem("token", JSON.stringify(response.token));
      const accessToken = localStorage.getItem("token");
      setToken(JSON.parse(accessToken));

      if (
        response.status === "success" &&
        response.user.userObject.role === "customer"
      ) {
        for (const key in response.user.bodyProfile) {
          if (response.user.bodyProfile[key] === 0 && width > 500) {
            setLoading(false);
            navigate("/profile/body-profile/edit");
          } else if (response.user.bodyProfile[key] === 0 && width < 500) {
            setLoading(false);
            navigate("/profile/body/edit");
          } else {
            setLoading(false);
            navigate(from, { replace: true });
          }
        }
      } else if (
        response.status === "success" &&
        response.user.userObject.role === "designer"
      ) {
        setLoading(false);
        navigate(from, { replace: true });
      } else {
        setErrMsg(response.message);
        setErr(true);
        setTimeout(() => {
          setErr(false);
          setErrMsg("");
        }, 3000);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full px-3">
      <div className="max-w-md md:max-w-lg border-2 rounded-sm md:rounded-lg my-10 shadow-lg glass pt-4 pb-8 px-6 text-sm shadow-gray-200 mx-auto">
        <div className="text-center flex justify-center">
          {err && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
              role="alert"
            >
              <h3>{errMsg}</h3>
            </div>
          )}
        </div>
        <h1 className="text-2xl text-center text-header my-6 font-bold font-julius">
          Sign In
        </h1>
        <form onSubmit={submitHandler}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              id="floating_email1"
              className="block py-2.5 px-0 font-merri w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required=""
              ref={emailRef}
            />
            <label
              htmlFor="floating_email1"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full font-merri text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required=""
              ref={passwordRef}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password
            </label>
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
              <p>Sign In</p>
            )}
          </button>
        </form>
        <div className='flex justify-between mt-4 text-gray-500'>
          <p className='hover:cursor-pointer' onClick={passwordForgotHandler}>Forgot Password?</p>
          <p className="text-end">
            Don't have an account? Sign up{" "}
            <Link to="/signup" className="underline text-header">
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
