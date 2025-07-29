"use client";
import { useTheme } from "@/context/theme-context";
import styles from "./Button.module.css";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={styles.btn}
      style={{ display: "flex", alignItems: "center", gap: "6px" }}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
