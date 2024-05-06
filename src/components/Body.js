import Carousel from "./Carousel";
import { useTopRankedCoins } from "../utils/useTopRankedCoins.js";
import GetStarted from "./GetStarted";
import TrendingCoins24 from "./TrendingCoins24";
import TopRankedCarousel from "./TopRankedCarousel";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import CoinsTable from "./CoinsTable";
const Body = () => {
  const trending = useTopRankedCoins();
  console.log(trending);
  return (
    <div className="bg-gray-100">
      <div className="ml-[5vw] mr-[5vw] flex justify-center ">
        <div className="flex  mt-[8vh] justify-center">
          <div className="  min-h[70vh] min-w-[50vw] flex justify-center text-center  ">
            <CoinsTable trending={trending} />
          </div>
          <div className="">
            <GetStarted />
            <TrendingCoins24 />
          </div>
        </div>
      </div>
      <div className="  flex-col flex justify-center mt-[5vw] bg-white pt-9 ">
        <div className="flex-col flex items-center justify-center">
          <div className=" w-[80%] flex  justify-start">
            <h1 className="font-bold text-xl  ">You May Also Like</h1>
          </div>

          <TopRankedCarousel trending={trending} />
        </div>
        <div className="flex-col flex items-center justify-center">
          <div className=" w-[80%] flex  justify-start">
            <h1 className="font-bold text-xl  ">Trending Coins</h1>
          </div>

          <Carousel />
        </div>
      </div>
    </div>
  );
};
//  const bodyRouter= createBrowserRouter([
//     {
//         path:"/BTC",
//         element:<TradingViewWidget/>
//     },
//     {
//         path:"/:cryptoId",
//         element:<TradingViewWidget/>
//     },
//  ])
//  {<RouterProvider router={bodyRouter}/>;}
export default Body;
