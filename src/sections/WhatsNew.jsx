"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/motion/motion";
import { CloseFetaures, TypingText, TitleText } from "@/components";
import { newFeatures } from "@/constants";
import { Box, Typography } from "@mui/material";
import WithoutSsr from "@/components/WithoutSsr";

const WhatsNew = () => {
  return (
    <WithoutSsr>
      <Box
        sx={{
          "@media (min-width: 640px)": {
            padding: "64px",
          },
          "@media (min-width: 290px) ": {
            padding: "32px",
          },
          marginTop: "70px",
          paddingX: "24px",
          paddingY: "48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          sx={{
            "@media (min-width: 1536px)": {
              maxWidth: "1280px",
            },
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            "@media (min-width: 1024px)": {
              flexDirection: "row",
            },
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Box
            component={motion.div}
            variants={fadeIn("right", "tween", 0.2, 1)}
            sx={{
              display: "flex",
              flex: 0.75,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TypingText title="| What's New ?" />
            <TitleText title={<>What's new about Metavercity ?</>} />
            <Box
              sx={{
                marginTop: "48px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              {newFeatures.map((fetaure) => (
                <CloseFetaures key={fetaure.title} {...fetaure} />
              ))}
            </Box>
          </Box>
          <Box
            component={motion.div}
            variants={planetVariants("right")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 1 0%",
            }}
          >
            <img
              src="/whats-new.png"
              alt="whats-new"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default WhatsNew;
