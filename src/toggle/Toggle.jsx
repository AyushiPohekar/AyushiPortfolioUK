import React from "react";
import "./Toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../components/Context";
const Toggle = () => {
    const theme=useContext(ThemeContext);

    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className="t">
       
        
      <img
        src="https://play-lh.googleusercontent.com/zNElWgztps_4Tj918_V3SekDty-P_7w7DuvIbLd2n1p2ng5NdFetCBZB7Laz8j4mH60"
        className="t-icon"
      />
      <img
        src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png"
        className="t-icon"
      />
       <div className="t-button" onClick={handleClick}  style={{ left: theme.state.darkMode ? 0 : 25 }}>
        
        </div>
    </div>
   
  );
};

export default Toggle;
