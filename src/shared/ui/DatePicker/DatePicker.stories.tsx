import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";

import DatePicker from "./DatePicker";

const today = dayjs();

const meta: Meta<typeof DatePicker> = {
  title: "shared/ui/DatePicker",
  component: DatePicker,
  argTypes: {
    value: {
      control: false,
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: today,
    label: "test",
    format: "YYYY-MM-DD",
    disabled: false,
    sx: { width: "50%" },
  },
};
