import React from "react";
import ReactImageMagnify from "react-image-magnify";

import tshirt2 from "./../../img/small.jpg";
import tshirt1 from "./../../img/large.jpg";

export default function ImageZoom() {
  return (
    <div className="w-[342px] h-[513px]">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch",
            isFluidWidth: true,
            src: tshirt2,
          },
          largeImage: {
            src: tshirt1,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
}
