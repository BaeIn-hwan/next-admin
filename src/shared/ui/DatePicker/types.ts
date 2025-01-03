import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";

export type TDate = Dayjs | null;
export interface IProsDatePicker extends DatePickerProps<Dayjs> {
  sx?: SxProps<Theme>;
}
