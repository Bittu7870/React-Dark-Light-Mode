import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const MyContext = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111827";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffff";
    }
  };

  const value = {
    mode,
    toggleMode,
  };
  return <GlobalContext.Provider value={value} {...props} />;
};

export default MyContext;
