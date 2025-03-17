import logoEmin from "@/assets/logo-spring.svg"
import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  size?: string
}

const Logo: FC<LogoProps> = ({ size="w-72" }) => {
  return (
    <Image className={`${size}`} src={logoEmin} alt={"logo"} />
  )
};

export default Logo;