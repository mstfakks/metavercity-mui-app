"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/motion/motion";
import { Box } from "@mui/material";

export const TypingText = ({ title, textStyles }) => {
  return (
    <Box
      component={motion.p}
      variants={textContainer}
      sx={{
        fontWeight: "400",
        fontSize: "16px",
        color: "rgb(199,199,199)",
        textAlign: textStyles,
      }}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Box>
  );
};

export const TitleText = ({ title, textStyles }) => {
  return (
    <Box
      component={motion.h2}
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      sx={{
        marginTop: "8px",
        fontWeight: "700",
        "@media (min-width: 768px)": {
          fontSize: "64px",
        },
        fontSize: "40px",
        color: "white",
        textAlign: textStyles,
      }}
    >
      {title}
    </Box>
  );
};
