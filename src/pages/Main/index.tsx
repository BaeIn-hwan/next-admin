"use client";

import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import type { TDate } from "@/shared/ui/DatePicker";
import DatePicker from "@/shared/ui/DatePicker/DatePicker";

const today = dayjs();

export default function MainIndex() {
  const [selectDate, setSelectDate] = useState(today);

  const handleChangeDate = (val: TDate | null) => {
    setSelectDate(val || today);
  };

  useEffect(() => {
    // setToday();
  }, []);

  return (
    <Box margin="30px">
      <div>
        <DatePicker format="YYYY-MM-DD" value={selectDate} onChange={handleChangeDate} />
        <div>{selectDate.format("YYYY-MM-DD")}</div>
        <Box margin="10px">
          <TextField label="tete" />
        </Box>
      </div>
    </Box>
  );
}
