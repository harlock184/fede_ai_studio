"use client";

import { motion } from "framer-motion";

/**
 * Wrapper de micro-animación de entrada (fade + slide sutil al entrar en viewport).
 * Se puede usar dentro de Server Components pasándole children server-rendered.
 * @param {{ children: React.ReactNode, delay?: number, className?: string }} props
 */
export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
