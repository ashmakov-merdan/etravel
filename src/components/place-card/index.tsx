import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface PlaceCardProps {
  title: string
  image: string | StaticImageData
}

const PlaceCard: FC<PlaceCardProps> = ({ title, image }) => {
  return (
    <div className="max-w-80 space-y-3">
      <div className="rounded-full overflow-hidden">
        <Image objectFit="cover" src={image} alt={"moscow"} />
      </div>
      <h3 className="text-center text-primary font-semibold text-2xl">{title}</h3>
    </div>
  )
};

export default PlaceCard;