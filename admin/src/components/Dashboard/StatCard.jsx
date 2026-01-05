import { motion } from 'framer-motion';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const StatCard = ({ title, value, change, trend, icon, color, delay = 0 }) => {
  const colorClasses = {
    indigo: 'from-indigo-500 to-purple-500',
    cyan: 'from-cyan-500 to-blue-500',
    emerald: 'from-emerald-500 to-teal-500',
    amber: 'from-amber-500 to-orange-500',
    rose: 'from-rose-500 to-pink-500',
    violet: 'from-violet-500 to-purple-500',
  };

  const bgClasses = {
    indigo: 'bg-indigo-500/20 text-indigo-400',
    cyan: 'bg-cyan-500/20 text-cyan-400',
    emerald: 'bg-emerald-500/20 text-emerald-400',
    amber: 'bg-amber-500/20 text-amber-400',
    rose: 'bg-rose-500/20 text-rose-400',
    violet: 'bg-violet-500/20 text-violet-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="stat-card group"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-14 h-14 rounded-2xl ${bgClasses[color]} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${
            trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
          }`}>
            {trend === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        <h3 className="text-dark-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
