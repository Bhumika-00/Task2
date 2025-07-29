"use client";
import React, { useState } from "react";
import styles from "./Filters.module.css";
import { format } from "date-fns";

export default function Filters() {
  const [date, setDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
  const [range, setRange] = useState<string>("7d");

  return (
    <div className={styles.filters}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.date}
      />
      <select
        value={range}
        onChange={(e) => setRange(e.target.value)}
        className={styles.dropdown}
      >
        <option value="7d">Last 7 days</option>
        <option value="30d">Last 30 days</option>
        <option value="90d">Last 90 days</option>
      </select>
    </div>
  );
}
