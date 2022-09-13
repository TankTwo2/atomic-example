import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HistoryTable from "./HistoryTable";

export default {
  title: "Organisms",
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

export const DefaultHistoryTable: ComponentStory<typeof HistoryTable> = () => (
  <HistoryTable />
);
