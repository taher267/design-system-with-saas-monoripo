import React from "react";
import * as CSS from "csstype";

interface IconProps {
  cs?: CSS.Properties;
}

const defStyle = { height: "17px", width: "38px" };

const IconCheck: React.FC<IconProps> = ({ cs }) => (
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
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);
export default IconCheck;
