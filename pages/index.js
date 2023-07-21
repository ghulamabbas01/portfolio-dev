import { Inter } from "next/font/google";
// import material ui
import { Grid, Stack, Box, Typography } from "@mui/material";
// import hooks
import { useState, useEffect } from "react";
// import { Component }
import LeftSideBar from "@/camponents/leftSide/index";
import RightManuBar from "@/camponents/rightSide";
import Main from "@/camponents/main/index";
import MobileDrawer from "@/camponents/leftSide/MobileDrawer";
import MobileManu from "@/camponents/rightSide/MobileManu";

// import here react loader
// import HashLoader from "react-spinners/HashLoader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <div>
      {/* {loading ? (
        <HashLoader color="#FFB400" loading size={100} speedMultiplier={1} />
      ) : (
       
      )} */}
      <>
        <Stack
          display={{ md: "none", xs: "flex" }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="bg-white  border-[1px] p-3 fixed w-full top-0 z-50">
          <Box>
            <MobileDrawer />
          </Box>
          <Box>
            <Typography
              variant="h2"
              fontSize={24}
              fontWeight={600}
              letterSpacing={2}>
              Ghulam Abbas
            </Typography>
          </Box>
          <Box>
            <MobileManu />
          </Box>
        </Stack>
        <Grid container>
          <Grid
            item
            md={3}
            className="left-side-minu "
            display={{ md: "block", xs: "none" }}>
            <LeftSideBar />
          </Grid>
          <Grid item md={8} xs={12} className="md:px-4 z-10">
            <Main />
          </Grid>
          <Grid item md={1} className="right-sidebar-minu">
            <RightManuBar />
          </Grid>
        </Grid>
      </>
    </div>
  );
}
