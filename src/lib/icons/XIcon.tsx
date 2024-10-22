import { FC } from "react";

const XIcon: FC<{ color?: string }> = ({ color="#FF871C" }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6073 20.9509H19.6473L6.48218 2.93123H4.30036L17.6073 20.9509ZM18.8989 0.769043H22.5796L14.5396 10.2839L24 23.2309H16.5818L10.7825 15.3763L4.14545 23.2309H0.471274L9.06982 13.0549L0 0.769043H7.59273L12.8291 7.94722L18.8989 0.769043Z" fill={color} />
    </svg>

  )
};

export default XIcon;