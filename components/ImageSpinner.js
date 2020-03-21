import React, { useState, useEffect, useCallback, useRef } from "react";
import Spinner from "./BlobbySpinner";

function ImageSpinner(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  useEffect(() => {
    // Check if sole is loaded. Method for SSR
    const imgElement = imgRef.current;
    imgElement.complete
      ? onLoad()
      : imgElement.addEventListener("load", onLoad);
    return () => {
      imgElement.removeEventListener("load", onLoad);
    };
  });

  return (
    <>
      <img
        ref={imgRef}
        {...props}
        style={{
          ...props.style,
          zIndex: 2,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.2s"
        }}
      />
      {!isLoaded && (
        <Spinner
          duration={6000}
          shiftStep={200}
          numOfKeyPaths={12}
          numOfShapes={3}
          colors={["#FFF", "#FFF"]}
          contrast={1}
          round={0.6}
          numOfPathSegments={4}
          type={"fill"}
          lable={false}
        />
      )}
    </>
  );
}

export default ImageSpinner;
