"use client";

import { Home, NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Stack } from "@mui/material";
import React from "react";

import { Link } from "@/shared/ui/Link";

interface IPropsBreadCrumb {
  children?: React.ReactNode;
}

export default function BreadCrumb(props: IPropsBreadCrumb) {
  const { children } = props;

  return (
    <Stack>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
        <Link href="/">
          <Home />
        </Link>
        {children}
      </Breadcrumbs>
    </Stack>
  );
}
