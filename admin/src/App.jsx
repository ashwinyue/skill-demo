import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import MainLayout from '@/components/Layout/MainLayout';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Users from '@/pages/Users';
import Placeholder from '@/pages/Placeholder';
import { AppstoreOutlined, FileTextOutlined, TeamOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';

const PrivateRoute = ({ children }) => {
  // 简化版：实际项目中应该检查认证状态
  const isAuthenticated = localStorage.getItem('token') || true; // 暂时默认通过
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#6366f1',
          colorBgBase: '#0f172a',
          colorBgContainer: '#1e293b',
          colorBgElevated: '#1e293b',
          colorBorder: 'rgba(255, 255, 255, 0.1)',
          colorText: '#f1f5f9',
          colorTextSecondary: '#94a3b8',
          colorError: '#ef4444',
          colorSuccess: '#10b981',
          colorWarning: '#f59e0b',
          borderRadius: 12,
          fontSize: 14,
        },
        components: {
          Layout: {
            headerBg: 'rgba(15, 23, 42, 0.8)',
            siderBg: 'rgba(15, 23, 42, 0.8)',
          },
          Menu: {
            darkItemBg: 'transparent',
            darkItemSelectedBg: 'rgba(99, 102, 241, 0.2)',
            darkItemHoverBg: 'rgba(51, 65, 85, 0.5)',
          },
          Table: {
            headerBg: '#1e293b',
            headerColor: '#cbd5e1',
          },
        },
      }}
    >
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route
              path="products"
              element={
                <Placeholder
                  title="产品管理"
                  icon={<AppstoreOutlined className="text-4xl text-primary-400" />}
                  description="产品管理功能正在开发中，敬请期待..."
                />
              }
            />
            <Route
              path="orders"
              element={
                <Placeholder
                  title="订单管理"
                  icon={<FileTextOutlined className="text-4xl text-accent-400" />}
                  description="订单管理功能正在开发中，敬请期待..."
                />
              }
            />
            <Route
              path="team"
              element={
                <Placeholder
                  title="团队管理"
                  icon={<TeamOutlined className="text-4xl text-emerald-400" />}
                  description="团队管理功能正在开发中，敬请期待..."
                />
              }
            />
            <Route
              path="analytics"
              element={
                <Placeholder
                  title="数据分析"
                  icon={<BarChartOutlined className="text-4xl text-amber-400" />}
                  description="数据分析功能正在开发中，敬请期待..."
                />
              }
            />
            <Route
              path="settings"
              element={
                <Placeholder
                  title="系统设置"
                  icon={<SettingOutlined className="text-4xl text-rose-400" />}
                  description="系统设置功能正在开发中，敬请期待..."
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  );
};

export default App;
