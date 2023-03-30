import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  return <div >
    <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily:"fantasy"}} variant="h2">
            This is a CURD Application 
        </Typography>
        <Typography sx={{ fontFamily:"fantasy"}} variant="h3">
            By ZhenniChao
        </Typography>
    </Box>
    </div>;
};

export default About;