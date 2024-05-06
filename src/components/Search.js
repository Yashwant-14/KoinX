import React, { useState, useEffect } from "react";
import { useTopRankedCoins } from "../utils/useTopRankedCoins";
import CoinDetails from "../utils/CoinDetails";
import CarouselCard from "../utils/CarouselCard";

const Search = () => {
  const trending = useTopRankedCoins();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = trending.filter(
      (coin) =>
        coin?.name.toLowerCase().includes(query.toLowerCase()) ||
        coin?.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  }, [query, trending]);

  if (!data) {
    return <div>NO Result Found !!</div>;
  }

  return (
    <div className=" mr-[5%] ml-[5%] flex-col flex items-center justify-center">
      <div className="mt-10 mb-5 w-[60%] border-2 rounded-full">
        <input
          className="w-[100%] h-10 pl-5 pr-10 rounded-full border-none outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {data.map((coin, index) => (
          <CarouselCard coin={coin} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Search;
