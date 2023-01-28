"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/motion/motion";
import { TypingText, ExploreCard, TitleText } from "@/components";
import { exploreWorlds } from "@/constants";
import { Box } from "@mui/material";
import WithoutSsr from "@/components/WithoutSsr";

const Explore = () => {
  const [active, setActive] = useState("world-2");
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
          <TypingText title="| The World" textStyles="center" />
          <TitleText
            title={<>Choose the world you want to explore</>}
            textStyles="center"
          />
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              "@media (min-width: 1024px)": {
                flexDirection: "row",
              },
              flexDirection: "column",
              minHeight: "70vh",
              gap: "20px",
            }}
          >
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default Explore;
