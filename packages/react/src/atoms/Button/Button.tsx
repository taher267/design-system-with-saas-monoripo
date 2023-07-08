import React from "react";
import "@dswsmr/scss/lib/Button.css";
import type * as CSS from "csstype";

export interface ButtonProps {
  cs?: CSS.Properties;
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, children, onClick, cs }) => {
  return (
    <button
      className="btn btn-primary"
      style={{ ...cs }}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
