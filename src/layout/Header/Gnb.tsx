import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

import styles from "./gnb.module.scss";

const gnbList = [
  {
    title: "ITEM01",
    path: "/",
  },
  {
    title: "ITEM02",
    path: "/",
  },
  {
    title: "ITEM03",
    path: "/",
  },
];

export default function Gnb() {
  return (
    <nav className={styles.gnb}>
      <h2 className="blind">GNB</h2>

      <Box component="ul" display="flex" alignItems="center">
        {gnbList.map((item) => (
          <Box component="li" key={item.title}>
            <Link href="/">HOME</Link>
          </Box>
        ))}
      </Box>
    </nav>
  );
}
