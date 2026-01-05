// 格式化日期
export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 格式化时间
export const formatDateTime = (date) => {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${formatDate(date)} ${hours}:${minutes}`;
};

// 格式化数字
export const formatNumber = (num) => {
  return new Intl.NumberFormat('zh-CN').format(num);
};

// 格式化文件大小
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 获取随机颜色
export const getRandomColor = () => {
  const colors = ['#6366f1', '#22d3ee', '#a855f7', '#f43f5e', '#10b981', '#f59e0b'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// 延迟函数
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 防抖
export const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

// 节流
export const throttle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      fn.apply(this, args);
    }
  };
};

// 模拟 API 响应
export const mockApiResponse = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, data }), delay);
  });
};
