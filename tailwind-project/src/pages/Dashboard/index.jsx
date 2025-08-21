import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState({
    totalPoints: 0,
    dailyCollections: 0,
    activeAlerts: 0,
  });

  const [wasteTypes, setWasteTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [weeklyTrends, setWeeklyTrends] = useState([]);

  // Função para buscar dados da API
  const fetchData = async () => {
    try {
      const res = await fetch("https://sua-api.com/dashboard-data");
      const data = await res.json();

      setStats(data.stats);
      setWasteTypes(data.wasteTypes);
      setLocations(data.locations);
      setWeeklyTrends(data.weeklyTrends);
    } catch (err) {
      console.error("Erro ao buscar dados do dashboard:", err);
    }
  };

  // Busca inicial + atualização automática a cada 5s
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Título */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold">
                Dashboard
              </p>
              <p className="text-[#9daeb8] text-sm">
                Overview of the Eco Points system performance
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-4 p-4">
            <Card title="Total Eco Points" value={stats.totalPoints} />
            <Card title="Daily Collections" value={stats.dailyCollections} />
            <Card title="Active Alerts" value={stats.activeAlerts} />
          </div>

          {/* Gráfico de barras - Waste Types */}
          <SectionTitle title="Waste Type" />
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3c4a53] p-6">
              <p className="text-white text-base font-medium">Waste Types</p>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={wasteTypes}>
                    <XAxis dataKey="type" stroke="#9daeb8" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#293238" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Gráfico de barras horizontais - Location Performance */}
          <SectionTitle title="Location Performance" />
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3c4a53] p-6">
              <p className="text-white text-base font-medium">
                Location Performance
              </p>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={locations} layout="vertical">
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" stroke="#9daeb8" />
                    <Tooltip />
                    <Bar dataKey="performance" fill="#293238" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Gráfico de linha - Weekly Trends */}
          <SectionTitle title="Weekly Trends" />
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3c4a53] p-6">
              <p className="text-white text-base font-medium">Weekly Trends</p>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" stroke="#9daeb8" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#9daeb8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes auxiliares
const Card = ({ title, value }) => (
  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#293238]">
    <p className="text-white text-base font-medium">{title}</p>
    <p className="text-white tracking-light text-2xl font-bold">{value}</p>
  </div>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-white text-[22px] font-bold leading-tight px-4 pb-3 pt-5">
    {title}
  </h2>
);

export default Dashboard;
