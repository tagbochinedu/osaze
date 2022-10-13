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
        response.user.userObject.role === "designerer"
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
      <div className="max-w-md md:max-w-xl border-2 rounded-sm md:rounded-lg my-10 shadow-lg glass pt-4 pb-8 px-6 text-sm shadow-gray-200 mx-auto">
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
          <div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>

            <div className="text-center flex items-center justify-center">
              <p className="text-md mb-0 mr-4 font-merri text-gray-500 font-medium">
                Sign in with
              </p>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-header text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md active:bg-headerHover mx-1 transition ease-in-out duration-150"
              >
                <svg
                  data-icon="facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-header text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md active:bg-headerHover mx-1 transition ease-in-out duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-header text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md active:bg-headerHover mx-1 transition ease-in-out duration-150 mx-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-4 h-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <p className="text-gray-500 text-end mt-4">
          Don't have an account? Sign up{" "}
          <Link to="/signup" className="underline text-header">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
