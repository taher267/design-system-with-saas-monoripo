import React from "react";
import "@dswsmr/scss/lib/Button.css";
import type * as CSS from "csstype";

interface ButtonInterface {
  cs?: CSS.Properties;
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({ title, children, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
