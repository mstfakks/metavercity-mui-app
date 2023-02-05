"use client";

import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { navVariants } from "@/motion/motion";
import WithoutSsr from "./WithoutSsr";

const Navbar = () => {
  return (
    <WithoutSsr>
      <Box
        component={motion.div}
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        sx={{
          "@media (min-width: 640px)": {
            paddingRight: "64px",
            paddingLeft: "64px",
          },
          paddingRight: "24px",
          paddingLeft: "24px",
          paddingY: "32px",
          position: "relative",
        }}
      >
        <Box
          component={"div"}
          className="gradient-nav"
          sx={{
            position: "absolute",
            width: "50%",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
        />
        <Box
          sx={{
            "@media (min-width: 1536px)": {
              maxWidth: "1280px",
            },
            width: "100%",
            marginX: "auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <img
            src="/search.svg"
            alt="search"
            style={{ width: "24px", height: "24px", objectFit: "contain" }}
          />
          <Typography
            sx={{
              color: "white",
              fontFamily: "Sriracha",
              fontSize: "28px",
              lineHeight: "32px",
              fontWeight: "800",
              letterSpacing: "3px",
            }}
          >
            METAVERCITY
          </Typography>
          <img
            src="/menu.svg"
            alt="menu"
            style={{ width: "24px", height: "24px", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default Navbar;
