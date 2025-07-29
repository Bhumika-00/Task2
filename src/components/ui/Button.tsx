import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.btn, styles[variant])} {...props}>
      {children}
    </button>
  );
}
