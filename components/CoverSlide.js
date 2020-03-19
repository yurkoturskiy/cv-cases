// example Layout.js
import React from "react";
import Spinner from "./BlobbySpinner";

export default ({ children }) => (
  <div>
    <div
      style={{
        zIndex: 4,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(https://drive.google.com/uc?id=1wqTo6QIFeGbTZLT8oaTh5Wk3NKr0eUxC)`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      {children}
    </div>
  </div>
);
