import React from "react";
import "@dswsmr/scss/lib/Margin.css";
import { Spacing } from "@dswsmr/foundation";

interface MarginProps {
  space?: keyof typeof Spacing;
  children: React.ReactNode;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  space = 'none',
  children,
  top,
  right,
  bottom,
  left,
}) => {
  let className = "";
  if (top) className += `dgns-margin-top-${space} `;
  if (right) className += `dgns-margin-right-${space} `;
  if (bottom) className += `dgns-margin-bottom-${space} `;
  if (left) className += `dgns-margin-left-${space} `;
  return <div className={className}>{children}</div>;
};

export default Margin;
