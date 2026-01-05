import { useState } from 'react';
import { Layout, Input, Dropdown, Badge, Avatar, Space } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Header } = Layout;

const HeaderComponent = ({ collapsed, setCollapsed }) => {
  const [notifications] = useState([
    { id: 1, title: '新用户注册', desc: '张三刚刚注册了账号', time: '5分钟前', read: false },
    { id: 2, title: '系统更新', desc: '系统已更新到最新版本', time: '1小时前', read: false },
    { id: 3, title: '订单提醒', desc: '您有3个新订单待处理', time: '2小时前', read: true },
  ]);

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '账户设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  const notificationItems = notifications.map((item) => ({
    key: item.id,
    label: (
      <div className={`p-2 rounded-lg ${!item.read ? 'bg-primary-600/10' : ''}`}>
        <p className="text-sm font-medium text-dark-100">{item.title}</p>
        <p className="text-xs text-dark-400">{item.desc}</p>
        <p className="text-xs text-dark-500 mt-1">{item.time}</p>
      </div>
    ),
  }));

  return (
    <Header
      className="fixed top-0 right-0 left-0 md:left-[260px] h-20 z-50 glass !bg-dark-950/80 backdrop-blur-xl border-b border-dark-700/30 flex items-center justify-between px-6 transition-all duration-300"
      style={{
        left: collapsed ? '80px' : '260px',
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 rounded-xl bg-dark-800/50 hover:bg-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-300"
        >
          <MenuOutlined />
        </button>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          className="hidden lg:block"
        >
          <Input
            placeholder="搜索功能、用户、订单..."
            prefix={<SearchOutlined className="text-dark-400" />}
            className="w-80 bg-dark-800/50 border-dark-700/50 rounded-xl h-10"
          />
        </motion.div>
      </div>

      {/* Right */}
      <Space size="middle">
        {/* Theme Toggle */}
        <button className="w-10 h-10 rounded-xl bg-dark-800/50 hover:bg-dark-700/50 flex items-center justify-center text-dark-300 hover:text-yellow-400 transition-all duration-300">
          <MoonOutlined />
        </button>

        {/* Notifications */}
        <Dropdown
          menu={{ items: notificationItems }}
          trigger={['click']}
          placement="bottomRight"
        >
          <button className="relative w-10 h-10 rounded-xl bg-dark-800/50 hover:bg-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white transition-all duration-300">
            <Badge count={notifications.filter((n) => !n.read).length} size="small">
              <BellOutlined />
            </Badge>
          </button>
        </Dropdown>

        {/* User Avatar */}
        <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
          <div className="flex items-center gap-3 cursor-pointer hover:bg-dark-800/30 rounded-xl p-2 transition-all duration-300">
            <Avatar
              size={40}
              className="bg-gradient-to-br from-primary-500 to-accent-500"
              icon={<UserOutlined />}
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-dark-100">管理员</p>
              <p className="text-xs text-dark-400">超级管理员</p>
            </div>
          </div>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default HeaderComponent;
