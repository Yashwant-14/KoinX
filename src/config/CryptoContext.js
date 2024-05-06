import React, { Children, createContext, useContext, useState } from "react";
// const Crypto = createContext({
//   const [alert,setAlert]=useState("")
// });
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "succes",
  });
  return (
    <Crypto.Provider value={{ alert, setAlert }}>{children}</Crypto.Provider>
  );
};

export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
};
