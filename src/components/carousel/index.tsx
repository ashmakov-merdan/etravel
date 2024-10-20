import { FC, useEffect, useState } from "react";
import image1 from "@/assets/turkiye.avif"
import image2 from "@/assets/russia.avif";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue, ValueAnimationTransition } from "framer-motion";

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

const DURATION = [40, 75]

const Carousel: FC = () => {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);
  const [duration, setDuration] = useState<number>(DURATION[0])
  const [finish, setFinish] = useState<boolean>(false);
  const [rerender, setRerender] = useState<boolean>(false);

  const options: ValueAnimationTransition<number> = {
    ease: "linear",
    duration,
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0
  }

  useEffect(() => {
    let controls;
    const final = -width / 2 - 8

    if (finish) {
      controls = animate(x, [x.get(), final], {
        ...options,
        duration: duration * (1 - x.get() / final),
        onComplete: () => {
          setFinish(false);
          setRerender(!rerender)
        }
      })
    } else {
      controls = animate(x, [0, final], { ...options })
    }


    return controls?.stop
  }, [x, width, duration, finish, rerender, options]);

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="absolute left-0 flex gap-4"
      onHoverStart={() => {
        setFinish(true)
        setDuration(DURATION[1])
      }}
      onHoverEnd={() => {
        setFinish(true)
        setDuration(DURATION[0])
      }}>
      {[...images, ...images].map((img, i) => (
        <div className="relative h-[460px] w-80 overflow-hidden rounded-xl" key={i}>
          <Image className="object-cover" fill src={img} alt={`carousel-${i}`} />
        </div>
      ))}
    </motion.div>
  )
};

export default Carousel;