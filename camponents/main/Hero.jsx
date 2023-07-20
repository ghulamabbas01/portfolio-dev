import React from "react";
import Image from "next/image";
// import material ui
import { Stack, Typography, Box, Grid, Button } from "@mui/material";
// material icons
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const Hero = () => {
  return (
    <Box className="Hero-component ">
      <Grid container spacing={2} className="justify-center items-center md:py-0 py-10">
        <Grid item xs={12} md={8} >
          <Stack spacing={3} className="profile-text">
            <Typography variant="h1" className="text-5xl font-semibold">
              I'm Ghulam Abbas <br />
              <Box
                component="span"
                className="text-5xl font-semibold text-[#FFB400]">
                Front-end{" "}
              </Box>
              Developer
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </Typography>
            <Box>
              <Button
                variant="contained"
                className="px-8 py-4 bg-[#FFB400] hover:bg-[#cf9817] text-lg text-black"
                endIcon={<ArrowRightAltRoundedIcon />}>
                HIRE ME
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} className="profile-img ">
          <Box className="relative w-[300px] h-[500px] ">
            <Image
              src="/main-imgaes/Your-Image.svg"
              alt="profile"
              layout="fill"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
