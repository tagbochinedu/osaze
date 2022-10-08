import { Route, Routes, Navigate } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthorizedRoute from "./Components/PrivateRoute/AuthorizedRoute";

import Home from "./Pages/Home";

import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";

import Cart from "./Pages/Cart";
import MaleProducts from "./Pages/Products/Men/MaleProducts";
import MaleProductItems from "./Pages/Products/Men/MaleProductItems";
import Women from "./Pages/Products/Women";
import Accessories from "./Pages/Products/Accessories";

import Dashboard from "./Pages/Dashboard/Dashboard";
//Customer-Desktop-View
import AccountInformation from "./Pages/Dashboard/Customer/AccountInformation/Desktop/AccountInformation";
import DetailsEdit from "./Pages/Dashboard/Customer/AccountInformation/Desktop/DetailsEdit";
import BodyProfile from "./Pages/Dashboard/Customer/BodyProfile/Desktop/BodyProfile";
import BodyEdit from "./Pages/Dashboard/Customer/BodyProfile/Desktop/BodyEdit";
import Orders from "./Pages/Dashboard/Customer/Orders/Orders";
import PendingOrders from "./Pages/Dashboard/Customer/Orders/PendingOrders";
import CompletedOrders from "./Pages/Dashboard/Customer/Orders/CompletedOrders";
import Inbox from "./Pages/Dashboard/Customer/Inbox";

//Customer-Mobile-View
import Account from "./Pages/Dashboard/Customer/AccountInformation/Mobile/Account";
import Edit from "./Pages/Dashboard/Customer/AccountInformation/Mobile/Edit";
import Body from "./Pages/Dashboard/Customer/BodyProfile/Mobile/BodyProfile";

//Designer-Desktop-View
import Designer from "./Pages/Dashboard/Designer/DesignerDetails/Desktop/Designer";
import DesignerAccountDetailsEdit from "./Pages/Dashboard/Designer/DesignerDetails/Desktop/DesignerAccountDetailsEdit";
import DesignerBusinessDetailsEdit from "./Pages/Dashboard/Designer/DesignerDetails/Desktop/DesignerBusinessDetailsEdit";
import DesignerProductUpload from "./Pages/Dashboard/Designer/DesignerProductUpload/Desktop/DesignerProductUpload";
import DesignerOrders from "./Pages/Dashboard/Designer/Orders/DesignerOrders";
import OpenOrders from "./Pages/Dashboard/Designer/Orders/OpenOrders";
import FinishedOrders from "./Pages/Dashboard/Designer/Orders/FinishedOrders";

//Designer-Mobile-view
import Designers from "./Pages/Dashboard/Designer/DesignerDetails/Mobile/Designer";
import DesignersAccountDetailsEdit from "./Pages/Dashboard/Designer/DesignerDetails/Mobile/DesignerAccountDetailsEdit";
import DesignersBusinessDetailsEdit from "./Pages/Dashboard/Designer/DesignerDetails/Mobile/DesignerBusinessDetailsEdit";
import DesignersProductUpload from "./Pages/Dashboard/Designer/DesignerProductUpload/Mobile/DesignerProductUpload";

import DesignersOnly from "./Pages/DesignersOnly";
import DesignerSignup from "./Pages/Authentication/DesignerSignup";

import NoMatch from "./Pages/ErrorPage/NoMatch";
import Unauthorized from "./Pages/ErrorPage/Unauthorized";

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
        <Route exact path="/designers-only" element={<DesignersOnly />} />
        <Route exact path="/designers-sign-up" element={<DesignerSignup />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AuthorizedRoute allowedRole="customer" />}>
            <Route exact path="/profile/account" element={<Account />} />
            <Route exact path="/profile/account/edit" element={<Edit />} />
            <Route
              exact
              path="/profile/body"
              element={<Body />}
            />
          </Route>
          <Route element={<AuthorizedRoute allowedRole="designer" />}>
            <Route exact path="/profile/designers" element={<Designers />} />
            <Route
              exact
              path="/profile/designers-account-details-edit"
              element={<DesignersAccountDetailsEdit />}
            />
            <Route
              exact
              path="/profile/designers-business-details-edit"
              element={<DesignersBusinessDetailsEdit />}
            />
            <Route
              exact
              path="/profile/designers-product-upload"
              element={<DesignersProductUpload />}
            />
          </Route>
          <Route exact path="/profile" element={<Dashboard />}>
            <Route element={<AuthorizedRoute allowedRole="customer" />}>
              <Route
                path="/profile/"
                element={<Navigate to="/profile/account-information" />}
              />
              <Route
                exact
                path="/profile/account-information"
                element={<AccountInformation />}
              />
              <Route
                exact
                path="/profile/body-profile"
                element={<BodyProfile />}
              />
              <Route
                exact
                path="/profile/body-profile/edit"
                element={<BodyEdit />}
              />
              <Route
                exact
                path="/profile/account-information/edit"
                element={<DetailsEdit />}
              />
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
              <Route exact path="/profile/inbox" element={<Inbox />} />
            </Route>
            <Route element={<AuthorizedRoute allowedRole="designer" />}>
              <Route exact path="/profile/designer" element={<Designer />} />
              <Route
                exact
                path="/profile/designer-account-details-edit"
                element={<DesignerAccountDetailsEdit />}
              />
              <Route
                exact
                path="/profile/designer-business-details-edit"
                element={<DesignerBusinessDetailsEdit />}
              />
              <Route
                exact
                path="/profile/designer-product-upload"
                element={<DesignerProductUpload />}
              />
              <Route
                exact
                path="/profile/designer-orders"
                element={<DesignerOrders />}
              >
                <Route
                  exact
                  path="/profile/designer-orders"
                  element={
                    <Navigate to="/profile/designer-orders/open-orders" />
                  }
                />
                <Route
                  exact
                  path="/profile/designer-orders/open-orders"
                  element={<OpenOrders />}
                />
                <Route
                  exact
                  path="/profile/designer-orders/finished-orders"
                  element={<FinishedOrders />}
                />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route exact path="/men" element={<MaleProducts />} />
        <Route exact path="/men/:id" element={<MaleProductItems />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/accessories" element={<Accessories />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/403" element={<Unauthorized />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
