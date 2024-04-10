"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MountainView() {
  return (
    <>
      <h2>Mountain View</h2>
      <motion.div
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <Image
          alt="view of a snow covered mountain"
          src="/mountain.png"
          height="500"
          width="500"
        />
      </motion.div>
    </>
  );
}
