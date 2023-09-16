import React, { createContext, useState } from "react";
import d from "../data.json";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data,setData] = useState(d);
  
  const [file,setFile] = useState("Button 1");

  //console.log(data);

  const val = {data,file,setFile}
  return <Context.Provider value={val}>{children}</Context.Provider>;
};

export default ContextProvider;
