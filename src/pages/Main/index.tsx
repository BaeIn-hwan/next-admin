"use client";

import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

import { Button } from "@/shared/ui/Button";
import type { TDate } from "@/shared/ui/DatePicker";
import DatePicker from "@/shared/ui/DatePicker/DatePicker";

const today = dayjs();

export default function MainIndex() {
  const [selectDate, setSelectDate] = useState(today);
  const [isLoad, setIsLoad] = useState(false);

  const handleChangeDate = (val: TDate | null) => {
    setSelectDate(val || today);
  };

  const handleClick = () => {
    setIsLoad(true);

    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  };

  return (
    <Box margin="30px">
      <DatePicker format="YYYY-MM-DD" value={selectDate} onChange={handleChangeDate} sx={{ width: "50%" }} />

      <div>{selectDate.format("YYYY-MM-DD")}</div>

      <Box marginTop="30px">
        <TextField label="tete" />
      </Box>

      <Box marginTop="30px">
        <Button type="button" isLoading={isLoad} onClick={handleClick}>
          qasd
        </Button>
      </Box>
    </Box>
  );
}
