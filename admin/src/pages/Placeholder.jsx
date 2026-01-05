import { Component } from 'react';
import { motion } from 'framer-motion';

const Placeholder = ({ title, icon, description }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-dark-400 max-w-md mx-auto">{description}</p>
      </motion.div>
    </div>
  );
};

export default Placeholder;
