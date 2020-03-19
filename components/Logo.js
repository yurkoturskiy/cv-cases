import React from "react";

const Logo = props => (
  <div
    className="m-elements__logo"
    style={{
      width: "48px",
      height: "48px",
      margin: "12px 12px 12px 0",
      backgroundColor: "white",
      borderRadius: "100%",
      padding: "6px"
    }}
  >
    <svg
      className="a-logo__icon"
      viewBox="0 0 88 88"
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      width="36px"
      height="36px"
    >
      <path d="M11 36h22v22H11zM33 58h22v22H33z" />
      <path d="M64.1 36L53.3 25.2 69.2 9.4l-.9-.9-15.8 15.9L34.8 6.7 19.2 22.2 55 58h22V36z" />
    </svg>
  </div>
);

export default Logo;
