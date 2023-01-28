"use client";

import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import WithoutSsr from "./WithoutSsr";

const Navbar = () => {
  return (
    <WithoutSsr>
      <Box
        component={motion.div}
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 140,
            },
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              delay: 1,
            },
          },
        }}
        initial="hidden"
        whileInView={"show"}
        sx={{
          "@media (max-width: 640px)": {
            paddingX: "64px",
          },
          paddingX: "24px",
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
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        <Box
          sx={{
            "@media (min-width: 1536px)": {
              maxWidth: 1280,
            },
            width: "100%",
            marginX: "auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <img
            src="/search.svg"
            alt="search"
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
          <Typography
            sx={{
              color: "white",
              fontFamily: "Sriracha",
              fontSize: "28px",
              lineHeight: "32px",
              fontWeight: "bold",
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
