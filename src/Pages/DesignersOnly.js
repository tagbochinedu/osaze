import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";

const DesignersOnly = () => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="">
      <div className="relative h-56 md:h-[717px] bg-black">
        <div className="absolute block designers-only1">
          <div className="relative block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1599602447194-H0416R4CBJDGHAQXGLDH/class_smile.jpg?format=1500w"
              alt="woman"
              className="w-[90px] md:w-80 h-16 md:h-52"
            />
          </div>
        </div>
        <div className="absolute block designers-only2">
          <div className="relative block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1599602463028-LEA6H9TP6E1DCYUMDQSG/tina-rose-desk.jpg?format=1500w"
              alt="woman"
              className="w-[90px] md:w-80 h-28 md:h-[419px] "
            />
          </div>
        </div>
        <div className="absolute block designers-only3">
          <div className="relative block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61c9df2ca0ea72015a7bfc0e/1641740616816-LR9LSRE0KVTX0X1M2OZJ/unsplash-image-rKV-LcPEVg4.jpg?format=1500w"
              alt="woman"
              className="w-[90px] md:w-80 h-36 md:h-[490px]"
            />
          </div>
        </div>
        <div className="absolute block designers-only4">
          <div className="relative block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61c9df2ca0ea72015a7bfc0e/1641740322609-RSZ0QBF15N0ZI61ST2OX/unsplash-image-iFgRcqHznqg.jpg?format=1500w"
              alt="woman"
              className="w-[90px] md:w-80 h-36 md:h-[489px]"
            />
          </div>
        </div>
        <div className="absolute block designers-only5">
          <div className="relative block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61c9df2ca0ea72015a7bfc0e/1641740407042-SUPJ8KLFEFG08T76NBML/unsplash-image-cYSRncVxE44.jpg?format=1500w"
              alt="woman"
              className="w-[90px] md:w-80 h-36 md:h-[489px]"
            />
          </div>
        </div>

        <div className="absolute block designers-only6">
          <div className="relative block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61c9df2ca0ea72015a7bfc0e/1641740580143-A0GJTUK5A4G8YGRGWURP/unsplash-image-tCvDVszXdHE.jpg?format=1500w"
              alt="woman"
              className="w-[90px] md:w-80 h-16 md:h-[217px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:pl-12 md:pr-20 py-16 bg-[#191918]">
        <div className="py-6 md:py-12 border-y-2 border-white transition ease-in-out">
          <div className="flex justify-between w-11/12">
            <h5 className="text-white text-xl font-semibold font-merri">
              Interested in Growing Your Brand with Us?
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
            className={`'transition-all ease-in-out duration-1000 ' ${
              accordion ? "h-[64px] opacity-100 mt-12" : "h-0 opacity-0"
            }`}
          >
            <Link
              to="/designers-sign-up"
              className="text-white text-xl font-semibold mt-12 transition ease-in-out underline"
            >
              Apply Here
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#242423] px-6 md:pl-12 md:pr-[90px] py-12 md:flex justify-between text-white">
        <div className="md:w-3/12 flex flex-col items-center mb-12">
          <h2 className="text-2xl mb-10 font-semibold">Members Benefits</h2>
          <button className=" shadow-lg shadow-gray-900">
            <Link
              to="terms-and-conditions"
              className="px-6 py-4 bg-gradient-to-r from-header to-headerHover rounded text-lg"
            >
              Privacy Policy
            </Link>
          </button>
          <button className="shadow-lg shadow-gray-900 mt-12">
            <Link
              to="terms-and-conditions"
              className="px-6 py-4 bg-gradient-to-r from-headerHover to-header rounded text-lg"
            >
              Terms and Conditions
            </Link>
          </button>
        </div>
        <div className="md:w-4/12 text-justify">
          <div className="mb-10">
            <h2 className="text-2xl mb-6 font-semibold text-center">
              Hassle Free Shipping
            </h2>
            <p className="text-xl font-semibold leading-8">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl mb-6 font-semibold text-center">
              Expand Consumer Base
            </h2>
            <p className="text-xl font-semibold leading-8">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl mb-6 font-semibold text-center">
              Free Packing and Photography
            </h2>
            <p className="text-xl font-semibold leading-8">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
          </div>
        </div>
        <div className="md:w-4/12 text-justify">
          <div className="mb-10">
            <h2 className="text-2xl mb-6 font-semibold text-center">
              Online Platform with Global Users
            </h2>
            <p className="text-xl font-semibold leading-8">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl mb-6 font-semibold text-center">
              Sell in Currencys across the World
            </h2>
            <p className="text-xl font-semibold leading-8">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignersOnly;
