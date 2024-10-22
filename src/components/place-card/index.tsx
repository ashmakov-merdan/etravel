import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface PlaceCardProps {
  title: string
  image: string | StaticImageData
}

const PlaceCard: FC<PlaceCardProps> = ({ title, image }) => {
  const t = useTranslations('places');

  return (
    <div className="space-y-3">
      <Image className="h-full w-full aspect-[9/16] rounded-full object-cover" src={image} alt={"moscow"} />
      <h3 className="text-center text-primary font-semibold text-2xl">{t(title)}</h3>
    </div>
  )
};

export default PlaceCard;