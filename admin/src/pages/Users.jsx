import { useState } from 'react';
import {
  Table,
  Button,
  Space,
  Tag,
  Avatar,
  Input,
  Select,
  Modal,
  Form,
  message,
  Popconfirm,
} from 'antd';
import {
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Search } = Input;
const { Option } = Select;

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [form] = Form.useForm();

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      id: '1',
      name: '张三',
      email: 'zhangsan@example.com',
      phone: '13800138000',
      role: 'admin',
      status: 'active',
      avatar: null,
      createdAt: '2024-01-15',
    },
    {
      key: '2',
      id: '2',
      name: '李四',
      email: 'lisi@example.com',
      phone: '13800138001',
      role: 'user',
      status: 'active',
      avatar: null,
      createdAt: '2024-01-20',
    },
    {
      key: '3',
      id: '3',
      name: '王五',
      email: 'wangwu@example.com',
      phone: '13800138002',
      role: 'user',
      status: 'inactive',
      avatar: null,
      createdAt: '2024-02-01',
    },
    {
      key: '4',
      id: '4',
      name: '赵六',
      email: 'zhaoliu@example.com',
      phone: '13800138003',
      role: 'editor',
      status: 'active',
      avatar: null,
      createdAt: '2024-02-10',
    },
    {
      key: '5',
      id: '5',
      name: '孙七',
      email: 'sunqi@example.com',
      phone: '13800138004',
      role: 'user',
      status: 'active',
      avatar: null,
      createdAt: '2024-02-15',
    },
  ]);

  const roleConfig = {
    admin: { label: '管理员', color: 'red' },
    editor: { label: '编辑', color: 'blue' },
    user: { label: '用户', color: 'default' },
  };

  const statusConfig = {
    active: { label: '活跃', color: 'success' },
    inactive: { label: '未激活', color: 'default' },
    banned: { label: '已封禁', color: 'error' },
  };

  const columns = [
    {
      title: '用户',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <Space size="small">
          <Avatar size={40} src={record.avatar} icon={<UserOutlined />}>
            {name.charAt(0)}
          </Avatar>
          <div>
            <p className="text-dark-100 font-medium">{name}</p>
            <p className="text-dark-500 text-xs">{record.email}</p>
          </div>
        </Space>
      ),
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone) => <span className="text-dark-300">{phone}</span>,
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <Tag color={roleConfig[role].color}>{roleConfig[role].label}</Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={statusConfig[status].color}>{statusConfig[status].label}</Tag>
      ),
    },
    {
      title: '注册时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => <span className="text-dark-400">{date}</span>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            className="text-primary-400 hover:text-primary-300"
          />
          <Popconfirm
            title="确定要删除这个用户吗？"
            onConfirm={() => handleDelete(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <Button
              type="text"
              icon={<DeleteOutlined />}
              danger
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const filteredData = dataSource.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase());
    const matchStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleAdd = () => {
    setEditingUser(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
    message.success('删除成功');
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (editingUser) {
        setDataSource(
          dataSource.map((item) =>
            item.key === editingUser.key ? { ...item, ...values } : item
          )
        );
        message.success('更新成功');
      } else {
        const newUser = {
          key: Date.now().toString(),
          id: Date.now().toString(),
          ...values,
          createdAt: new Date().toISOString().split('T')[0],
        };
        setDataSource([newUser, ...dataSource]);
        message.success('创建成功');
      }

      setModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">用户管理</h1>
          <p className="text-dark-400">管理系统用户和权限</p>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          className="btn-primary"
        >
          添加用户
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card flex flex-wrap gap-4"
      >
        <Search
          placeholder="搜索用户名或邮箱"
          allowClear
          prefix={<SearchOutlined className="text-dark-400" />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-64"
        />
        <Select
          value={statusFilter}
          onChange={setStatusFilter}
          className="w-40"
        >
          <Option value="all">全部状态</Option>
          <Option value="active">活跃</Option>
          <Option value="inactive">未激活</Option>
          <Option value="banned">已封禁</Option>
        </Select>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card overflow-hidden"
      >
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            total: filteredData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      </motion.div>

      {/* Modal */}
      <Modal
        title={editingUser ? '编辑用户' : '添加用户'}
        open={modalVisible}
        onOk={handleSubmit}
        onCancel={() => {
          setModalVisible(false);
          form.resetFields();
        }}
        confirmLoading={loading}
        okText="确定"
        cancelText="取消"
        className="user-modal"
      >
        <Form form={form} layout="vertical" className="mt-4">
          <Form.Item
            name="name"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              prefix={<UserOutlined className="text-dark-400" />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '邮箱格式不正确' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-dark-400" />}
              placeholder="请输入邮箱"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input
              prefix={<PhoneOutlined className="text-dark-400" />}
              placeholder="请输入手机号"
            />
          </Form.Item>
          <Form.Item
            name="role"
            label="角色"
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select placeholder="请选择角色">
              <Option value="admin">管理员</Option>
              <Option value="editor">编辑</Option>
              <Option value="user">用户</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: '请选择状态' }]}
          >
            <Select placeholder="请选择状态">
              <Option value="active">活跃</Option>
              <Option value="inactive">未激活</Option>
              <Option value="banned">已封禁</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
