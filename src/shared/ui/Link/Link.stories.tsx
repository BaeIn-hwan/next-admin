import type { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "shared/ui/Link",
  component: Link,
  argTypes: {
    color: {
      control: "color",
    },
    underline: {
      options: ["none", "hover", "always"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "링크",
    underline: "none",
    color: "inherit",
  },
};
