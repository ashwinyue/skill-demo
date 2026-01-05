import { Table, Tag, Avatar, Space } from 'antd';
import { motion } from 'framer-motion';

const RecentOrders = () => {
  const columns = [
    {
      title: '订单编号',
      dataIndex: 'id',
      key: 'id',
      render: (text) => (
        <span className="font-mono text-sm text-primary-400">#{text}</span>
      ),
    },
    {
      title: '客户',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer) => (
        <Space size="small">
          <Avatar size={32} src={customer.avatar}>
            {customer.name.charAt(0)}
          </Avatar>
          <span className="text-dark-100">{customer.name}</span>
        </Space>
      ),
    },
    {
      title: '产品',
      dataIndex: 'product',
      key: 'product',
      render: (product) => (
        <span className="text-dark-200">{product}</span>
      ),
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <span className="font-medium text-white">¥{amount.toLocaleString()}</span>
      ),
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const statusConfig = {
          completed: { color: 'success', text: '已完成' },
          pending: { color: 'warning', text: '处理中' },
          cancelled: { color: 'error', text: '已取消' },
        };
        const config = statusConfig[status];
        return <Tag color={config.color}>{config.text}</Tag>;
      },
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      render: (time) => (
        <span className="text-dark-400 text-sm">{time}</span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      id: 'ORD-2024-001',
      customer: { name: '张三', avatar: null },
      product: 'MacBook Pro 16"',
      amount: 18999,
      status: 'completed',
      time: '2分钟前',
    },
    {
      key: '2',
      id: 'ORD-2024-002',
      customer: { name: '李四', avatar: null },
      product: 'iPhone 15 Pro Max',
      amount: 9999,
      status: 'pending',
      time: '15分钟前',
    },
    {
      key: '3',
      id: 'ORD-2024-003',
      customer: { name: '王五', avatar: null },
      product: 'AirPods Pro 2',
      amount: 1899,
      status: 'completed',
      time: '1小时前',
    },
    {
      key: '4',
      id: 'ORD-2024-004',
      customer: { name: '赵六', avatar: null },
      product: 'iPad Air 5',
      amount: 4799,
      status: 'cancelled',
      time: '2小时前',
    },
    {
      key: '5',
      id: 'ORD-2024-005',
      customer: { name: '孙七', avatar: null },
      product: 'Apple Watch Series 9',
      amount: 3199,
      status: 'completed',
      time: '3小时前',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="glass-card"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">最近订单</h3>
        <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
          查看全部 →
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="dark-table"
      />
    </motion.div>
  );
};

export default RecentOrders;
