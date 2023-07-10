import React, { useState } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness3RoundedIcon from "@mui/icons-material/Brightness3Rounded";

const LightModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("light");
  };

  return (
    <button onClick={toggleLightMode} className="cursor-pointer">
      {isLightMode ? <WbSunnyRoundedIcon /> : <Brightness3RoundedIcon />}
    </button>
  );
};

export default LightModeToggle;
