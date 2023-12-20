import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const Background = () => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ scale: 1.1 });
  };

  const handleMouseLeave = () => {
    controls.start({ scale: 1 });
  };

  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 h-full bg-yellow-300"
    />
  );
};

export default Background;
