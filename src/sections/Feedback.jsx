"use client";
import { motion } from "framer-motion";
import WithoutSsr from "@/components/WithoutSsr";
import { fadeIn, staggerContainer, zoomIn } from "@/motion/motion";
import { Box, Typography } from "@mui/material";

const Feedback = () => {
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
          marginTop: "200px",
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
            "@media (min-width: 1024px)": {
              flexDirection: "row",
            },
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            component={motion.div}
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="feedback-gradient-1"
            sx={{
              display: "flex",
              flex: 0.5,
              justifyContent: "flex-end",
              flexDirection: "column",
              padding: "16px",
              borderRadius: "32px",
              borderWidth: "1px",
              borderColor: "#6a6a6a",
              position: "relative",
              "@media (min-width: 1024px)": {
                maxWidth: "370px",
              },
              "@media (min-width: 640px)": {
                padding: "32px",
              },
            }}
          >
            <Box component="div" className="feedback-gradient-2" />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Sriracha",
                  fontWeight: "700",
                  fontSize: "26px",
                  lineHeight: "36px",
                  color: "white",
                  "@media (min-width: 640px)": {
                    fontSize: "32px",
                    lineHeight: "40px",
                  },
                }}
              >
                Samantha
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sriracha",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "white",
                  "@media (min-width: 640px)": {
                    fontSize: "18px",
                    lineHeight: "22px",
                  },
                }}
              >
                Founder | Metavercity
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Sriracha",
                marginTop: "24px",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "39px",
                color: "white",
                "@media (min-width: 640px)": {
                  fontSize: "24px",
                  lineHeight: "45px",
                },
              }}
            >
              “With the development of today's technology, metaverse is very
              useful for today's work, or can be called web 3.0. by using
              metaverse you can use it as anything”
            </Typography>
          </Box>
          <Box
            component={motion.div}
            variants={fadeIn("left", "tween", 0.2, 1)}
            sx={{
              position: "relative",
              display: "flex",
              flex: "1 1 0%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/planet-09.png"
              alt="planet-09"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "210px",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
            <Box
              component={motion.div}
              variants={zoomIn(0.4, 1)}
              sx={{
                display: "none",
                position: "absolute",
                left: "-10%",
                top: "3%",
                "@media (min-width: 1024px)": {
                  display: "block",
                },
              }}
            >
              <img
                src="/stamp.png"
                alt="stamp"
                style={{
                  width: "155px",
                  height: "155px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default Feedback;
