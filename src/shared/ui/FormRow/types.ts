import type { BoxProps } from "@mui/material";
import React from "react";

export interface IPropsFormRow extends BoxProps {
  children: React.ReactNode;
  errorMsg?: string | undefined | null;
}
