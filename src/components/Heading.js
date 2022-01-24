import React, { useContext} from "react";
import { ThemeContext } from "../theme-context";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

function Heading() {
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    theme.changeTheme();
  }

  return (
    <header >
      <h1 >
        <span style = {theme.theme.style.header}>emojipeida</span>
      </h1>
      <FormControlLabel
        control={<Switch />}
        label={<Typography style = {theme.theme.style.def} onChange={changeTheme}>Dark Theme</Typography>}
        onChange={changeTheme}
      />
    </header>
  );
}

export default Heading;
