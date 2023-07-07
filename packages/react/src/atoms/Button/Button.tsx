import React from "react";

interface ButtonInterface {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({ title, children, onClick }) => {
  return <button className="btn btn-primary" onClick={onClick} title={title}>{children}</button>;
};

export default Button;
