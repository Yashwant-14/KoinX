import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const CoinDetails = ({ coin }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${coin?.id}`);
      }}
      className="sidebar w-[80%] min-w-[1000px] flex justify-between items-center  p-[1%] ml-[4%] mr-[4%] mt-[2%]  rounded-2xl shadow-xl border-1 text-lg font-semibold"
    >
      <div className="flex justify-between items-center ">
        <img
          className="rounded-full"
          src={coin?.image?.small}
          alt={coin?.name}
          height="200"
        />

        <div className="ml-3">
          <div className="font-semibold ">{coin?.symbol.toUpperCase()}</div>
          <div className="text-sm">{coin.name}</div>
        </div>
      </div>
      {/* <div>{parse(coin?.description.en.split(". ")[0])}</div> */}

      <div className="flex  ">
        <div
          className={`flex items-center w-24 h-8 text-center font-semibold mr-2 justify-center rounded-full ${
            coin?.market_data?.price_change_percentage_24h < 0
              ? "hover:bg-red-700"
              : "hover:bg-green-700"
          } hover:text-white ${
            coin?.market_data?.price_change_percentage_24h < 0
              ? "text-red-700 border-red-700"
              : "text-green-700 border-green-700"
          } border-[1px] border-${
            coin?.market_data?.price_change_percentage_24h < 0
              ? "red-700"
              : "green-700"
          }`}
        >
          {coin?.market_data?.price_change_percentage_24h < 0 ? (
            <>{coin?.market_data?.price_change_percentage_24h.toFixed(2)}%</>
          ) : (
            <>+{coin?.market_data?.price_change_percentage_24h.toFixed(2)}%</>
          )}
          {/* {coin?.market_data?.price_change_percentage_24h.toFixed(2)}% */}
        </div>
        <div
          className={`flex items-center w-8 h-8 text-center font-semibold justify-center rounded-full ${
            coin?.market_data?.price_change_percentage_24h < 0
              ? "hover:bg-red-700"
              : "hover:bg-green-700"
          } hover:text-white ${
            coin?.market_data?.price_change_percentage_24h < 0
              ? "text-red-700 border-red-700"
              : "text-green-700 border-green-700"
          } border-[1px] border-${
            coin?.market_data?.price_change_percentage_24h < 0
              ? "red-700"
              : "green-700"
          }`}
        >
          <>
            {coin?.market_data?.price_change_percentage_24h < 0 ? (
              <TrendingDownRoundedIcon />
            ) : (
              <TrendingUpRoundedIcon />
            )}
          </>
        </div>
      </div>

      <div
        className={`flex text-${
          coin?.market_data?.price_change_percentage_24h < 0
            ? "red-700"
            : "green-700"
        }`}
      >
        <div>${coin?.market_data.current_price.usd.toLocaleString()}</div>
      </div>
      <div className="flex">
        <div>Rank : {coin?.market_cap_rank}</div>
      </div>

      <div className="flex">
        <div>
          Total Volume : $
          {(coin?.market_data.total_volume.usd / 1000000).toLocaleString()}M
        </div>
      </div>
      <div className="flex">
        <div>
          Market Cap : $
          {(coin?.market_data.market_cap.usd / 1000000).toLocaleString()}M
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
