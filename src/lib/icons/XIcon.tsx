import { FC } from "react";

const XIcon: FC<{ color?: string }> = ({ color = "#FF871C" }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6073 24.9509H23.6473L10.4822 6.93123H8.30036L21.6073 24.9509ZM22.8989 4.76904H26.5796L18.5396 14.2839L28 27.2309H20.5818L14.7825 19.3763L8.14545 27.2309H4.47127L13.0698 17.0549L4 4.76904H11.5927L16.8291 11.9472L22.8989 4.76904Z" fill={color} />
    </svg>
  )
};

export default XIcon;