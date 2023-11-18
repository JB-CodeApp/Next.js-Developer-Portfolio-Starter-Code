import { motion } from "framer-motion";
import Image from "next/image";

const LogoAnimation = () => {
  return (
    <motion.div
      className="logo-container"
      initial={{ opacity: 0, rotateY: -180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 180 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Image
        src="/images/laravel.png"
        alt="Laravel_Logo"
        width={500}
        height={1000}
      />
    </motion.div>
  );
};

export default LogoAnimation;
