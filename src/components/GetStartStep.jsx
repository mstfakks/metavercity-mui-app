"use client";

import { Box, Typography } from "@mui/material";
const GetStartStep = ({ number, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
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
        <Typography
          sx={{
            fontFamily: "Sriracha",
            fontWeight: "700",
            fontSize: "20px",
            color: "white",
          }}
        >
          0{number}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Sriracha",
          flex: "1 1 0%",
          marginLeft: "30px",
          fontWeight: "400",
          fontSize: "18px",
          color: "#B0B0B0",
          lineHeight: "32px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default GetStartStep;
