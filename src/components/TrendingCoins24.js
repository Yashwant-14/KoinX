import { useEffect, useState } from "react";
import { SearchTrending } from "../config/api";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const TrendingCoins24 = ({ setCryptoId }) => {
  const [coins, setCoins] = useState([]);

  const fetchCoinData = async () => {
    const response = await fetch(SearchTrending);
    const data = await response.json();
    console.log(data.coins);

    // data?.coins.map((a)=>{
    //     console.log(a.item.data.price_change_percentage_24h.usd)
    // })
    const sortedData = data?.coins.sort((a, b) => {
      return (
        a.item.data.price_change_percentage_24h.usd -
        b.item.data.price_change_percentage_24h.usd
      );
    });

    const reversedData = sortedData.reverse();

    const filteredData = reversedData.filter((a, index) => {
      return index < 3;
    });

    console.log(filteredData);
    setCoins(filteredData);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  const generateId = (id) => {
    console.log("hello", id);
    setCryptoId(id);
  };

  return (
    <div className=" bg-white h-[190px] w-[340px] ml-5 mt-5 p-[1px] rounded-md shadow-md">
      <div className="ml-3 mt-3 w-[100%]">
        <h1 className=" font-bold text-xl  ">Trending Coins (24h)</h1>
      </div>

      <div>
        {coins.map((a, index) => {
          return (
            <Link to={a.id}>
              <div
                key={index}
                className="flex justify-between items-center m-3 hover: cursor-pointer"
              >
                <div className=" flex">
                  <div className="  overflow-hidden">
                    <img
                      className="h-7 w-7 rounded-full"
                      src={a?.item?.small}
                    />
                  </div>
                  <div className=" text-sm font-semibold ml-1">
                    {a?.item?.name} ({a?.item?.symbol})
                  </div>
                </div>
                <div className="flex  ">
                  <div
                    className={`flex items-center w-16 h-6 text-center text-sm mr-2 justify-center rounded-full ${
                      a?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "hover:bg-red-700"
                        : "hover:bg-green-700"
                    } hover:text-white ${
                      a?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "text-red-700 border-red-700"
                        : "text-green-700 border-green-700"
                    } border-[1px] border-${
                      a?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "red-700"
                        : "green-700"
                    }`}
                  >
                    {a?.item?.data?.price_change_percentage_24h.usd < 0 ? (
                      <>
                        {a?.item?.data?.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </>
                    ) : (
                      <>
                        +
                        {a?.item?.data?.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </>
                    )}
                    {/* {coin?.market_data?.price_change_percentage_24h.toFixed(2)}% */}
                  </div>
                  <div
                    className={`flex items-center w-6 h-6 text-center font-semibold justify-center rounded-full ${
                      a?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "hover:bg-red-700"
                        : "hover:bg-green-700"
                    } hover:text-white ${
                      a?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "text-red-700 border-red-700"
                        : "text-green-700 border-green-700"
                    } border-[1px] border-${
                      a?.item?.data?.price_change_percentage_24h.usd < 0
                        ? "red-700"
                        : "green-700"
                    }`}
                  >
                    <>
                      {a?.item?.data?.price_change_percentage_24h.usd < 0 ? (
                        <TrendingDownRoundedIcon />
                      ) : (
                        <TrendingUpRoundedIcon />
                      )}
                    </>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TrendingCoins24;
