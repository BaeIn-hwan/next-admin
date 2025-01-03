import { Box, Stack } from "@mui/material";
import React from "react";

import { Link } from "@/shared/ui/Link";

const GnbList = [
  {
    url: "/",
    title: "Menu01",
  },
  {
    url: "/",
    title: "Menu02",
  },
  {
    url: "/",
    title: "Menu03",
  },
  {
    url: "/",
    title: "Menu04",
  },
];

export default function Header() {
  return (
    <Box component="header" height="70px" position="sticky" top={0} left={0} borderBottom="1px solid #000">
      <Box display="flex" alignItems="center" height="100%">
        <Box
          component="h1"
          display="flex"
          alignItems="center"
          height="100%"
          px="20px"
          borderRight="1px solid #000"
          fontSize={0}
        >
          <Link href="/" display="block" fontSize="32px" color="#000" lineHeight="32px">
            LOGO
          </Link>
        </Box>

        <Box component="nav" height="100%">
          <Stack component="ul" direction="row" alignItems="center" height="100%">
            {GnbList.map((item) => (
              <Box
                component="li"
                key={`${item.url}${item.title}`}
                display="flex"
                alignItems="center"
                height="100%"
                borderRight="1px solid #000"
              >
                <Link
                  href={item.url}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  px="10px"
                  fontSize="16px"
                  lineHeight="100%"
                >
                  {item.title}
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
