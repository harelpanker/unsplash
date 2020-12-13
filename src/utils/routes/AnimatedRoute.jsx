import { motion } from 'framer-motion';
import React from 'react';

export default function AnimatedRoute({ children }) {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 150, opacity: 0 }}>
      {children}
    </motion.div>
  );
}
