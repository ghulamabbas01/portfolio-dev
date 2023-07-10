import React from "react";
// import material ui components
import { Box, Typography, Stack } from "@mui/material";

const Status = () => {
  return (
    <Stack spacing={1}>
      <Box className="flex justify-between">
        <Typography variant="body1" className="bg-[#FFB400] px-1">
          Age:
        </Typography>
        <Typography variant="body1">24</Typography>
      </Box>
      <Box className="flex justify-between">
        <Typography variant="body1" className="bg-[#FFB400] px-1">
          Residence:
        </Typography>
        <Typography variant="body1">BD</Typography>
      </Box>
      <Box className="flex justify-between">
        <Typography variant="body1" className="bg-[#FFB400] px-1">
          Freelance:
        </Typography>
        <Typography variant="body1" className="text-[#7EB942]">
          Available
        </Typography>
      </Box>
      <Box className=" justify-between  ">
        <Typography variant="body1" className="bg-[#FFB400] px-1 mb-2">
          Address:
        </Typography>
        <Typography
          variant="body1"
          className="w-[180px] overflow-hidden whitespace-nowrap text-ellipsis"
        >
          Sargodha,Pakistan
        </Typography>
      </Box>
    </Stack>
  );
};

export default Status;
