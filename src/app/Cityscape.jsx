"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Cityscape() {
  return (
    <>
      <h2>City Scape</h2>
      <motion.div
        whileHover={{ rotate: [0, 0, 360, 180, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image
          alt="sunset view across a city scape"
          src="/city.png"
          height="500"
          width="500"
        />
      </motion.div>
    </>
  );
}
