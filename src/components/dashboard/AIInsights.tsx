"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function AIInsights() {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<string[]>([]);

  const generateInsights = () => {
    setLoading(true);
    setTimeout(() => {
      setInsights([
        "Users in Europe increased by 15% last week",
        "Revenue growth is strongest in mobile segment",
        "Conversion rate improved 2.3% after new UI"
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card>
      <h3 style={{ marginBottom: "8px" }}>AI Insights</h3>
      {loading && <p>Generating insights...</p>}
      {!loading && insights.length === 0 && (
        <Button onClick={generateInsights}>Generate Insights</Button>
      )}
      {!loading && insights.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {insights.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                padding: "10px",
                background: "var(--color-bg-alt)",
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}
            >
              {insight}
            </motion.div>
          ))}
        </div>
      )}
    </Card>
  );
}
