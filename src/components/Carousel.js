import { useEffect, useState } from "react";
import { TrendingCoins } from "../config/api.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(TrendingCoins);
      if (!response.ok) {
        throw new Error("Failed to fetch trending coins");
      }
      const data = await response.json();
      setTrending(data.coins);
      console.log(data.coins);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

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
    <div className=" min-w-[1000px] w-[80%] h-[30vh]  items-center">
      <Slider {...settings}>
        {trending.map((coin, index) => (
          <Link to={coin?.item?.id}>
            <div
              key={index}
              className="w-[215px] h-[195px] border-gray-300 border-[1px] m-8 rounded-lg p-2 transition-transform transform hover:scale-110 shadow-xl"
            >
              <div className=" top  items-center  ">
                <div className="  flex items-center   overflow-hidden m-1 ml-2">
                  <img
                    className=" rounded-full transition-transform transform hover:scale-90 "
                    src={coin?.item?.small}
                    alt={coin?.item?.name}
                  />

                  <div className="">
                    <div className="ml-2 font-bold">
                      {coin?.item?.symbol.toUpperCase()}
                    </div>
                    <div className="ml-2 text-xs text-gray-700">
                      {coin?.item?.name}
                    </div>
                  </div>
                </div>

                <div className="flex mr-3 mt-2 ml-2 ">
                  <div
                    className={`flex items-center w-16 h-6 text-center text-sm mr-2 justify-center rounded-full ${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "hover:bg-red-700"
                        : "hover:bg-green-700"
                    } hover:text-white ${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "text-red-700 border-red-700"
                        : "text-green-700 border-green-700"
                    } border-[1px] border-${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "red-700"
                        : "green-700"
                    }`}
                  >
                    {coin?.item?.data?.price_change_percentage_24h.usd < 0 ? (
                      <>
                        {coin?.item?.data?.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </>
                    ) : (
                      <>
                        +
                        {coin?.item?.data?.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </>
                    )}
                    {/* {coin?.market_data?.price_change_percentage_24h.toFixed(2)}% */}
                  </div>
                  <div
                    className={`flex items-center w-6 h-6 text-center font-semibold justify-center rounded-full ${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "hover:bg-red-700"
                        : "hover:bg-green-700"
                    } hover:text-white ${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "text-red-700 border-red-700"
                        : "text-green-700 border-green-700"
                    } border-[1px] border-${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "red-700"
                        : "green-700"
                    }`}
                  >
                    <>
                      {coin?.item?.data?.price_change_percentage_24h.usd < 0 ? (
                        <TrendingDownRoundedIcon />
                      ) : (
                        <TrendingUpRoundedIcon />
                      )}
                    </>
                  </div>
                </div>
                <div className="flex items-center justify-between font-bold  ml-2 mr-3 mt-1">
                  <div
                    className={`flex mr-9 font-bold text-${
                      coin?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "red-700"
                        : "green-700"
                    }`}
                  >
                    ${coin?.item?.data?.price.toFixed(2).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="priceGraph flex justify-center items-center pt-2 pb-2">
                <img src={coin?.item?.data?.sparkline} />
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
