import React from "react";
import { Spacing } from "@dswsmr/foundation";
import "@dswsmr/scss/lib/Utility.css";
import type * as CSS from "csstype";

interface ColorInterface {
  cs?: CSS.Properties;
  hexColor: string;
  font?: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: React.FC<ColorInterface> = ({
  hexColor,
  height = Spacing.sm,
  width = Spacing.sm,
}) => {
  const className = `dgns-width-${width} dgns-height-${height} `;
  return (
    <div
      className={className}
      style={{ backgroundColor: hexColor, height, width }}
    ></div>
  );
};

export default Color;
