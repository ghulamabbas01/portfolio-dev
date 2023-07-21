import React from "react";
// import next components 
import Image from "next/image";
// import material ui
import { Stack, Typography, Box, Grid } from "@mui/material";
// import config
import { MyServicesData } from "./config";

const MyServices = () => {
  return (
    <Stack id="Services">
      <Stack className="mx-auto text-center " spacing={2}>
        <Typography variant="h2" fontSize={36} fontWeight={600}>
          My Services
        </Typography>
        <Typography
          variant="body1"
          className="md:w-[600px] w-[300px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Typography>
      </Stack>
      <Box className="md:mt-10 mt-5">
        <Grid container spacing={2}>
          {MyServicesData?.map((data) => (
            <Grid item xs={6} md={4} key={data?.id}>
              <Stack
                className="bg-white py-7 px-3 justify-center items-center h-full"
                spacing={3}>
                <Image
                  src={`${data?.image}`}
                  alt="coding"
                  width={68}
                  height={68}
                />
                <Stack spacing={1} className="text-center">
                  <Typography variant="h4" fontSize={18} fontWeight={500}>
                    {data?.name}
                  </Typography>
                  <Typography variant="body">{data?.description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default MyServices;
