import { Box, Typography } from "@mui/material";
import React from "react";

import { IPropsFormRow } from "./types";

export default function FormRow(props: IPropsFormRow) {
  const { children, errorMsg, ...rest } = props;

  return (
    <Box {...rest}>
      {children}
      {errorMsg && (
        <Typography variant="subtitle2" marginTop="5px" color="error">
          {errorMsg}
        </Typography>
      )}
    </Box>
  );
}
