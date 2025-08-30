import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed inset-0 bg-bodyColor z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-20 h-20 border-4 border-yellow rounded-full flex items-center justify-center mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-yellow border-t-transparent rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">FAISAL BUKHARI</h1>
          <motion.p
            className="text-yellow text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Creative Developer
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-gray-700 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className="h-full bg-yellow rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-gray-400 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
