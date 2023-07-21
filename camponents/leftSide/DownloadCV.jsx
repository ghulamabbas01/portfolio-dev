import React from "react";
import Link from "next/link";
// import CV from "../cv/Abbas.pdf";
import { useRouter } from "next/router";

const DownloadCV = () => {
  const router = useRouter();
  return (
    <>
      <button
        type="button"
        onClick={() => router.replace("")}
        className="bg-[#FFB400] hover:bg-[#d69d18] p-3 f-full text-black font-semibold">
        <Link href="#" download>
          Download CV
        </Link>
      </button>
    </>
  );
};

export default DownloadCV;
