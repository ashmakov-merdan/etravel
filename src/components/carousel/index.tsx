import { FC } from "react";
import image1 from "@/assets/turkiye.avif"
import image2 from "@/assets/russia.avif";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2
]

const DURATION = [50, 75]

const Carousel: FC<{ isReverse: boolean }> = ({ isReverse }) => {

  return (
    <div className="">
      <div className="flex gap-7">
        <motion.div initial={{ x: isReverse ? "-100%" : 0 }} animate={{ x: isReverse ? 0 : "-100%" }} transition={{ duration: DURATION[0], repeat: Infinity, ease: "linear" }} className="flex gap-7 flex-shrink-0">
          {images.map((img, i) => (
            <div className="relative h-[460px] w-80 overflow-hidden rounded-xl" key={i}>
              <Image className="object-cover" fill src={img} alt={`carousel-${i}`} />
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ x: isReverse ? "-100%" : 0 }} animate={{ x: isReverse ? 0 : "-100%" }} transition={{ duration: DURATION[0], repeat: Infinity, ease: "linear" }} className="flex gap-7 flex-shrink-0">
          {images.map((img, i) => (
            <div className="relative h-[460px] w-80 overflow-hidden rounded-xl" key={i}>
              <Image className="object-cover" fill src={img} alt={`carousel-${i}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
};

export default Carousel;