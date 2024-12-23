import { CircularProgress } from "@mui/material";
import type { CircularProgressProps } from "@mui/material";
import React from "react";

export default function Spinner(props: CircularProgressProps) {
  return <CircularProgress {...props} />;
}
