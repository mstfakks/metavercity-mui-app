"use client";

import WithoutSsr from "@/components/WithoutSsr";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "@/motion/motion";

const Hero = () => {
  return (
    <WithoutSsr>
      <Box
        sx={{
          "@media (min-width:640px)": {
            paddingY: "64px",
            paddingLeft: "64px",
          },
          "@media (min-width: 290px)": {
            paddingY: "32px",
          },
          paddingY: "48px",
          paddingLeft: "24px",
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
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Typography
              component={motion.h2}
              variants={textVariant(1.1)}
              sx={{
                fontFamily: "Sriracha",
                fontWeight: "bold",
                "@media (min-width: 1024px)": {
                  fontSize: "144px",
                  lineHeight: "158.4px",
                },
                "@media (min-width: 768px)": {
                  fontSize: "100px",
                  lineHeight: "114.4px",
                },
                "@media (min-width: 640px) ": {
                  fontSize: "60px",
                  sm: "74.4px",
                },
                fontSize: "44px",
                lineHeight: "64.4px",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Metavercity
            </Typography>
            <Typography
              component={motion.h1}
              variants={textVariant(1.3)}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sriracha",
                    fontWeight: "bold",
                    "@media (min-width: 1024px)": {
                      fontSize: "144px",
                      lineHeight: "158.4px",
                    },
                    "@media (min-width: 768px)": {
                      fontSize: "100px",
                      lineHeight: "114.4px",
                    },
                    "@media (min-width: 640px) ": {
                      fontSize: "60px",
                      sm: "74.4px",
                    },
                    fontSize: "44px",
                    lineHeight: "64.4px",
                    textTransform: "uppercase",
                    color: "white",
                    letterSpacing: "5px",
                  }}
                >
                  Madness
                </Typography>
              </Box>
            </Typography>
          </Box>
          <Box
            component={motion.div}
            variants={slideIn("right", "tween", 0.2, 1)}
            sx={{
              position: "relative",
              width: "100%",
              "@media (min-width: 768px)": {
                marginTop: "-20px",
              },
              marginTop: "-12px",
            }}
          >
            <Box
              component="div"
              className="hero-gradient"
              sx={{
                position: "absolute",
                width: "100%",
                height: "300px",
                borderTopLeftRadius: "140px",
                zIndex: 0,
                top: "-30px",
              }}
            />
            <img
              src="/cover.png"
              alt="cover"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderTopLeftRadius: "140px",
                zIndex: 10,
                position: "relative",
              }}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "-50px",
                paddingRight: "40px",
                position: "relative",
                zIndex: 10,
                "@media (min-width: 640px) ": {
                  marginTop: "-70px",
                },
              }}
            >
              <img
                src="/stamp.png"
                alt="stamp"
                style={{
                  width: "100px",
                  height: "100px",
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

export default Hero;
