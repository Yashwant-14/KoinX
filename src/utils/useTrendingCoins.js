import { TrendingCoins } from "../config/api";
import { useEffect } from "react";

const useTrendingCoins=(trending, setTrending)=>{

    const fetchTrendingCoins = async()=>{
        const data= await fetch(TrendingCoins);

        const json= await data.json();
        
        setTrending(json?.coins);
        console.log(trending);
        
        
    }
    useEffect(()=>{
        fetchTrendingCoins();
        console.log(trending);
    },[]);
    console.log("form useTrendingCoins")
        
    
}
export default useTrendingCoins;