import React from "react";
// import next components 
import Image from "next/image";
// import material ui
import { Stack, Typography, Box, Grid, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box className="Hero-component md:h-[450px]">
      <Grid
        container
        spacing={2}
        className="justify-center items-center py-10 ">
        <Grid item xs={12} md={8}>
          <Stack spacing={3} className="profile-text">
            <Typography variant="h1" fontSize={48} fontWeight={600}>
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
                className="px-8 py-4 bg-[#FFB400] hover:bg-[#cf9817] font-semibold text-xl text-black"
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none">
                    <path
                      d="M17.07 16.363L11.414 22.021L10 20.606L15.657 14.95L10.707 10H22.02V21.313L17.07 16.363Z"
                      fill="black"
                    />
                  </svg>
                }>
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
