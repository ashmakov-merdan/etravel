"use client"
import { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/img-1.png"
import Image from "next/image";

const HEIGHT = 1000;

const Header: FC = () => {
  return (
    <>
      <header className="relative h-[200vh] pt-96 grid bg-secondary-100" style={{ height: `calc(${HEIGHT})px + 100vh` }}>
        <motion.div className="absolute left-0 right-0 top-28 mx-auto z-[2]">
          <Image className="mx-auto" width={620} src={heroImg} alt={"hero-image"} />
        </motion.div>
        <CenterContent />
      </header>
    </>
  )
};

const CenterContent = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [HEIGHT, HEIGHT + 500], [1, 9])
  const backgroundSize = useTransform(scrollY, [800, HEIGHT + 500], ["170%", "100%"]);
  const width = useTransform(scrollY, [0, HEIGHT], ["80%", "100%"]);
  const height = useTransform(scrollY, [0, HEIGHT], ["600px", "100vh"])
  const borderRadius = useTransform(scrollY, [0, HEIGHT], ["40px", "0px"])

  return (
    <motion.div initial={{ top: "100vh" }} whileInView={{ top: 0 }} className="mx-auto p-8 sticky top-0 left-0 right-0 bg-primary-50 overflow-hidden"
      style={{
        height,
        width,
        opacity,
        backgroundSize,
        borderRadius
      }}
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} className="pt-14 space-y-6 absolute top-10 left-0 right-0 mx-auto w-fit text-center">
        <div>
          <h2 className="text-6xl font-bold text-primary">Explore The World</h2>
          <h2 className="text-6xl font-bold text-primary">Travel with us</h2>
        </div>
        <p className="mx-auto max-w-[403px] text-primary">Explore wonders all over the world right now and have the latest experience of adventuring in different places with our best service for you.</p>
      </motion.div>
    </motion.div>
  )
}

export default Header;