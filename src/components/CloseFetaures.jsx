"use client";
import { Box, Typography } from "@mui/material";

const CloseFetaures = ({ imgUrl, title, subtitle }) => {
  return (
    <Box
      sx={{
        flex: "1 1 0%",
        display: "flex",
        flexDirection: "column",
        "@media (min-width: 640px)": {
          maxWidth: "250px",
        },
        minWidth: "210px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70px",
          height: "70px",
          borderRadius: "24px",
          backgroundColor: "#323f5d",
        }}
      >
        <img
          src={imgUrl}
          alt="icon"
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
          marginTop: "26px",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
          color: "white",
        }}
      >
        Title {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Sriracha",
          flex: "1 1 0%",
          marginTop: "16px",
          fontWeight: "400",
          fontSize: "18px",
          color: "#b0b0b0",
          lineHeight: "32px",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default CloseFetaures;
