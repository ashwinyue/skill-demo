import { motion } from 'framer-motion';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  ShoppingOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import StatCard from '@/components/Dashboard/StatCard';
import { TrafficChart, SalesChart, OrderStatusChart, RecentActivity } from '@/components/Dashboard/ChartCard';
import RecentOrders from '@/components/Dashboard/RecentOrders';

const Dashboard = () => {
  const stats = [
    {
      title: '总用户数',
      value: '48,295',
      change: '+12.5%',
      trend: 'up',
      icon: <UserOutlined />,
      color: 'indigo',
    },
    {
      title: '总订单数',
      value: '12,847',
      change: '+8.2%',
      trend: 'up',
      icon: <ShoppingCartOutlined />,
      color: 'cyan',
    },
    {
      title: '总收入',
      value: '¥892,540',
      change: '+23.1%',
      trend: 'up',
      icon: <DollarOutlined />,
      color: 'emerald',
    },
    {
      title: '产品数量',
      value: '3,847',
      change: '-2.4%',
      trend: 'down',
      icon: <ShoppingOutlined />,
      color: 'amber',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">仪表盘</h1>
          <p className="text-dark-400">欢迎回来，这是您的数据概览</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700/50 transition-all">
            导出报告
          </button>
          <button className="btn-primary">
            刷新数据
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.title} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrafficChart />
        </div>
        <div>
          <OrderStatusChart />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Sales Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
