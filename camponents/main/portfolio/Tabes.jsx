import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import material ui
import { Stack, Typography, Box, Tab } from "@mui/material";
import UIDesign from "./UIDesign";
import WebTemplates from "./WebTemplates";
import Logo from "./Logo";
import Branding from "./Branding";

const Tabes = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* Education main heading  */}
      <Stack
        className="mx-auto text-center  items-center"
        spacing={2}
        id="Portfolio">
        <Typography variant="h2" fontSize={36} fontWeight={600}>
          Portfolio
        </Typography>
        <Typography
          variant="body1"
          className="md:w-[700px] w-[300px] text-center mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Typography>
      </Stack>
      {/* Education main heading  */}

      <Box
        sx={{
          width: "100%",
          typography: "body1",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="UI Design" value="1" className="tabes" />
              <Tab label="Web Templates" value="2" />
              <Tab label="Logo" value="3" />
              <Tab label="Branding" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <UIDesign />
          </TabPanel>
          <TabPanel value="2">
            <WebTemplates />
          </TabPanel>
          <TabPanel value="3">
            <Logo />
          </TabPanel>
          <TabPanel value="4">
            <Branding />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Tabes;
