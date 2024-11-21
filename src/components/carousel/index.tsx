import { FC } from "react";
import image1 from "@/assets/turkiye.avif"
import image2 from "@/assets/russia.avif";
import image3 from "@/assets/dubai.jpeg"
import image4 from "@/assets/france.jpg"
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4
]

const DURATION = [50, 75]

const Carousel: FC<{ isReverse: boolean }> = ({ isReverse }) => {

  return (
    <div className="">
      <div className="flex gap-4 md:gap-7 xl:gallery-gradient">
        <motion.div initial={{ x: isReverse ? "-100%" : 0 }} animate={{ x: isReverse ? 0 : "-100%" }} transition={{ duration: DURATION[0], repeat: Infinity, ease: "linear" }} className="flex gap-7 flex-shrink-0">
          {images.map((img, i) => (
            <div className="relative h-[360px] md:h-[460px] w-64 md:w-80 overflow-hidden rounded-[45px]" key={i}>
              <Image className="object-cover" fill src={img} alt={`carousel-${i}`} />
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ x: isReverse ? "-100%" : 0 }} animate={{ x: isReverse ? 0 : "-100%" }} transition={{ duration: DURATION[0], repeat: Infinity, ease: "linear" }} className="flex gap-7 flex-shrink-0">
          {images.map((img, i) => (
            <div className="relative h-[360px] md:h-[460px] w-64 md:w-80 overflow-hidden rounded-[45px]" key={i}>
              <Image className="object-cover" fill src={img} alt={`carousel-${i}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
};

export default Carousel;