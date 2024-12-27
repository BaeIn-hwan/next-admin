import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box component="footer" display="flex" alignItems="center" height="40px">
      <Box width="100%" padding="6px 18px">
        Copyright 2024. [name] All rights reserved.
      </Box>
    </Box>
  );
}
