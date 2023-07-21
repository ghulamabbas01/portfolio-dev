import React from "react";
// import material ui components
import { Box, Typography, Stack } from "@mui/material";

// if you change languages values so change width and aria-valuemax

const Languages = () => {
  return (
    <Box>
      <Typography variant="h6">Languages</Typography>
      <Stack spacing={2} className="mt-4">
        {/*--------------- urdu  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">Urdu</Typography>
            <Typography variant="body1">100%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[100%] h-[2px] rounded"
              aria-valuemax="100"
            />
          </Box>
        </Stack>
        {/*--------------------- urdu  -------------*/}
        {/*--------------- english  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">English</Typography>
            <Typography variant="body1">70%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[70%] h-[2px] rounded"
              aria-valuemax="70"
            />
          </Box>
        </Stack>
        {/*--------------------- English  -------------*/}
        {/*--------------- Hindi  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">Hindi</Typography>
            <Typography variant="body1">80%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[80%] h-[2px] rounded"
              aria-valuemax="80"
            />
          </Box>
        </Stack>
        {/*--------------------- Hindi  -------------*/}
      </Stack>
    </Box>
  );
};

export default Languages;
