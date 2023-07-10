import React from "react";
// import next components
import Image from "next/image";
import Link from "next/link";
// import material ui components
import { Box, Typography, Stack } from "@mui/material";
// import hear components
import { soialIcon } from "../config";
import Languages from "./Languages";
import Status from "./Status";
import Skills from "./Skills";

const RightSidebar = () => {
  return (
    <>
      <Box className="right-sidebar-Main-Box ">
        <Box className="relative w-[150px] h-[150px] bg-slate-200 rounded-full  ">
          <Image
            src="/right-sidebar-images/profile-pic.png"
            alt="Profil"
            layout="fill"
          />
          <Box
            component="span"
            className="onlineDote absolute w-3 h-3 bg-[#7EB942] rounded-full right-2 top-28"
          />
        </Box>
        <Stack spacing={2} className="mt-8">
          {/* profile and social link start  */}
          <Box>
            <Typography variant="h6" className="text-xl font-medium">
              Ghulam Abbas
            </Typography>
            <Typography
              variant="h6"
              className="color-[#767676] font-light text-[15px] mt-1"
            >
              Front End Developer
            </Typography>
          </Box>
          {/* social Link add thorw the config file  */}
          {/* if you add a your own social link edit the config,js file */}
          <Box className="flex items-center gap-4 pb-5">
            {soialIcon.map((data) => (
              <Link
                href={`${data.facebookUrl}`}
                className="social-Icon"
                target="_blank"
                key={data.id}
              >
                <Image src={data.Image} alt="Profil" width={14} height={14} />
              </Link>
            ))}
          </Box>
          {/* social Link add thorw the config file  */}
          <hr className="text-[#F0F0F6]" />
          {/* profile and social link end */}
          {/* status component start */}
          <Stack spacing={2} className="pb-6 pt-6">
            <Status />
          </Stack>
          {/* status component end */}
          <hr className="text-[#F0F0F6]" />
          {/* Languages component start */}
          <Stack spacing={2} className="pb-6 pt-6 text-left">
            <Languages />
          </Stack>
          {/* Languages component end */}
          <hr className="text-[#F0F0F6]" />
          {/* Skills component start */}
          <Stack spacing={2} className="pb-6 pt-6 text-left">
            <Skills />
          </Stack>
          {/* Skills component end */}
          <hr className="text-[#F0F0F6]" />
        </Stack>
      </Box>
    </>
  );
};

export default RightSidebar;
