import React from 'react';
import { Users, Package } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import MonthlySalesChart from '../components/dashboard/MonthlySalesChart';
import MonthlyTargetCard from '../components/dashboard/MonthlyTargetCard';
import StatisticsChart from '../components/dashboard/StatisticsChart';
import CustomersDemographic from '../components/dashboard/CustomersDemographic';
import RecentOrders from '../components/dashboard/RecentOrders';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              title="고객"
              value="3,782"
              icon={<Users className="w-5 h-5 text-[#3C50E0]" />}
              trend={11.01}
              className="h-full"
            />
            <StatCard
              title="주문"
              value="5,359"
              icon={<Package className="w-5 h-5 text-[#3C50E0]" />}
              trend={-9.05}
              className="h-full"
            />
          </div>
          {/* Monthly Sales Chart takes remaining space */}
          <div className="flex-1 min-h-[350px]">
            <MonthlySalesChart />
          </div>
        </div>
        <div className="xl:col-span-1 h-full min-h-[514px]">
          <MonthlyTargetCard />
        </div>
      </div>

      {/* Middle Section: Statistics Chart */}
      <div className="w-full">
        <StatisticsChart />
      </div>

      {/* Bottom Section: Demographic and Orders */}
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
