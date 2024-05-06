import React from "react";

const convertDate = (number) => {
  var myDate = new Date(number);
  return myDate.getDate() + "/" + (myDate.getMonth() + 1);
};

export default convertDate;
