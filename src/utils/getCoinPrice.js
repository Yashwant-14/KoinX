import { HistoricalChart } from "../config/api";
export const getCoinPrice = async (id, days) => {
  try {
    // Fetch data for the specified coinId
    const data = await fetch(HistoricalChart(id, days)); // Use coinId instead of hardcoding "bitcoin"
    // Parse the response as JSON
    const dataCoin = await data.json();
    // Log the fetched data
    console.log(dataCoin);
    // Return the fetched data
    return dataCoin;
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Error fetching coin data:", error);
  }
};
