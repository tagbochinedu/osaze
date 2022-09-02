import React, { useState, useContext } from "react";
const ModalContext = React.createContext();

export function useModalAuth() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [reviewModal, setReviewModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);

  const value = { reviewModal, setReviewModal, statusModal, setStatusModal };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
