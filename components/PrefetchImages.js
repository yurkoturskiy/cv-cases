import React from "react";

function PrefetchImages({ images }) {
  const stack = images.map((src, index) => (
    <img
      key={index}
      src={src}
      style={{ opacity: 0, position: "absolute" }}
      width="1px"
    />
  ));
  return <div>{stack}</div>;
}

export default PrefetchImages;
