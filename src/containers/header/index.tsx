"use client"
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <header ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.div style={{ y: textY }} className="relative flex flex-col items-center text-white text-6xl text-center font-semibold z-[5]">
        <h2>Explore the world</h2>
        <h2>Travel with us</h2>
        <p className="max-w-md text-base font-normal">Explore wonders all over the world right now and have the latest experience of adventuring in different places with our best service for you.</p>
      </motion.div>
      <motion.div
        className="hero-image absolute inset-0 z-[-2]"
        style={{ y: backgroundY }}
      />
      <div className="absolute bg-primary bg-opacity-30 inset-0 z-[-1]" />
    </header>
  )
};

export default Header;