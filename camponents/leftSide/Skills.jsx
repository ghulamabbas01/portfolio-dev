import React from "react";
// import material ui components
import { Box, Typography, Stack } from "@mui/material";

// if you change skill values so change width and aria-valuemax

const Skills = () => {
  return (
    <Box>
      {/* Add your skills here */}
      <Typography variant="h6">Skills</Typography>
      <Stack spacing={2} className="mt-4">
        {/*--------------- Html  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">HTML</Typography>
            <Typography variant="body1">90%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-[4px] rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[90%] h-[2px] rounded"
              aria-valuemax="90"
            />
          </Box>
        </Stack>
        {/*--------------------- html  -------------*/}
        {/*--------------- CSS  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">CSS</Typography>
            <Typography variant="body1">90%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[90%] h-[2px] rounded"
              aria-valuemax="90"
            />
          </Box>
        </Stack>
        {/*--------------------- CSS  -------------*/}
        {/*--------------- React JS  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">React JS</Typography>
            <Typography variant="body1">70%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[70%] h-[2px] rounded"
              aria-valuemax="70"
            />
          </Box>
        </Stack>
        {/*--------------------- React JS  -------------*/}
        {/*--------------- Bootstrap  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">WordPress</Typography>
            <Typography variant="body1">90%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[90%] h-[2px] rounded"
              aria-valuemax="90"
            />
          </Box>
        </Stack>
        {/*--------------------- Bootstrap  -------------*/}
        {/*--------------- Javascript  ---------------- */}
        <Stack spacing={1}>
          <Box className="flex justify-between ">
            <Typography variant="body1">Javascript</Typography>
            <Typography variant="body1">50%</Typography>
          </Box>
          <Box className="w-full border border-[#FFB400] h-1 rounded  ">
            <div
              className="progress-bar bg-[#FFB400] w-[50%] h-[2px] rounded"
              aria-valuemax="50"
            />
          </Box>
        </Stack>
        {/*--------------------- Javascript  -------------*/}
      </Stack>
    </Box>
  );
};

export default Skills;
