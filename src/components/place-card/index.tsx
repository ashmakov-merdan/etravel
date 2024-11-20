import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface PlaceCardProps {
  title: string
  image: string | StaticImageData
  index: number
}

const PlaceCard: FC<PlaceCardProps> = ({ title, image, index }) => {
  const t = useTranslations('places');
  const { scrollY } = useScroll();

  const initialOffset = index === 0 || index === 3 ? "-130px" : "0px";
  const cardY = useTransform(
    scrollY,
    [0, 800],
    typeof window !== 'undefined' && window.innerWidth > 1024 ? [initialOffset, "0px"] : ["0px", "0px"]
  );
  
  return (
    <motion.div className="relactive space-y-3" style={{ y: cardY }} transition={{ duration: 0.4, type: "spring" }}>
      <Image className="h-full w-full aspect-[9/15] rounded-full object-cover" src={image} alt={"moscow"} />
      <h3 className="text-center text-primary font-semibold text-2xl">{t(title)}</h3>
    </motion.div>
  )
};

export default PlaceCard;