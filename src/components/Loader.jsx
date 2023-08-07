import React from "react";
import { Box } from "@mui/material";
import { IMG_PATH } from "../constant/path";

const Loader = () => {
  return (
    <Box>
      <img
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 99999,
          background: "transparent",
        }}
        // src="https://ik.imagekit.io/sheryians/ezgif.com-optimize_poe8pAoXT.gif"
        src={`${IMG_PATH}loder.gif`}
        alt="Loading...."
      />
    </Box>
  );
};

export default Loader;
