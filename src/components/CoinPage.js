import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import CoinInfo from "./CoinInfo";
import CoinChart from "./CoinChart";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { getCoinData } from "../utils/getCoinData";
import { HistoricalChart } from "../config/api";
import { getCoinPrice } from "../utils/getCoinPrice";
import convertDate from "../utils/convertDate";
import SelectDays from "../utils/SelectDays";
import PriceType from "./PriceType";
import CoinDetails from "../utils/CoinDetails";

const CoinPage = () => {
  const { coinId } = useParams();
  const [days, setDays] = useState(30);
  const [coin, setCoin] = useState(null); // Initialize coin state to null
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [TotalChartData, setTotalChartData] = useState({});
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const data = await getCoinPrice(coinId, days); // Fetch coin data using getCoinData function
        if (data) {
          setTotalChartData(data);

          setChartData({
            labels: data[priceType].map((price) =>
              convertDate(new Date(price[0]))
            ),
            datasets: [
              {
                // data: Utils.numbers(NUMBER_CFG),
                data: data[priceType].map((price) => price[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(58, 128, 233, 0.1)",
                borderColor: "#3a80e9",
                pointRadius: 0,
              },
            ],
          });
        }
        // Update the coin state with the fetched data
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
    fetchCoinData(); // Call the fetchCoinData function when component mounts or coinId changes
  }, [coinId]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const data = await getCoinData(coinId); // Fetch coin data using getCoinData function
        setCoin(data);
        console.log(data, "from coin individual data");
        // Update the coin state with the fetched data
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData(); // Call the fetchCoinData function when component mounts or coinId changes
  }, [coinId]); // Fetch coin data whenever coinId changes

  // Fetch coin data whenever coinId changes

  // Render loading state if coin is still null
  const handleDaysChange = async (event) => {
    const fetchCoinData = async () => {
      try {
        const data = await getCoinPrice(coinId, days); // Fetch coin data using getCoinData function
        if (data) {
          setTotalChartData(data);
          console.log(data);

          setChartData({
            labels: data[priceType].map((price) =>
              convertDate(new Date(price[0]))
            ),
            datasets: [
              {
                // data: Utils.numbers(NUMBER_CFG),
                data: data[priceType].map((price) => price[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(58, 128, 233, 0.1)",
                borderColor: "#3a80e9",
                pointRadius: 0,
              },
            ],
          });
        }
        // Update the coin state with the fetched data
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
    fetchCoinData();
    setDays(event.target.value);
  };

  const handlePriceTypeChange = (event, newType) => {
    setChartData({
      labels: TotalChartData[newType].map((price) =>
        convertDate(new Date(price[0]))
      ),
      datasets: [
        {
          // data: Utils.numbers(NUMBER_CFG),
          data: TotalChartData[newType].map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
    setPriceType(newType);
  };

  if (!coin || !chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <CoinDetails coin={coin} />

      {chartData && Object.keys(chartData).length > 0 && (
        <div className=" w-[80%]  min-w-[1000px]  justify-between items-center  p-[1%] ml-[4%] mr-[4%]  mt-[1%] mb-[2%] rounded-2xl shadow-xl border-1 text-lg font-semibold">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
          <PriceType
            priceType={priceType}
            handlePriceTypeChange={handlePriceTypeChange}
          />

          <CoinChart chartData={chartData} multiAxis={false} />
        </div>
      )}

      <div className=" w-[80%] min-w-[1000px] flex  items-center  p-[1%] ml-[4%] mr-[4%]   mb-[2%] rounded-2xl shadow-xl border-1 text-md ">
        <CoinInfo heading={coin?.name} discription={coin?.description?.en} />
      </div>
    </div>
  );
};

export default CoinPage;
