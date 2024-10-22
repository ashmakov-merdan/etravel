import Image from "next/image";
import { FC } from "react";
import moscow from "@/assets/russia.avif"

interface PlaceCardProps {
  title: string
  image: string
}

const PlaceCard: FC = () => {
  return (
    <div className="max-w-80 space-y-3">
      <div className="rounded-full overflow-hidden">
        <Image objectFit="cover" src={moscow} alt={"moscow"} />
      </div>
      <h3 className="text-center text-primary font-semibold text-2xl">Moscow</h3>
    </div>
  )
};

export default PlaceCard;