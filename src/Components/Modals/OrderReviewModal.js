import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import { useModalAuth } from "../../Context/ModalContext";
import { useImageAuth } from "../../Context/ImageContext";

import OrderReview from "./OrderReview";
import StatusReview from "./StatusReview";

export const ModalOverlay = () => {
  const { reviewModal, statusModal } = useModalAuth();
  const { setImageFullScreen, imageSource, imageFullScreen, imageID } = useImageAuth();
  return (
    <div className="top-1/4 w-full z-10 fixed md:w-2/4 md:left-1/4">
      {(reviewModal || statusModal) && (
        <div className="h-full text-center bg-white pb-2 w-full hidden md:block md:w-9/12 lg:w-10/12 md:ml-4 lg:ml-12 lg:rounded-lg border border-gray-400">
          {reviewModal && <OrderReview />}
          {statusModal && <StatusReview />}
        </div>
      )}
      {imageFullScreen && (
        <div className="bg-white px-4 py-2 relative">
          <img
            src={URL.createObjectURL(imageSource)}
            onClick={() => {
              setImageFullScreen(false);
            }}
            className="w-48 mx-auto h-auto"
            alt="preview"
          />
          <Link to={`men/${imageID}`}>View ProductItem</Link>
        </div>
      )}
    </div>
  );
};

export const Backdrop = () => {
  const { setReviewModal, setStatusModal } = useModalAuth();
  const { setImageFullScreen } = useImageAuth();
  return (
    <div
      onClick={() => {
        setReviewModal(false);
        setStatusModal(false);
        setImageFullScreen(false);
      }}
      className="h-screen opacity-70 bg-black top-20 bottom-0 w-full fixed z-10"
    ></div>
  );
};

const OrderReviewModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default OrderReviewModal;
