import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface MobileBoxProps {
  image: string | StaticImageData
  children: ReactNode
}

const MobileBox: FC<MobileBoxProps> = ({ image, children }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-[45px]">
      <div className="relative">
        <Image src={image} alt={"img about"} />
      </div>
      <div>{children}</div>
    </div>
  )
};

export default MobileBox;