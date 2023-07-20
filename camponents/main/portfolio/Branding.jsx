import React from "react";
import Image from "next/image";
import Link from "next/link";
// import material ui
import { Typography, Box, Grid } from "@mui/material";

// Branding Data
export const BrandingData = [
  {
    id: "1",
    image: "/main-imgaes/portfoio-img/portfolio-1.png",
    projectName: "Project Name",
    smallDescription: "Discription",
    projectLink: "/",
  },
  {
    id: "2",
    image: "/main-imgaes/portfoio-img/portfolio-2.png",
    projectName: "Project Name",
    smallDescription: "Discription",
    projectLink: "/",
  },
  {
    id: "3",
    image: "/main-imgaes/portfoio-img/portfolio-3.png",
    projectName: "Project Name",
    smallDescription: "Discription",
    projectLink: "/",
  },
];

const Branding = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {BrandingData.map((data) => (
            <Grid item xs={6} md={4}>
              <Box
                className="bg-white relative ui-main-box transition-all"
                key={data.id}>
                <Image src={data.image} alt="img" width={310} height={300} />
                <Link
                  href={`${data.projectLink}`}
                  className="ui-main-box-text py-3 absolute h-full w-full top-0 left-0 ">
                  <Typography variant="h6" className="">
                    {data.projectName}
                  </Typography>
                  <Typography variant="body1">
                    {data.smallDescription}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Branding;
