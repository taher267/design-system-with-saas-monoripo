import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import React from "react";
import { IconCheck } from "@dswsmr/icons/hi";

const meta: Meta<typeof Select> = {
  title: "UI/molecules/Select",
  component: Select,
  args: {
    onOptionSelected: console.log,
    cs: { color: "blue" },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "Single Select",
    options: [
      { label: "White", value: "#fff" },
      { label: "Blue", value: "#0000ff" },
    ],
  },
};

export const Secondary: Story = {
  args: {
    label: "Single Select",
    options: [
      { label: "White", value: "#fff" },
      { label: "Blue", value: "#0000ff" },
    ],
    renderOption: ({ isSelected, option, getOptionrecommendedProps }) => {
      return (
        <li
          key={option.label}
          {...getOptionrecommendedProps({
            className: `custom_select_option ${
              isSelected ? "custom_select_option_selected" : ""
            }`,
          })}
        >
          <input type="checkbox" checked={isSelected} />{" "}
          <span>{option.label}</span>
          {(isSelected && <IconCheck cs={{ width: "20px" }} />) || ""}
        </li>
      );
    },
  },
};
