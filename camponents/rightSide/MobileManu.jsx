import * as React from "react";
// import material ui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Stack } from "@mui/material";
// import config file
import { ManuBar } from "../config";
// import next components
import Link from "next/link";
import Image from "next/image";
// import material icon
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function MobileManu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 100 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <Stack justifyContent="center" alignItems="center">
          {ManuBar.map((data) => (
            <Link href={`${data.link}`}>
              <Box className="bg-[#FFB400] hover:bg-[#c7941e] rounded-full w-10 h-10 flex items-center justify-center my-5 ">
                <Image src={data.Image} alt="Profil" width={18} height={18} />
              </Box>
            </Link>
          ))}
        </Stack>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <DehazeIcon
            onClick={toggleDrawer(anchor, true)}
            sx={{ cursor: "pointer", fontSize: "28px" }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
