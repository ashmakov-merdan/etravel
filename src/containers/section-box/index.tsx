import { FC, ReactNode } from "react";
import waveOrange from "@/assets/wave-orange.svg"
import waveBlue from '@/assets/wave-blue.svg'
import Image from "next/image";

interface SectionBoxProps {
  children: ReactNode
  isReverse: boolean
};

const SectionBox: FC<SectionBoxProps> = ({ isReverse = false, children }) => {
  return (
    <div className={`w-full aspect-[16/7] flex ${isReverse === false ? "flex-row bg-secondary-100" : "flex-row-reverse bg-primary-100"} rounded-[100px] overflow-hidden`}>
      {children}
      <div className={`relative flex-1 ${isReverse === false ? "about" : "contact"}`}>
        {!isReverse ? (
          <div className="flex-shrink-0 w-fit">
            <Image src={waveOrange} alt={'wave-orange'} />
          </div>
        ) : (
          <div className="flex-shrink-0 absolute right-0 top-0 w-fit">
            <Image src={waveBlue} alt={'wave-blue'} />
          </div>
        )}
      </div>
    </div>
  )
};

export default SectionBox;