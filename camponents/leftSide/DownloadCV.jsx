import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
// import CV from "../cv/Abbas.pdf";

const DownloadCV = () => {
  return (
    <>
      <Button className="bg-[#FFB400] hover:bg-[#d69d18] p-3 f-full text-black font-semibold">
        <Link href="#" download>
          Download CV
        </Link>
      </Button>
    </>
  );
};

export default DownloadCV;
