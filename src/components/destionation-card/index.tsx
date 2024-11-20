import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import LocationIcon from "@/lib/icons/LocationIcon";
import { useTranslations } from "next-intl";

interface DestinationCardProps {
  title: string
  country: string
  image: StaticImageData
}

const DestinationCard: FC<DestinationCardProps> = ({ title, country, image }) => {
  const t = useTranslations('places');

  return (
    <div className="group p-6 relative w-full aspect-[9/14] rounded-3xl overflow-hidden grid items-end">
      <Image priority className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover z-[-1]" src={image}  alt={'name'} />
      <div className={`space-y-2 transition-transform z-[2]`}>
        <h2 className="text-white font-bold text-2xl">{t(title)}</h2>
        <div className="flex items-center gap-2 font-normal text-white">
          <span className="text-secondary">
            <LocationIcon />
          </span>
          <span className="text-xl">{t(country)}</span>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 w-full h-2/5 bg-gradient-to-t from-primary opacity-80 z-[1]`} />
    </div>
  )
};

export default DestinationCard;