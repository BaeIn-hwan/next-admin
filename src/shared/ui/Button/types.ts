import type { ButtonProps } from "@mui/material";

export interface IPropsButton extends ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
}
