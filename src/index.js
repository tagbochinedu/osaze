import React from "react";
import ReactDOM from "react-dom/client";
import { AuthenticationProvider } from "./Context/AuthenticationContext";
import { ModalProvider } from "./Context/ModalContext";
import { ImageProvider } from "./Context/ImageContext";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthenticationProvider>
    <ModalProvider>
      <BrowserRouter>
        <ImageProvider>
          <ScrollToTop/>
          <App />
        </ImageProvider>
      </BrowserRouter>
    </ModalProvider>
  </AuthenticationProvider>
);
