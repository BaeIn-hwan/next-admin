import { CircularProgress, Button as MuiButton } from "@mui/material";

import { IPropsButton } from "./types";

export default function Button(props: IPropsButton) {
  const { children, isLoading = false, ...rest } = props;

  return <MuiButton {...rest}>{isLoading ? <CircularProgress size="20px" /> : children}</MuiButton>;
}
