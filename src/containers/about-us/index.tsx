"use client"
import logoPrimary from "@/assets/logo-primary.svg"
import image from "@/assets/img-1.png"
import { experiences } from "@/constants";
import Image from "next/image";
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <section ref={ref} id={"about-us"} className="container pt-[340px] mx-auto min-h-screen flex justify-center items-center">
      <div className="relative">
        <motion.div style={{ y: logoY }} className="absolute -top-[270px] left-0 right-0 flex justify-center z-[-3]">
          <Image src={logoPrimary} alt={"logo-primary"} priority />
        </motion.div>
        <div className="absolute -top-[240px] left-20 right-0 flex justify-center z-[1]">
          <Image width={540} src={image} alt={"about-us"} />
        </div>
        <div className="relative p-24 min-w-lg max-w-5xl w-full grid grid-cols-2 items-center gap-20 bg-white rounded-[40px] z-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary">About us</h2>
            <p className="text-neutral-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-4">
              {experiences.map((experience) => (
                <div className="px-5 py-4 space-y-2 border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md text-center transition-all">
                  <h2 className="text-3xl text-secondary font-semibold">{experience.value}</h2>
                  <p className="text-neutral-700 text-sm">{experience.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default AboutUs;