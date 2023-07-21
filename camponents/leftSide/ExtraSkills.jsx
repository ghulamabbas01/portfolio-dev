import React from "react";
import Image from "next/image";
// import material ui
import { Stack, Typography, Box } from "@mui/material";

const ExtraSkills = () => {
  return (
    <Stack spacing={2}>
      {/* Add your extra skills here */}
      <Typography variant="h6">Skills</Typography>
      {/* Bootstrap, Materialize */}
      <Stack spacing={1}>
        <Box className="flex  items-center gap-2 ">
          <Box>
            <Image
              src="/left-sidebar-images/extraSkillIcons.svg"
              alt="extra skill"
              width={12}
              height={12}
            />
          </Box>
          <Typography variant="body1">Bootstrap, Materialize</Typography>
        </Box>
        {/* Stylus, Sass, Less */}
        <Box className="flex items-center gap-2">
          <Box>
            <Image
              src="/left-sidebar-images/extraSkillIcons.svg"
              alt="extra skill"
              width={12}
              height={12}
            />
          </Box>
          <Typography variant="body1">Stylus, Sass, Less</Typography>
        </Box>
        {/* Gulp, Webpack, Grunt */}
        <Box className="flex items-center gap-2">
          <Box>
            <Image
              src="/left-sidebar-images/extraSkillIcons.svg"
              alt="extra skill"
              width={12}
              height={12}
            />
          </Box>
          <Typography variant="body1">Gulp, Webpack, Grunt</Typography>
        </Box>
        {/* GIT Knowledge */}
        <Box className="flex items-center gap-2">
          <Box>
            <Image
              src="/left-sidebar-images/extraSkillIcons.svg"
              alt="extra skill"
              width={12}
              height={12}
            />
          </Box>
          <Typography variant="body1">GIT Knowledge</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ExtraSkills;
