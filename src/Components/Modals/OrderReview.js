import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useModalAuth } from "../../Context/ModalContext";

const OrderReview = () => {
  const [stars, setStars] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [reviewData, setReviewData] = useState({
    rating: 0,
    feedback: { name: "", feedback: "" },
  });
  const { setReviewModal } = useModalAuth();
  const starArray = Array(5).fill(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setReviewData({ rating: stars, feedback: feedback });
    console.log(reviewData)
    setReviewModal(false);
  };
  return (
    <>
      <h1 className="border-b border-gray-400 font-bold py-4 px-6 text-xl uppercase text-black">
        Please review this product
      </h1>
      <form onSubmit={submitHandler} className="px-4">
        <div className="flex justify-center py-3">
          {starArray.map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setStars(index + 1);
                }}
              >
                <StarIcon
                  className={`${"w-16 h-16  outline-4"} ${
                    stars > index ? "text-[#FFD700]" : "text-gray-200"
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className="pb-3">
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal rounded transition ease-in-out m-0 border border-gray-500 focus:outline-0 focus:border focus:border-gray-500"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Please give your feedback (optional)"
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="py-2 mb-3 w-full bg-header text-white font-semibold rounded-md active:bg-headerHover"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default OrderReview;
