import { useState } from "react";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import Sidebar from "../components/admin/Sidebar";
import MetricCard from "../components/admin/MetricCard";
import RecentActivity from "../components/admin/RecentActivity";
import Charts from "../components/admin/charts/Charts";
import Header from "../components/admin/Header";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activityData = [
    {
      time: "10:30 AM",
      user: "John Doe",
      action: "Created new product",
      status: "success",
    },
    {
      time: "10:15 AM",
      user: "Sarah Smith",
      action: "Updated user profile",
      status: "info",
    },
    {
      time: "09:45 AM",
      user: "Mike Johnson",
      action: "Deleted order #1234",
      status: "warning",
    },
    {
      time: "09:30 AM",
      user: "Emma Wilson",
      action: "Added new category",
      status: "success",
    },
    {
      time: "09:15 AM",
      user: "David Brown",
      action: "System backup completed",
      status: "info",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className=" w-full">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome back, Admin!
            </h2>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your business today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Revenue"
              value="$67,432"
              change={12.5}
              icon={DollarSign}
              color="green"
            />
            <MetricCard
              title="Active Users"
              value="1,680"
              change={8.2}
              icon={Users}
              color="blue"
            />
            <MetricCard
              title="Total Orders"
              value="542"
              change={-3.1}
              icon={ShoppingCart}
              color="purple"
            />
            <MetricCard
              title="Growth Rate"
              value="24.3%"
              change={15.8}
              icon={TrendingUp}
              color="orange"
            />
          </div>
          <Charts />
          <RecentActivity data={activityData} />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
