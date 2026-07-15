import React from 'react';
import { FileCode, Copy, Activity, Clock } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import MonthlySalesChart from '../components/dashboard/MonthlySalesChart';
import MonthlyTargetCard from '../components/dashboard/MonthlyTargetCard';
import CustomersDemographic from '../components/dashboard/CustomersDemographic';
import RecentOrders from '../components/dashboard/RecentOrders';
import dashboardData from '../data/componentDashboardData.json';

const Dashboard: React.FC = () => {
  const kpis = dashboardData.kpis;

  const iconComponents: { [key: string]: React.ReactNode } = {
    'components': <FileCode className="w-5 h-5 text-indigo-500" />,
    'copied': <Copy className="w-5 h-5 text-emerald-500" />,
    'updates': <Activity className="w-5 h-5 text-indigo-500" />,
    'timeSaved': <Clock className="w-5 h-5 text-blue-500" />,
  };

  return (
    <div className="space-y-6">
      {/* 1. Top Section: 4-Column KPI Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <StatCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            icon={iconComponents[kpi.id] || <FileCode className="w-5 h-5" />}
            trend={kpi.trend}
            suffix={kpi.suffix}
            className="h-full"
          />
        ))}
      </div>

      {/* 2. Middle Section: Chart and Target Card */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <MonthlySalesChart />
        </div>
        <div className="xl:col-span-1">
          <MonthlyTargetCard />
        </div>
      </div>

      {/* 3. Bottom Section: Timeline Logs and Release Updates */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
        <div className="xl:col-span-1">
          <CustomersDemographic />
        </div>
        <div className="xl:col-span-2 overflow-x-auto">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
