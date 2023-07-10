import Image from "next/image";
import { Inter } from "next/font/google";
import { Grid } from "@mui/material";

// import { Component }
import LeftSideBar from "@/camponents/leftSide/index";
import RightManuBar from "@/camponents/rightSide";
// import LightModeToggle from "@/contexts/LightModeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <LightModeToggle /> */}
      <Grid container>
        <Grid item md={3} xs={12} className="left-side-minu">
          <LeftSideBar />
        </Grid>
        <Grid item md={8} xs={12} className="px-4">
          8
        </Grid>
        <Grid item md={1} xs={12} className="right-sidebar-minu">
          <RightManuBar />
        </Grid>
      </Grid>
    </>
  );
}
