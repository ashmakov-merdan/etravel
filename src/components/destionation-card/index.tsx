import Image from "next/image";
import { FC } from "react";
import StarIcon from "@/lib/icons/StarIcon";
import LocationIcon from "@/lib/icons/LocationIcon";
import { useTranslations } from "next-intl";

interface DestinationCardProps {
  title: string
  country: string
  image: string
}

const DestinationCard: FC<DestinationCardProps> = ({ title, country, image }) => {
  const t = useTranslations('places');

  return (
    <div className="group p-6 relative w-full aspect-[9/14] rounded-3xl overflow-hidden grid items-end"
    >
      <Image width={100} height={100} className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover z-[-1]" src={image}  alt={'name'} />
      <div className={`space-y-2 transition-transform z-[2]`}>
        <h2 className="text-white font-bold text-2xl">{t(title)}</h2>
        <div className="flex items-center gap-2 font-normal text-white">
          <span className="text-secondary">
            <LocationIcon />
          </span>
          <span className="text-xl">{t(country)}</span>
        </div>
        <div className="w-full inline-flex justify-between items-center">
          <div className="text-secondary inline-flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon type="outline" />
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 w-full h-2/5 bg-gradient-to-t from-primary opacity-80 z-[1]`} />
    </div>
  )
};

export default DestinationCard;