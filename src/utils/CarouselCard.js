import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const CarouselCard = ({ coin, index }) => {
  return (
    <Link to={`/${coin?.id}`}>
      <div
        key={index}
        className="w-[200px] h-[180px] border-gray-300 border-[1px] m-8 rounded-lg p-2 transition-transform transform hover:scale-110 shadow-xl"
      >
        <div className=" top  items-center  ">
          <div className="  flex items-center   overflow-hidden m-1 ml-2">
            <img
              className=" w-12 rounded-full transition-transform transform hover:scale-90 "
              src={coin?.image}
              alt={coin?.name}
            />
            <div className="">
              <div className="ml-2 font-bold">{coin?.symbol.toUpperCase()}</div>
              <div className="ml-2 text-xs text-gray-700">{coin?.name}</div>
            </div>
          </div>

          <div className="flex mt-2 ml-2 ">
            <div
              className={`flex items-center w-16 h-6 text-center text-sm mr-2 justify-center rounded-full ${
                coin?.price_change_percentage_24h < 0
                  ? "hover:bg-red-700"
                  : "hover:bg-green-700"
              } hover:text-white ${
                coin?.price_change_percentage_24h < 0
                  ? "text-red-700 border-red-700"
                  : "text-green-700 border-green-700"
              } border-[1px] border-${
                coin?.price_change_percentage_24h < 0 ? "red-700" : "green-700"
              }`}
            >
              {coin?.price_change_percentage_24h < 0 ? (
                <>{coin?.price_change_percentage_24h.toFixed(2)}%</>
              ) : (
                <>+{coin?.price_change_percentage_24h.toFixed(2)}%</>
              )}
              {/* {coin?.market_data?.price_change_percentage_24h.toFixed(2)}% */}
            </div>
            <div
              className={`flex items-center w-6 h-6 text-center font-semibold justify-center rounded-full ${
                coin?.price_change_percentage_24h < 0
                  ? "hover:bg-red-700"
                  : "hover:bg-green-700"
              } hover:text-white ${
                coin?.price_change_percentage_24h < 0
                  ? "text-red-700 border-red-700"
                  : "text-green-700 border-green-700"
              } border-[1px] border-${
                coin?.price_change_percentage_24h < 0 ? "red-700" : "green-700"
              }`}
            >
              <>
                {coin?.price_change_percentage_24h < 0 ? (
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
                coin?.price_change_percentage_24h < 0 ? "red-700" : "green-700"
              }`}
            >
              ${coin?.current_price.toFixed(2).toLocaleString()}
            </div>
          </div>
          <div className="text-xs mt-2 text-gray-700">
            <div className="ml-2">
              Total Volume : {coin?.total_volume.toLocaleString()}
            </div>
            <div className="ml-2">
              {" "}
              Market Cap : {coin?.market_cap.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
