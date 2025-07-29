"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>AI Analytics</h1>
      <div className={styles.actions}>
        <button className={styles.themeToggle}>
          <Sun size={18} />
        </button>
      </div>
    </header>
  );
}
