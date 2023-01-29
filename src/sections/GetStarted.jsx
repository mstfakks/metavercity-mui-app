"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/motion/motion";
import { TitleText, TypingText, GetStartStep } from "@/components";
import { startingFeatures } from "@/constants";
import WithoutSsr from "@/components/WithoutSsr";
import { Box } from "@mui/material";

const GetStarted = () => {
  return (
    <WithoutSsr>
      <Box
        sx={{
          "@media (min-width: 640px) ": {
            padding: "64px",
          },
          "@media (min-width: 290px) ": {
            padding: "32px",
          },
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
            variants={planetVariants("left")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 1 0%",
            }}
          >
            <img
              src="/get-started.png"
              alt="get-started"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            component={motion.div}
            variants={fadeIn("left", "tween", 0.2, 1)}
            sx={{
              display: "flex",
              flex: 0.75,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TypingText title="| How Metavercity Works" />
            <TitleText title={<>Get started with just a few clicks</>} />
            <Box
              sx={{
                marginTop: "31px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "370px",
                gap: "24px",
              }}
            >
              {startingFeatures.map((feature, index) => (
                <GetStartStep key={feature} number={index+1} text={feature} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default GetStarted;
