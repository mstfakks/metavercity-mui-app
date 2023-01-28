"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/motion/motion";
import { Box, Typography } from "@mui/material";

export const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => {
  return (
    <Box
      component={motion.div}
      variants={fadeIn("right", "spring", index * 0.8, 0.8)}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "170px",
        height: "700px",
        transition: "ease-out-flex",
        transitionDuration: "0.7s",
        transitionProperty: "flex",
        cursor: "pointer",
        flex: active === id ? 10 : 2,
        "@media (min-width: 1024px)": {
          flex: active === id ? 3.5 : 0.5,
        },
      }}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "24px",
        }}
      />
      {active !== id ? (
        <Typography
          sx={{
            fontWeight: "600",
            "@media (min-width: 640px)": {
              fontSize: "26px",
            },
            fontSize: "18px",
            color: "white",
            position: "absolute",
            zIndex: 0,
            "@media (min-width: 1024px)": {
              bottom: "80px",
              rotate: "-90deg",
              transformOrigin: "0,0",
            },
          }}
        >
          {title}
        </Typography>
      ) : (
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            padding: "32px",
            justifyContent: "flex-start",
            width: "100%",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderBottomRightRadius: "24px",
            borderBottomLeftRadius: "24px",
          }}
        >
          <Box
            component="div"
            className="world-text"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60px",
              height: "60px",
              borderRadius: "24px",
              marginBottom: "16px",
            }}
          >
            <img
              src="/headset.svg"
              alt="headset"
              style={{
                width: "50%",
                height: "50%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Sriracha",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "20px",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Enter The Metavercity
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sriracha",
              letterSpacing: "1px",
              marginTop: "24px",
              fontWeight: "600",
              "@media (min-width: 640px)": {
                fontSize: "32px",
              },
              fontSize: "24px",
              color: "white",
            }}
          >
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
