import { motion } from 'framer-motion';

const ScaleUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.4, 
      delay: delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
);
export default ScaleUp;