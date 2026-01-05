import { useState } from 'react';
import { Card, Tabs } from 'antd';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';

const ChartCard = ({ title, children, extra }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass-card"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {extra}
      </div>
      {children}
    </motion.div>
  );
};

// Traffic Chart
export const TrafficChart = () => {
  const [period, setPeriod] = useState('week');

  const data = {
    week: [
      { name: '周一', visits: 4200, orders: 2800 },
      { name: '周二', visits: 3800, orders: 2200 },
      { name: '周三', visits: 5200, orders: 3100 },
      { name: '周四', visits: 4800, orders: 2900 },
      { name: '周五', visits: 6100, orders: 3800 },
      { name: '周六', visits: 7200, orders: 4200 },
      { name: '周日', visits: 6800, orders: 3900 },
    ],
    month: [
      { name: '第1周', visits: 28000, orders: 18000 },
      { name: '第2周', visits: 32000, orders: 21000 },
      { name: '第3周', visits: 29000, orders: 19500 },
      { name: '第4周', visits: 35000, orders: 24000 },
    ],
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-800 border border-dark-700 rounded-lg p-3 shadow-xl">
          <p className="text-dark-300 text-sm mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ChartCard
      title="流量趋势"
      extra={
        <Tabs
          activeKey={period}
          onChange={setPeriod}
          items={[
            { key: 'week', label: '本周' },
            { key: 'month', label: '本月' },
          ]}
          className="chart-tabs"
        />
      }
    >
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data[period]}>
          <defs>
            <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#94a3b8' }} />
          <YAxis stroke="#64748b" tick={{ fill: '#94a3b8' }} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="visits"
            name="访问量"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#colorVisits)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="orders"
            name="订单量"
            stroke="#22d3ee"
            fillOpacity={1}
            fill="url(#colorOrders)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// Sales Chart
export const SalesChart = () => {
  const data = [
    { name: '电子产品', value: 4500, color: '#6366f1' },
    { name: '服装配饰', value: 3200, color: '#22d3ee' },
    { name: '家居用品', value: 2800, color: '#a855f7' },
    { name: '食品饮料', value: 2100, color: '#f43f5e' },
    { name: '其他', value: 1400, color: '#f59e0b' },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-800 border border-dark-700 rounded-lg p-3 shadow-xl">
          <p className="text-dark-100 font-medium">{payload[0].name}</p>
          <p className="text-primary-400">¥{payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartCard title="销售分布">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-dark-300">{item.name}</span>
            <span className="text-sm text-white ml-auto">¥{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

// Order Status Chart
export const OrderStatusChart = () => {
  const data = [
    { name: '待处理', value: 24, color: '#f59e0b' },
    { name: '处理中', value: 48, color: '#6366f1' },
    { name: '已完成', value: 156, color: '#10b981' },
    { name: '已取消', value: 12, color: '#f43f5e' },
  ];

  return (
    <ChartCard title="订单状态">
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-dark-300">{item.name}</span>
              <span className="text-sm font-medium text-white">{item.value} 单</span>
            </div>
            <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / 156) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </ChartCard>
  );
};

// Recent Activity
export const RecentActivity = () => {
  const activities = [
    { id: 1, user: '张三', action: '创建了新订单', time: '2分钟前', avatar: 'bg-blue-500' },
    { id: 2, user: '李四', action: '更新了产品信息', time: '15分钟前', avatar: 'bg-green-500' },
    { id: 3, user: '王五', action: '完成了用户审核', time: '1小时前', avatar: 'bg-purple-500' },
    { id: 4, user: '赵六', action: '添加了新产品', time: '2小时前', avatar: 'bg-orange-500' },
    { id: 5, user: '孙七', action: '处理了退款申请', time: '3小时前', avatar: 'bg-pink-500' },
  ];

  return (
    <ChartCard title="最近活动">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-dark-800/30 transition-colors"
          >
            <div className={`w-10 h-10 rounded-full ${activity.avatar} flex items-center justify-center text-white font-medium text-sm flex-shrink-0`}>
              {activity.user.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-dark-100">
                <span className="font-medium">{activity.user}</span>
                <span className="text-dark-400"> {activity.action}</span>
              </p>
              <p className="text-xs text-dark-500 mt-0.5">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </ChartCard>
  );
};

export default ChartCard;
