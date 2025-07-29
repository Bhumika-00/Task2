import React from "react";
import styles from "./KPISection.module.css";
import Card from "@/components/ui/Card";
import { kpiData } from "@/data/kpiData";

export default function KPISection() {
  return (
    <div className={styles.wrapper}>
      {kpiData.map((kpi) => (
        <Card key={kpi.id}>
          <div className={styles.title}>{kpi.title}</div>
          <div className={styles.value}>{kpi.value}</div>
          <div
            className={`${styles.change} ${
              kpi.change.startsWith("+") ? styles.positive : styles.negative
            }`}
          >
            {kpi.change}
          </div>
        </Card>
      ))}
    </div>
  );
}
