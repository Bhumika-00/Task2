import KPISection from "@/components/dashboard/KPISection";
import ChartsSection from "@/components/dashboard/ChartsSection";
import Filters from "@/components/dashboard/Filters";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="container">
      <h2 style={{ marginBottom: "16px" }}>Dashboard Overview</h2>
      <Filters />
      <KPISection />
      <ChartsSection />

      <Card>
        <h3 style={{ marginBottom: "8px" }}>AI Insights</h3>
        <p>
          This is where AI-powered insights will be displayed. (Dummy placeholder for now)
        </p>
      </Card>
    </div>
  );
}
