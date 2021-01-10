import React from "react";
import Slider from "react-slick";
import img1 from "../../../Resources/images/Slider/img1.jpg";
import img2 from "../../../Resources/images/Slider/img2.jpg";
import img3 from "../../../Resources/images/Slider/img3.jpg";

const SlidingImage = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    dots: true,
  };

  return (
    <div className="" style={{ overflow: "hidden", height: "400px" }}>
      <Slider {...settings}>
        <div>
          <div
            className=""
            style={{
              background: `url(${img1}) no-repeat`,
              height: "400px",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
        <div>
          <div
            className=""
            style={{
              background: `url(${img2}) no-repeat`,
              height: "400px",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
        <div>
          <div
            className=""
            style={{
              background: `url(${img3}) no-repeat`,
              height: "400px",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default SlidingImage;
