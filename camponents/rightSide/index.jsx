import React from "react";
import Link from "next/link";
import Image from "next/image";

// import material ui comppnets
import { Stack, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { ManuBar } from "../config";

const index = () => {
  return (
    <Stack className="fixed top-0 right-0  md:flex sm:flex-none items-center ">
      {ManuBar.map((data) => (
        <Tooltip title={data.name} placement="top" arrow>
          <Link href={`${data.link}`}>
            <Box className="bg-[#FFB400] hover:bg-[#c7941e] rounded-full w-10 h-10 flex items-center justify-center my-5 ">
              <Image src={data.Image} alt="Profil" width={18} height={18} />
            </Box>
          </Link>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default index;
