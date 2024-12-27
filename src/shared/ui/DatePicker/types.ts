import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";

export type TDate = Dayjs | null;

export interface IProsDatePicker extends DatePickerProps<Dayjs> {
  width?: string;
}

export type TRange = "from" | "to";

export interface IRangeChangeParams {
  type: TRange;
  value: TDate | null;
}

export interface IPropsRangePicker {
  width?: string;
  value: Record<TRange, TDate>;
  onChange: (payload: IRangeChangeParams) => void;
}
