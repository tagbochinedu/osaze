import { Route, Routes, Navigate } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Home from "./Pages/Home";

import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";

import Cart from "./Pages/Cart";
import MaleProducts from "./Pages/Products/Men/MaleProducts";
import MaleProductItems from "./Pages/Products/Men/MaleProductItems";
import Women from "./Pages/Products/Women";
import Accessories from "./Pages/Products/Accessories";

import Dashboard from "./Pages/Dashboard/Dashboard";
import AccountInformation from "./Pages/Dashboard/Customer/AccountInformation/AccountInformation";
import DetailsEdit from "./Pages/Dashboard/Customer/AccountInformation/DetailsEdit";

import BodyProfile from "./Pages/Dashboard/Customer/BodyProfile/BodyProfile";
import BodyEdit from "./Pages/Dashboard/Customer/BodyProfile/BodyEdit";

import Orders from "./Pages/Dashboard/Customer/Orders/Orders";
import PendingOrders from "./Pages/Dashboard/Customer/Orders/PendingOrders";
import CompletedOrders from "./Pages/Dashboard/Customer/Orders/CompletedOrders";

import WishList from "./Pages/Dashboard/Customer/WishList";
import Inbox from "./Pages/Dashboard/Customer/Inbox";

import Designer from "./Pages/Dashboard/Designer/Designer";
import DesignersOnly from "./Pages/DesignersOnly";
import DesignersSignup from "./Pages/Authentication/DesignersSignup";

import OrderReviewModal from "./Components/Modals/OrderReviewModal";
import { useModalAuth } from "./Context/ModalContext";
import { useImageAuth } from "./Context/ImageContext";

function App() {
  const { reviewModal, statusModal } = useModalAuth();
  const { imageFullScreen } = useImageAuth();

  return (
    <>
      <Header />
      <div className="relative">
        {(reviewModal || statusModal || imageFullScreen) && (
          <OrderReviewModal />
        )}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path='/designers-only' element={<DesignersOnly/>}/>
        <Route exact path='/designers-sign-up' element={<DesignersSignup/>}/>
        <Route exact path="/profile" element={<Dashboard />}>
          <Route
            exact
            path="/profile"
            element={<Navigate to="/profile/account-information" />}
          />
          <Route
            exact
            path="/profile/account-information"
            element={<AccountInformation />}
          />
          <Route exact path="/profile/body-profile" element={<BodyProfile />} />
          <Route
            exact
            path="/profile/body-profile/edit"
            element={<BodyEdit />}
          />
          <Route exact path="/profile/account/edit" element={<DetailsEdit />} />
          <Route exact path="/profile/orders" element={<Orders />}>
            <Route
              exact
              path="/profile/orders"
              element={<Navigate to="/profile/orders/orders-pending" />}
            />
            <Route
              exact
              path="/profile/orders/orders-pending"
              element={<PendingOrders />}
            />
            <Route
              exact
              path="/profile/orders/orders-complete"
              element={<CompletedOrders />}
            />
          </Route>
          <Route exact path="/profile/wishlist" element={<WishList />} />
          <Route exact path="/profile/inbox" element={<Inbox />} />
          <Route exact path="/profile/designer" element={<Designer />} />
        </Route>
        <Route exact path="/men" element={<MaleProducts />} />
        <Route exact path="/men/:id" element={<MaleProductItems />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
