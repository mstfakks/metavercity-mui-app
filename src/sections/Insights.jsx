"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/motion/motion";
import { TitleText, TypingText, InsightCards } from "@/components";
import { insights } from "@/constants";
import { Box } from "@mui/material";
import WithoutSsr from "@/components/WithoutSsr";

const Insights = () => {
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
            flexDirection: "column",
          }}
        >
          <TypingText title="| Insight" textStyles="center" />
          <TitleText title="Insight About Metavercity" textStyles="center" />
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {insights.map((insight, index) => (
              <InsightCards
                key={`insight-${index}`}
                {...insight}
                index={index + 1}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </WithoutSsr>
  );
};

export default Insights;
