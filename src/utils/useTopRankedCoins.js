import { TopRankedCoins } from "../config/api";
import { useEffect, useState } from "react";

export const useTopRankedCoins = () => {
  const [trending, setTrending] = useState([]);

  const [dataFetched, setDataFetched] = useState(false);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(TopRankedCoins);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      setTrending(json);
      setDataFetched(true);
    } catch (error) {}
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchTrendingCoins();
    }
  }, [dataFetched]);

  console.log("from useTopRankedCoins");

  return trending;
};
