"use client";
import React from "react";
import styles from "./Sidebar.module.css";
import { BarChart2, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><BarChart2 size={18}/> Dashboard</li>
          <li><Users size={18}/> Users</li>
          <li><Settings size={18}/> Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
