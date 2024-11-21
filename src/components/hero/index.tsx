import { FC } from "react";
import PlaceCard from "../place-card";
import image1 from "@/assets/russia.avif";
import image2 from "@/assets/turkiye.avif";
import image3 from "@/assets/frankfurt.webp";
import image4 from "@/assets/tashkent.jpg";
import { useTranslations } from "next-intl";

export const places = [
  { title: "russia", image: image1 },
  { title: "turkiye", image: image2 },
  { title: "germany", image: image3 },
  { title: "uzbekistan", image: image4 },
];

const Hero: FC = () => {
  const t = useTranslations('hero');

  return (
    <div className="px-4 lg:px-0 container mx-auto pt-28 lg:pt-64 space-y-32">
      <div className="text-center space-y-3">
        <div>
          <h2 className="text-4xl sm:text-6xl font-semibold text-primary">{t('explore-the-world')}</h2>
          <h2 className="text-4xl sm:text-6xl font-semibold text-primary">{t('travel-with-us')}</h2>
        </div>
        <p className="text-primary font-normal max-w-[400px] mx-auto">{t('description')}</p>
      </div>
      <div className="text-center space-y-10">
        <div className="space-y-3">
          <h3 className="text-3xl sm:text-4xl font-semibold text-primary">{t('best-choices')}</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
          { places.map((place, index) => <PlaceCard key={place.title} index={index} {...place} />)}
        </div>
      </div>
    </div>
  )
};

export default Hero;