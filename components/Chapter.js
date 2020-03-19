import React from "react";

function Chapter({ content }) {
  return (
    <h6 style={{ position: "absolute", top: "14px", margin: "0" }}>
      {content}
    </h6>
  );
}

export default Chapter;
