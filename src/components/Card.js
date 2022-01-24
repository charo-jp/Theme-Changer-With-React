import React, {useContext} from "react";
import { ThemeContext } from "../theme-context";

function Card(props) {
  const theme = useContext(ThemeContext);

  return <div className="dictionary">
    <dl className = "term"  style={theme.theme.style.directory}>
      <p className = "emoji">{props.src}</p>
      <dt className = "a" style={theme.theme.style.a}>{props.term}</dt>
      <dd className = "def" style={theme.theme.style.def}>{props.def}</dd>
    </dl>
  </div>
}

export default Card;