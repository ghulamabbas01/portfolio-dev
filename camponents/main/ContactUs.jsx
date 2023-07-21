import React from "react";
// import matreial ui
import { Box, Grid, Stack, Typography, TextField, Button } from "@mui/material";
// import next components 
import Image from "next/image";
import { useRouter } from "next/router";

const ContactUs = () => {
  const router = useRouter();
  return (
    <Box id="Contactus">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" fontSize={30} fontWeight={700}>
            Leave Us Your Info
          </Typography>
          <Stack
            className="mt-12 bg-white px-7 py-[52px] border-[1px] shadow-sm"
            spacing={3}>
            {/* name textfield start */}
            <Stack spacing={2}>
              <Typography>Your Full Name ( Required)</Typography>
              <TextField
                className="input"
                id="outlined-multiline-flexible"
                name="name"
                placeholder="Full Name"
              />
            </Stack>
            {/* name textfield end  */}
            {/* Your Email start */}
            <Stack spacing={2}>
              <Typography>Your Email ( Required)</Typography>
              <TextField
                className="input"
                id="outlined-multiline-flexible"
                placeholder="Your Email"
                name="email"
              />
            </Stack>
            {/* Your Email  end  */}
            {/* Subject start */}
            <Stack spacing={2}>
              <Typography>Subject</Typography>
              <TextField
                className="input"
                id="outlined-multiline-flexible"
                placeholder="Subject"
                name="subject"
              />
            </Stack>
            {/* Subject end  */}
            {/* Your Message start */}
            <Stack spacing={2}>
              <Typography>Your Message</Typography>
              <TextField
                className="input"
                id="outlined-multiline-static"
                name="message"
                placeholder="Message"
                multiline
                rows={6}
              />
            </Stack>
            {/* Your Message end  */}
            <Box>
              <button
                type="button"
                onClick={() => router.replace("")}
                className="bg-[#FFB400] font-medium text-black px-10 py-2 hover:bg-[#c28f18]">
                Send Message
              </button>
            </Box>
          </Stack>
        </Grid>
        {/* left side bar  */}
        <Grid item xs={12} md={5}>
          <Typography variant="h2" fontSize={30} fontWeight={700}>
            Contact Information
          </Typography>
          <Stack className="mt-12 mb-10 " spacing={3}>
            {/* location box  */}
            <Box className="flex flex-col justify-center items-center px-7 py-9 bg-white text-center border-[1px] shadow-sm">
              {/* top icon  */}
              <Box className="w-10 h-10 bg-[#FFB400] flex justify-center rounded-full">
                <Image
                  src="/main-imgaes/icons/location.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </Box>
              {/* text box  */}
              <Stack spacing={2} className="mt-5 w-full ">
                <Box className="flex justify-between">
                  <Typography variant="body1">Country:</Typography>
                  <Typography variant="body1">Bangladesh</Typography>
                </Box>
                <Box className="flex justify-between ">
                  <Typography variant="body1">City:</Typography>
                  <Typography variant="body1">Bangladesh</Typography>
                </Box>
                <Box className="flex justify-between ">
                  <Typography variant="body1">Streat:</Typography>
                  <Typography variant="body1">35 vhatara, Badda</Typography>
                </Box>
              </Stack>
            </Box>
            {/* location box end  */}

            {/* email box start  */}
            <Box className="flex flex-col justify-center items-center px-7 py-9 bg-white text-center border-[1px] shadow-sm ">
              {/* top icon  */}
              <Box className="w-10 h-10 bg-[#FFB400] flex justify-center rounded-full">
                <Image
                  src="/main-imgaes/icons/mail.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </Box>
              {/* text box  */}
              <Stack spacing={2} className="mt-5 w-full">
                <Box className="flex justify-between">
                  <Typography variant="body1">Email:</Typography>
                  <Typography variant="body1">
                    mrghulamabbas10@gmail.com
                  </Typography>
                </Box>
                <Box className="flex justify-between ">
                  <Typography variant="body1">Skype:</Typography>
                  <Typography variant="body1">@yourusername</Typography>
                </Box>
                <Box className="flex justify-between ">
                  <Typography variant="body1">Telegram:</Typography>
                  <Typography variant="body1">@yourusername</Typography>
                </Box>
              </Stack>
            </Box>
            {/* email box end  */}

            {/* mobile box start  */}
            <Box className="flex flex-col justify-center items-center px-7 py-9 bg-white text-center border-[1px] shadow-sm">
              {/* top icon  */}
              <Box className="w-10 h-10 bg-[#FFB400] flex justify-center rounded-full">
                <Image
                  src="/main-imgaes/icons/Mobile.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </Box>
              {/* text box  */}
              <Stack spacing={2} className="mt-5 w-full">
                <Box className="flex justify-between">
                  <Typography variant="body1">Support services:</Typography>
                  <Typography variant="body1">15369</Typography>
                </Box>
                <Box className="flex justify-between ">
                  <Typography variant="body1">Office:</Typography>
                  <Typography variant="body1">+58 (021)356 587 235</Typography>
                </Box>
                <Box className="flex justify-between ">
                  <Typography variant="body1">Personal:</Typography>
                  <Typography variant="body1">+92-308-1001503</Typography>
                </Box>
              </Stack>
            </Box>
            {/* mobile box end  */}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
