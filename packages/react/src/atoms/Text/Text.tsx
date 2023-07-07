import React from "react";
import { FontSize } from "@dswsmr/foundation";
import "@dswsmr/scss/lib/Text.css";

interface TextInterface {
  size?: keyof typeof FontSize;
  children: React.ReactNode;
}

const Color: React.FC<TextInterface> = ({ size = FontSize.base, children }) => {
  const className = `dgns-text dgns-text-${size}`;
  return (
    <p className={className} style={{ fontSize: size }}>
      {children}
    </p>
  );
};

export default Color;
