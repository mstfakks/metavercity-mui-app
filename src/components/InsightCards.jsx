"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/motion/motion";
import { Box, Typography } from "@mui/material";
import WithoutSsr from "./WithoutSsr";

const InsightCards = ({ imgUrl, title, subTitle, index }) => {
  return (
    <WithoutSsr>
      <Box
        component={motion.div}
        variants={fadeIn("up", "spring", index * 0.7, 1.1)}
        sx={{
          display: "flex",
          "@media (min-width:768px)": {
            flexDirection: "row",
          },
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <img
          src={imgUrl}
          alt="planet-01"
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "32px",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: "1 1 0%",
              "@media (min-width: 768px)": {
                marginLeft: "62px",
              },
              display: "flex",
              flexDirection: "column",
              maxWidth: "650px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Sriracha",
                fontWeight: "400",
                "@media (min-width: 1024px)": {
                  fontSize: "42px",
                },
                fontSize: "26px",
                color: "white",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sriracha",
                marginTop: "16px",
                fontWeight: "400",
                "@media (min-width: 1024px)": {
                  fontSize: "20px",
                },
                fontSize: "14px",
                color: "rgb(199,199,199)",
              }}
            >
              {subTitle}
            </Typography>
          </Box>
          <Box
            sx={{
              "@media (min-width: 1024px)": {
                display: "flex",
              },
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              borderRadius: "9999px",
              backgroundColor: "transparent",
              borderWidth: "5px",
              borderColor: "white",
            }}
          >
            <img
              src="arrow.svg"
              alt="arrow"
              style={{
                width: "40%",
                height: "40%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default InsightCards;
