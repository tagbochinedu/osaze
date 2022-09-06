import React, { useState, useContext } from "react";
const ImageContext = React.createContext();

export function useImageAuth() {
  return useContext(ImageContext);
}

export function ImageProvider({ children }) {
  const [imageFullScreen, setImageFullScreen] = useState(false);
  const [imageSource, setImageSource] = useState(undefined);
  const [imageID, setImageID] = useState("");

  const value = {
    imageFullScreen,
    setImageFullScreen,
    imageSource,
    setImageSource,
    imageID,
    setImageID,
  };
  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
