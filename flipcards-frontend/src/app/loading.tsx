"use client";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Loading = () => {
  return (
    <Box className="flex flex-col justify-center items-center h-screen text-center pb-24">
      <Image
        src="/Skateboarding.gif"
        alt="Loading animation"
        width={50}
        height={30}
        className="mb-4"
      />
      <Typography variant="h4" className="text-yellow-800">
        Loading ...
      </Typography>
      <Box className="w-full max-w-lg my-5 bg-[#FFEBCC] rounded-lg">
        <LinearProgress
          variant="indeterminate"
          sx={{
            height: "10px",
            borderRadius: "8px",
            backgroundColor: "#FFEBCC",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "orange",
              borderRadius: "8px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading;
