import React from "react";
import type * as CSS from "csstype";

interface IconProps {
  cs?: CSS.Properties;
}

const defStyle = { height: "17px", width: "38px" };

const IconChevronDown: React.FC<IconProps> = ({ cs }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    style={{ ...defStyle, ...cs }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
export default IconChevronDown;
