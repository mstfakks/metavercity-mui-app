"use client";
import { motion } from "framer-motion";
import WithoutSsr from "./WithoutSsr";
import { socials } from "@/constants";
import { footerVariants } from "@/motion/motion";
import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <WithoutSsr>
      <Box
        component={motion.footer}
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        sx={{
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "48px",
          paddingBottom: "48px",
          "@media (min-width: 640px) ": {
            padding: "64px",
          },
          "@media (min-width: 290px) ": {
            padding: "32px",
          },
          position: "relative",
        }}
      >
        <Box component="div" className="footer-gradient" />
        <Box
          sx={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            "@media (min-width: 1536px) ": {
              padding: "64px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "44px",
                color: "white",
                fontFamily: "Sriracha",
                "@media (min-width: 768px) ": {
                  fontSize: "64px",
                },
              }}
            >
              Enter The Metavercity
            </Typography>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                height: "fit-content",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingRight: "24px",
                paddingLeft: "24px",
                backgroundColor: "#25618b",
                borderRadius: "32px",
                gap: "12px",
              }}
            >
              <img
                src="/headset.svg"
                alt="headset"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                }}
              />
              <Box
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "white",
                  letterSpacing: "1px",
                }}
              >
                ENTER METAVERCITY
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                marginBottom: "50px",
                height: "2px",
                backgroundColor: "white",
                opacity: 0.1,
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sriracha",
                  fontWeight: "800",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                Metavercity
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sriracha",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "white",
                  opacity: 0.5,
                }}
              >
                Copyright © 2021 - 2022 Metavercity. All rights reserved.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                {socials.map((social) => (
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default Footer;
