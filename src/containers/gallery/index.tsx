import Carousel from "@/components/carousel";
import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations('gallery');

  return (
    <section id={"gallery"} className="pt-20 relative 2xl:container mx-auto min-h-screen overflow-hidden h-full">
      <div className="xl:px-80 text-center space-y-6">
        <h2 className="font-semibold text-5xl text-primary">{t('heading')}</h2>
        <p className="px-4 lg:max-w-[680px] lg:mx-auto text-primary">Opening the world to everyone is at the heart of E.travel. Wherever your travels take you, we’ll show you unique and unmissable things to do in your destination.</p>
      </div>
      <div className="py-20 space-y-7">
        <Carousel isReverse />
        <Carousel isReverse={false} />
      </div>
    </section>
  )
};

export default Gallery;