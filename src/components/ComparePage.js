import React, { useEffect, useState } from "react";
import Header from "./Header";
import SelectCoins from "../utils/SelectCoins";
import SelectDays from "../utils/SelectDays";
import { getCoinData } from "../utils/getCoinData";
import CoinDetails from "../utils/CoinDetails";
import CoinInfo from "./CoinInfo";
import { getCoinPrice } from "../utils/getCoinPrice";
import PriceType from "./PriceType";
import convertDate from "../utils/convertDate";
import CoinChart from "./CoinChart";
const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [coin1, setCoin1] = useState(null);
  const [coin2, setCoin2] = useState(null);
  const [days, setDays] = useState(30);
  const [crypto1Price, setCrypto1Price] = useState({});
  const [crypto2Price, setCrypto2Price] = useState({});
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const data = await getCoinData(crypto1);
        const price = await getCoinPrice(crypto1, days); // Fetch coin data using getCoinData function
        console.log(data, "from compare page");
        console.log(price, "from compare page crypto1");
        setCoin1(data);
        setCrypto1Price(price);
        // Update the coin state with the fetched data
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData(); // Call the fetchCoinData function when component mounts or coinId changes
  }, [crypto1]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const data = await getCoinData(crypto2); // Fetch coin data using getCoinData function
        const price = await getCoinPrice(crypto2, days);
        setCoin2(data);
        setCrypto2Price(price);
        console.log(price, "from compare page crypto");
        // Update the coin state with the fetched data
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData(); // Call the fetchCoinData function when component mounts or coinId changes
  }, [crypto2]);

  useEffect(() => {
    if (
      crypto1Price &&
      Object.keys(crypto1Price).length > 0 &&
      crypto2Price &&
      Object.keys(crypto2Price).length > 0
    ) {
      console.log(crypto1Price, "from compare page crypto inside useffect");
      setChartData({
        labels: crypto1Price[priceType].map((price) =>
          convertDate(new Date(price[0]))
        ),
        datasets: [
          {
            label: crypto1,
            data: crypto1Price[priceType].map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisID: "crypto1",
          },
          {
            label: crypto2,
            data: crypto2Price[priceType].map((price) => price[1]),
            borderColor: "#61c96f",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisID: "crypto2",
          },
        ],
      });
    }
  }, [crypto1Price, crypto2Price, priceType]);

  const handleDaysChange = async (event) => {
    const fetchCoinData = async () => {
      try {
        const data1 = await getCoinPrice(crypto1, days);
        const data2 = await getCoinPrice(crypto2, days);
        if (data1 && data2) {
          setCrypto1Price(data1);
          setCrypto2Price(data2);

          setChartData({
            labels: data1[priceType].map((price) =>
              convertDate(new Date(price[0]))
            ),
            datasets: [
              {
                label: crypto1,
                data: data1[priceType].map((price) => price[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: false,
                tension: 0.25,
                pointRadius: 0,
                yAxisID: "crypto1",
              },
              {
                label: crypto2,
                data: data2[priceType].map((price) => price[1]),
                borderColor: "#61c96f",
                borderWidth: 2,
                fill: false,
                tension: 0.25,
                pointRadius: 0,
                yAxisID: "crypto2",
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
      labels: crypto1Price[newType].map((price) =>
        convertDate(new Date(price[0]))
      ),
      datasets: [
        {
          label: crypto1,
          data: crypto1Price[priceType].map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: crypto2,
          data: crypto2Price[priceType].map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
    setPriceType(newType);
  };

  if (chartData) console.log(chartData, "compare page chart data");

  if (!coin1 || !coin2 || !chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[80%]  min-w-[1000px]">
        <SelectCoins
          crypto1={crypto1}
          setCrypto1={setCrypto1}
          crypto2={crypto2}
          setCrypto2={setCrypto2}
        />
      </div>

      <CoinDetails coin={coin1} />
      <CoinDetails coin={coin2} />

      {chartData && Object.keys(chartData).length > 0 && (
        <div className=" w-[80%]  min-w-[1000px]  justify-between items-center  p-[1%] ml-[4%] mr-[4%]  mt-[1%] mb-[2%] rounded-2xl shadow-xl border-1 text-lg font-semibold">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
          <PriceType
            priceType={priceType}
            handlePriceTypeChange={handlePriceTypeChange}
          />

          <CoinChart
            chartData={chartData}
            priceType={priceType}
            multiAxis={true}
          />
        </div>
      )}

      <div className=" w-[80%] min-w-[1000px] flex  items-center  p-[1%] ml-[4%] mr-[4%]   mb-[2%] rounded-2xl shadow-xl border-1 text-md ">
        <CoinInfo heading={coin1?.name} discription={coin1?.description?.en} />
      </div>

      <div className=" w-[80%] min-w-[1000px] flex  items-center  p-[1%] ml-[4%] mr-[4%]   mb-[2%] rounded-2xl shadow-xl border-1 text-md ">
        <CoinInfo heading={coin2?.name} discription={coin2?.description?.en} />
      </div>
    </div>
  );
};

export default ComparePage;
