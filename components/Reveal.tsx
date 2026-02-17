"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};