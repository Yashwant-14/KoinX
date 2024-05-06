import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto"; //Dont get rid of this

import { plugin } from "postcss";
import { convertNumber } from "../utils/convertNumber";

const CoinChart = ({ chartData, priceType, multiAxis }) => {
  var options;
  if (multiAxis) {
    options = {
      plugins: {
        legend: {
          display: multiAxis ? true : false,
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        crypto1: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType == "prices") return "$" + convertNumber(value);
              else {
                return convertNumber(value);
              }
            },
          },
        },
        crypto2: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType == "prices") return "$" + convertNumber(value);
              else {
                return convertNumber(value);
              }
            },
          },
        },
      },
    };
  } else {
    options = {
      plugins: {
        legend: {
          display: multiAxis ? true : false,
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        y: {
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType == "prices") return "$" + convertNumber(value);
              else {
                return convertNumber(value);
              }
            },
          },
        },
      },
    };
  }

  return <Line data={chartData} options={options} />;
};

export default CoinChart;
