import React, { useState } from "react";
import { useTopRankedCoins } from "./useTopRankedCoins";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectCoins = ({ crypto1, setCrypto1, crypto2, setCrypto2 }) => {
  const allCoins = useTopRankedCoins();
  const style = {
    height: "2.5rem",
    width: "7.4rem",
    color: "var(--black)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--black)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--black)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  const handleCoinChange = (event, isCoin2) => {
    if (isCoin2) {
      setCrypto2(event.target.value);
    } else {
      setCrypto1(event.target.value);
    }
  };
  if (!allCoins) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" flex items-center p-7 ">
      <div className="mr-3 font-semibold text-lg">Crypto 1</div>
      <div>
        <Select
          sx={style}
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
        >
          {allCoins
            .filter((item) => item.id != crypto2)
            .map((coin) => (
              <MenuItem value={coin?.id}>{coin?.name}</MenuItem>
            ))}
        </Select>
      </div>

      <div className="mr-3 ml-10 font-semibold text-lg">Crypto 2</div>
      <div>
        <Select
          sx={style}
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
        >
          {allCoins
            .filter((item) => item.id != crypto1)
            .map((coin) => (
              <MenuItem value={coin?.id}>{coin?.name}</MenuItem>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectCoins;
