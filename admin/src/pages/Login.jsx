import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState('account'); // account or qrcode

  const onFinish = async (values) => {
    setLoading(true);
    // 模拟登录
    setTimeout(() => {
      setLoading(false);
      message.success('登录成功');
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="glass-card p-8 md:p-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/30">
              <span className="text-white font-bold text-3xl">A</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-bold text-white mb-2">欢迎回来</h1>
            <p className="text-dark-400">登录到 Admin 管理系统</p>
          </motion.div>

          {/* Form */}
          <AnimatePresence mode="wait">
            {loginType === 'account' ? (
              <motion.div
                key="account"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Form
                  name="login"
                  onFinish={onFinish}
                  size="large"
                  layout="vertical"
                  requiredMark={false}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名或邮箱' }]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-dark-400" />}
                      placeholder="用户名或邮箱"
                      className="h-12"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="text-dark-400" />}
                      placeholder="密码"
                      className="h-12"
                    />
                  </Form.Item>

                  <div className="flex items-center justify-between mb-6">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox className="text-dark-400">记住我</Checkbox>
                    </Form.Item>
                    <a href="#" className="text-primary-400 hover:text-primary-300 text-sm">
                      忘记密码？
                    </a>
                  </div>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      block
                      className="btn-primary h-12 text-base"
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-dark-700/50" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-dark-900/80 text-dark-500">或</span>
                  </div>
                </div>

                {/* Register Link */}
                <div className="text-center">
                  <span className="text-dark-400">还没有账号？</span>
                  <a
                    href="#"
                    className="text-primary-400 hover:text-primary-300 ml-1 font-medium"
                  >
                    立即注册
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="qrcode"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8"
              >
                <div className="w-48 h-48 mx-auto bg-white rounded-2xl p-4 mb-6 flex items-center justify-center">
                  {/* QR Code placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl flex items-center justify-center">
                    <span className="text-dark-400 text-sm">扫码登录</span>
                  </div>
                </div>
                <p className="text-dark-300 mb-2">使用手机APP扫码登录</p>
                <p className="text-dark-500 text-sm">请确保设备已连接网络</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Type Toggle */}
          <div className="flex justify-center mt-6 gap-4">
            <Button
              type={loginType === 'account' ? 'primary' : 'default'}
              size="small"
              onClick={() => setLoginType('account')}
              className={loginType === 'account' ? 'bg-primary-600' : 'text-dark-400'}
            >
              账号登录
            </Button>
            <Button
              type={loginType === 'qrcode' ? 'primary' : 'default'}
              size="small"
              onClick={() => setLoginType('qrcode')}
              className={loginType === 'qrcode' ? 'bg-primary-600' : 'text-dark-400'}
            >
              扫码登录
            </Button>
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-dark-500 text-sm mt-6"
        >
          © 2024 Admin System. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
