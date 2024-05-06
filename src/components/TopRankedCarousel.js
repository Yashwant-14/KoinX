import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../utils/CarouselCard";

const TopRankedCarousel = ({ trending }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20px", // Set width for the arrow
          height: "20px", // Set height for the arrow
          background: "grey", // Set background color to grey
          borderRadius: "50%", // Ensure the arrow is a circle
          textAlign: "center", // Center the arrow content
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        onClick={onClick}
      >
        {">"} {/* Arrow content */}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20px", // Set width for the arrow
          height: "20px", // Set height for the arrow
          background: "grey", // Set background color to black
          borderRadius: "50%", // Ensure the arrow is a circle
          textAlign: "center", // Center the arrow content
          cursor: "pointer", // Change cursor to pointer on hover
        }}
        onClick={onClick}
      >
        {"<"} {/* Arrow content */}
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  min-w-[1000px] w-[80%] h-[30vh]  items-center">
      <Slider {...settings}>
        {trending.map((coin, index) => (
          <CarouselCard coin={coin} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default TopRankedCarousel;
