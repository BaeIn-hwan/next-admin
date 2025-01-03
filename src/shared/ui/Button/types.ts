import type { ButtonProps } from "@mui/material";
import React from "react";

export interface IPropsButton extends ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
}
