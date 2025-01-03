import { Box, Typography } from "@mui/material";
import React from "react";

import { SignInForm } from "@/features/SignIn";

export default function SignIn() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h2" textTransform="uppercase">
        Sign In
      </Typography>

      <SignInForm />
    </Box>
  );
}
