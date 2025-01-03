import type { BoxProps } from "@mui/material";

export interface IPropsFormRow extends BoxProps {
  children: React.ReactNode;
  errorMsg?: string | undefined | null;
}
