import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DemoContainer as MuiDateContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import type { IProsDatePicker } from "./types";
import "dayjs/locale/ko";

export default function DatePicker(props: IProsDatePicker) {
  const { sx, ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <MuiDatePicker
        {...rest}
        sx={{ width: "100%", minWidth: "auto !important", ...sx }}
        slotProps={{
          textField: { size: "small" },
          openPickerIcon: { fontSize: "small" },
        }}
      />
    </LocalizationProvider>
  );
}
