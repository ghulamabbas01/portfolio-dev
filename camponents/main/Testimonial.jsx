import React from "react";
// import config file
import { TestimonialData } from "./config";
// import material ui
import { Stack, Typography, Box, Rating, Avatar } from "@mui/material";
// react slider
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Stack
        className="mx-auto text-center  items-center"
        spacing={2}
        id="CustomerSay">
        <Typography variant="h2" fontSize={36} fontWeight={600}>
          Recommendations
        </Typography>
        <Typography
          variant="body1"
          className="md:w-[700px] w-[300px] text-center mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Typography>
      </Stack>
      <Slider {...settings}>
        {TestimonialData?.map((data) => (
          <Stack
            spacing={4}
            className="bg-white p-5 border-[1px]"
            key={data?.id}>
            <Stack spacing={1.5}>
              <Rating size="large" />
              <Typography variant="h4" className="text-[18px] font-[500]">
                {data?.work}
              </Typography>
              <Typography variant="body1" className="text-[#767676]">
                {data?.description}
              </Typography>
            </Stack>
            <Stack className="flex-row items-center gap-6">
              <Avatar src={data?.avatar} alt="avatar" className="w-20 h-20" />
              <Box>
                <Typography
                  variant="h4"
                  className="text-[18px] font-[500] mb-1">
                  {data?.name}
                </Typography>
                <Typography variant="body1" className="text-[#767676]">
                  {data?.profaction}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
