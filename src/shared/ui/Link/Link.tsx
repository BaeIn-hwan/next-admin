import MuiLink from "@mui/material/Link";
import { type LinkOwnProps } from "@mui/material/Link";
import NextLink from "next/link";
import { type LinkProps } from "next/link";
import React from "react";

interface IPropsLink extends LinkProps, LinkOwnProps {
  children: React.ReactNode;
}

export default function Link(props: IPropsLink) {
  const { children, href = "#", underline = "none", color = "inherit", ...rest } = props;

  return (
    <MuiLink component={NextLink} href={href} underline={underline} color={color} {...rest}>
      {children}
    </MuiLink>
  );
}
