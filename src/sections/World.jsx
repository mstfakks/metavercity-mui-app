"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/motion/motion";
import { TitleText, TypingText } from "@/components";
import { Box } from "@mui/material";
import WithoutSsr from "@/components/WithoutSsr";

const World = () => {
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
          marginTop: "70px",
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
            flexDirection: "column",
          }}
        >
          <TypingText title="| People On The World" textStyles="center" />
          <TitleText
            title={
              <>
                Track friends around you and invite them to play together in the
                same world
              </>
            }
            textStyles="center"
          />
          <Box
            component={motion.div}
            variants={fadeIn("up", "tween", 0.3, 1)}
            sx={{
              position: "relative",
              marginTop: "68px",
              display: "flex",
              width: "100%",
              height: "550px",
            }}
          >
            <img
              src="/map.png"
              alt="map"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "80px",
                right: "80px",
                width: "70px",
                height: "70px",
                padding: "6px",
                borderRadius: "9999px",
                backgroundColor: "#5d6680",
              }}
            >
              <img
                src="people-01.png"
                alt="people"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "40px",
                left: "80px",
                width: "70px",
                height: "70px",
                padding: "6px",
                borderRadius: "9999px",
                backgroundColor: "#5d6680",
              }}
            >
              <img
                src="people-02.png"
                alt="people"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "45%",
                width: "70px",
                height: "70px",
                padding: "6px",
                borderRadius: "9999px",
                backgroundColor: "#5d6680",
              }}
            >
              <img
                src="people-03.png"
                alt="people"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default World;
