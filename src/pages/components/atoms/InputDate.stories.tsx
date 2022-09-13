import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputDate from "./InputDate";

export default {
  title: "Atoms",
  component: InputDate,
} as ComponentMeta<typeof InputDate>;

export const DefaultInputDate: ComponentStory<typeof InputDate> = () => (
  <InputDate />
);
