import { Box, Stack } from "@mui/material";
import React from "react";

import { Link } from "@/shared/ui/Link";

const GnbList = [
  {
    url: "/sign-up",
    title: "SIGN UP",
  },
  {
    url: "#",
    title: "준비중",
  },
  {
    url: "#",
    title: "준비중",
  },
];

export default function Header() {
  return (
    <Box component="header" height="70px" position="sticky" top={0} left={0}>
      <Box display="flex" alignItems="center" justifyContent="space-between" height="100%" padding="6px 18px">
        <Box component="h1" fontSize={0}>
          <Link href="/" display="block" fontSize="32px" color="#000" lineHeight="20px">
            LOGO
          </Link>
        </Box>

        <Box component="nav">
          <Stack component="ul" direction="row" alignItems="center" spacing={2}>
            {GnbList.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box component="li" key={`${item.url}${index}`}>
                <Link href={item.url} display="block" fontSize="16px" lineHeight="20px">
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
