"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/motion/motion";
import { TypingText } from "@/components/CustomTitles";
import { Box } from "@mui/material";
import WithoutSsr from "@/components/WithoutSsr";
const About = () => {
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
          component={"div"}
          className="about-gradient"
          style={{ zIndex: 0 }}
        />
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
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TypingText title="| About Metavercity" textStyles="center" />
          <Box
            component={motion.p}
            variants={fadeIn("up", "tween", 0.2, 1)}
            sx={{
              marginTop: "8px",
              fontWeight: "400",
              "@media (min-width: 640px)": {
                fontSize: "32px",
              },
              fontSize: "20px",
              textAlign: "center",
              color: "rgb(199,199,199)",
            }}
          >
            <span style={{ fontWeight: "800", color: "white" }}>Metaverse</span>{" "}
            is a new thing in the future, where you can enjoy the virtual world
            by feeling like it's really real, you can feel what you feel in this
            metaverse world, because this is really the{" "}
            <span style={{ fontWeight: "800", color: "white" }}>
              madness of the metaverse
            </span>{" "}
            of today, using only{" "}
            <span style={{ fontWeight: "800", color: "white" }}>VR</span>{" "}
            devices you can easily explore the metaverse world you want, turn
            your dreams into reality. Let's explore the madness of the metaverse
            by scrolling down
          </Box>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            style={{
              width: "18px",
              height: "28px",
              objectFit: "contain",
              marginTop: "28px",
            }}
          />
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default About;
