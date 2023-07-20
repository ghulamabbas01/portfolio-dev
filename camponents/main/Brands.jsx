import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
const Brands = () => {
  return (
    <Stack>
      <Grid container spacing={4}>
        <Grid item xs={6} md={3} justifyContent="center" display="flex">
          <Image
            src="/main-imgaes/brands/brand-1.svg"
            alt=""
            width={140}
            height={140}></Image>
        </Grid>
        <Grid item xs={6} md={3} justifyContent="center" display="flex">
          <Image
            src="/main-imgaes/brands/brand-2.svg"
            alt=""
            width={140}
            height={140}></Image>
        </Grid>
        <Grid item xs={6} md={3} justifyContent="center" display="flex">
          <Image
            src="/main-imgaes/brands/brand-3.svg"
            alt=""
            width={140}
            height={140}></Image>
        </Grid>
        <Grid item xs={6} md={3} justifyContent="center" display="flex">
          <Image
            src="/main-imgaes/brands/brand-4.svg"
            alt=""
            width={140}
            height={140}></Image>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Brands;
