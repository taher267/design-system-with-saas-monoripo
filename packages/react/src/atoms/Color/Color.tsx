import React from "react";
import Spacing from "../../foundation/Spacing";
import "@dswsmr/scss/lib/Utility.css";
interface ColorInterface {
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
