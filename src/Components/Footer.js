import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";

const Footer = () => {
  const [accordion, setAccordion] = useState(false);

  return (
    <footer className="footer " id="footer">
      <div className="md:flex justify-between px-1.5 py-3 md:p-6">
        <div className="hidden md:flex flex-wrap justify-around w-full md:w-1/2">
          <div className="text-center md:my-0 my-7 md:text-start hidden md:block">
            <h4 className="text-2xl text-white font-semibold font-julius">
              Shop
            </h4>
            <ul className="text-white text-xl font-semibold">
              <li className="my-3">
                <Link to="/Men">Men</Link>
              </li>
              <li className="my-3">
                <Link to="/Women">Women</Link>
              </li>
              <li className="my-3">
                <Link to="/Accessories">Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="md:my-0 my-3.5">
            <h4 className="text-2xl text-white font-semibold text-center font-julius">
              Hours
            </h4>
            <ul className="text-white text-xl font-semibold text-center">
              <li className="my-3">Monday - Friday</li>
              <li className="my-3">10am - 6pm</li>
            </ul>
          </div>
          <div className="md:my-0 my-3.5">
            <h4 className="text-2xl text-white font-semibold text-center font-julius">
              Follow
            </h4>
            <ul className="flex md:block">
              <li className="mx-1">
                <a href="/">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    className="w-6 h-6 text-white my-2 mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mx-1">
                <a href="/">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="w-6 h-6 text-white my-2 mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mx-1">
                <a href="/">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter-square"
                    className="w-6 h-6 text-white my-2 mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8 .2 5.7 .2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3 .6 10.4 .8 15.8 .8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.45 65.45 0 0 1 -29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-5/12 md:my-0 my-3.5">
          <h4 className="text-xl md:text-3xl text-white font-semibold text-center mb-2 md:mb-6 text-start font-julius">
            Osaze - Your Personalize Store
          </h4>
          <div className="py-4 md:py-4 border-y-2 border-white transition ease-in-out">
            <div className="flex justify-between w-11/12">
              <h5 className="text-white text-lg md:text-xl font-semibold font-merri">
                For Designers and Illustrators
              </h5>
              <PlusIcon
                className={`${"w-6 h-6 text-white transition-all ease-in-out"} ${
                  accordion ? "rotate-45" : ""
                }`}
                onClick={() => {
                  setAccordion(!accordion);
                }}
              />
            </div>
            <div
              className={`'transition-all ease-in-out duration-1000 mt-24' ${
                accordion ? "h-[20px] md:h-[44px] opacity-100" : "h-0 opacity-0"
              }`}
            >
              <p className="text-white text-md md:text-xl mt-6 font-semibold transition ease-in-out">
                Designer Sign Up{" "}
                <Link to="/designers-only" className="underline">
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center flex justify-between md:justify-end mt-0.5 py-2 space-x-2 px-1 py-0.5 md:px-6 text-sm">
        <p className="w-6/12 md:w-4/12">
          {" "}
          © 2021 Copyright:{" "}
          <a href="github.com/tagbochinedu" target="_blank" className='underline'>
            Tagbo Chinedu
          </a>
        </p>
        <p  className="w-6/12 md:w-4/12">
          Server built by{" "}
          <a href="github.com/amadijeffrey" target="_blank" className='underline'>
            Amadi Jeffrey
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
