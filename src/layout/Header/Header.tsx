import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

import Gnb from "./Gnb";
import styles from "./header.module.scss";
import UtilMenu from "./UtilMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Box className={styles.header__inner}>
        <Box display="flex" alignItems="center">
          <h1>
            <Link href="/">LOGO</Link>
          </h1>

          <Gnb />
        </Box>

        <UtilMenu />
      </Box>
    </header>
  );
}
