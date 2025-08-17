import RevenueChart from "./RevenueChart";
import OrderStatusChart from "./OrderStatusChart";

const Charts = () => {
  const revenueData = [
    { month: "Jan", revenue: 45000, users: 1200 },
    { month: "Feb", revenue: 52000, users: 1350 },
    { month: "Mar", revenue: 48000, users: 1280 },
    { month: "Apr", revenue: 61000, users: 1520 },
    { month: "May", revenue: 55000, users: 1400 },
    { month: "Jun", revenue: 67000, users: 1680 },
  ];

  const orderStatusData = [
    { name: "Completed", value: 68, color: "#10B981" },
    { name: "Pending", value: 22, color: "#F59E0B" },
    { name: "Cancelled", value: 10, color: "#EF4444" },
  ];
  
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Revenue Chart */}
      <RevenueChart data={revenueData} />

      {/* Order Status Chart */}
      <OrderStatusChart data={orderStatusData} />
    </section>
  );
};

export default Charts;
