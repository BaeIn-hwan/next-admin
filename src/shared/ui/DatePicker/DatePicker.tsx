import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer as MuiDateContainer } from "@mui/x-date-pickers/internals/demo";

import type { IProsDatePicker } from "./types";
import "dayjs/locale/ko";

function DatePicker(props: IProsDatePicker) {
  const { width = "100%", ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <MuiDateContainer components={["DatePicker"]} sx={{ width, minWidth: "auto !important", paddingTop: 0 }}>
        <MuiDatePicker
          {...rest}
          sx={{ width: "100%", minWidth: "auto !important" }}
          slotProps={{
            textField: { size: "small" },
            openPickerIcon: { fontSize: "small" },
          }}
        />
      </MuiDateContainer>
    </LocalizationProvider>
  );
}

export default DatePicker;
