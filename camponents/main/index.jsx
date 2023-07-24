import React from "react";
// import matreial ui
import { Box, Divider, Stack } from "@mui/material";
// import Component
import Hero from "./Hero";
import MyServices from "./MyServices";
import PricingPlane from "./PricingPlane";
import Testimonial from "./Testimonial";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Tabes from "./portfolio/Tabes";
import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";
import Brands from "./Brands";
import Footer from "./Footer";

import { motion } from "framer-motion";

const index = () => {
  return (
    <Stack className="main-component" mt={{ md: 0, xs: 7 }} spacing={9}>
      <Hero />
      <MyServices />
      <PricingPlane />
      <Testimonial />
      <Education />
      <WorkHistory />
      <Tabes />
      <Divider />
      <ContactUs />
      <GoogleMap />
      <Brands />
      {/* <BlogList /> */}
      <Footer />
    </Stack>
  );
};

export default index;
