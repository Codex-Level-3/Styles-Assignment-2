"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ForestPath() {
  return (
    <>
      <h2>Forest Path</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image
          alt="a forest walking path"
          src="/forest.png"
          height="500"
          width="500"
        />
      </motion.div>
    </>
  );
}
