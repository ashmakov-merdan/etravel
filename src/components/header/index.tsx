"use client"
import { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { places } from "../hero";
import PlaceCard from "../place-card";
import { useTranslations } from "next-intl";
import Button from "@/shared/button";

const HEIGHT = 1000;

const Header: FC = () => {
  return (
    <header className="relative h-fit lg:pt-36 grid bg-secondary-100">
      <CenterContent />
    </header>
  )
};

const CenterContent = () => {
  const t = useTranslations();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [HEIGHT, HEIGHT + 500], [1, 9])
  const backgroundSize = useTransform(scrollY, [800, HEIGHT], ["170%", "100%"]);
  const width = useTransform(scrollY, [0, 250], ["90%", "100%"]);
  const borderRadius = useTransform(scrollY, [0, HEIGHT], ["40px", "0px"])
  const destinationY = useTransform(scrollY, [100, 0], ["100px", "0px"])
  const titleOpacity = useTransform(scrollY, [200, 0], [1, 0]);

  return (
    <motion.div className="mx-auto px-8  pt-4 pb-8 sticky top-0 left-0 right-0 bg-primary-50 overflow-hidden space-y-20"
      style={{
        width,
        opacity,
        backgroundSize,
        borderRadius
      }}
    >
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, type: "spring" }} className="pt-10 space-y-4 mx-auto w-fit text-center">
        <div className="">
          <h2 className="text-7xl font-bold text-primary">{t('hero.explore-the-world')}</h2>
          <h2 className="text-7xl font-bold text-primary">{t('hero.travel-with-us')}</h2>
        </div>
        <p className="mx-auto max-w-[403px] text-primary">{t('hero.description')}</p>
        <div>
          <Button className="bg-secondary-600 hover:bg-secondary-500 transition-colors !rounded-full">
            <a href="#contact-us">{t('navigation.contact-us')}</a>
          </Button>
        </div>
      </motion.div>
      <motion.div style={{ y: destinationY }} className="pb-20 container mx-auto text-center space-y-10 transition-all duration-500">
        <div className="space-y-3">
          <motion.h3 style={{ opacity: titleOpacity }} transition={{ duration: 0.4, type: "keyframes" }} className="text-xl md:text-xl lg:text-2xl xl:text-4xl font-semibold text-primary">Top destination choices for you in the world</motion.h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
          {places.map((place, index) => <PlaceCard key={place.title} {...place} index={index} />)}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Header;