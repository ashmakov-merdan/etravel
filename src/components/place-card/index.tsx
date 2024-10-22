import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface PlaceCardProps {
  title: string
  image: string | StaticImageData
}

const PlaceCard: FC<PlaceCardProps> = ({ title, image }) => {
  return (
    <div className="space-y-3">
      <Image className="h-full w-full aspect-[9/16] rounded-full object-cover" src={image} alt={"moscow"} />
      <h3 className="text-center text-primary font-semibold text-2xl">{title}</h3>
    </div>
  )
};

export default PlaceCard;