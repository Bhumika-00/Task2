import React from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}
