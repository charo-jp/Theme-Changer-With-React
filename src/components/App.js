import React, { useState } from "react";
import Heading from "./Heading";
import createDictionary from "../createDictionary";
import emojis from "../dictionary";
import { ThemeContext } from "../theme-context";
import {Styles} from "../styles";

function App() {
  const [theme, setTheme] = useState({theme: "light", style: Styles.light});

  const changeTheme = () => {
    const body = document.querySelector("body");
    setTheme((prev) => {
      if (prev.theme === "light") {
        setTheme({theme: "dark", style: Styles.dark});
        body.style.background = "black";
      } else {
        setTheme({theme: "light", style: Styles.light});
        body.style.background = "#c0d2d4";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      <Heading />
      <div className={`dictionaries`}>{emojis.map(createDictionary)}</div>
    </ThemeContext.Provider>
  );
}

export default App;
