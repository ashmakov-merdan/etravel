import { FC } from "react";

interface TranslateIconProps {
  color?: string
}

const TranslateIcon: FC<TranslateIconProps> = ({ color="#121212" }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.7188 16.7471L13.5625 8.43465L9.40625 16.7471" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5938 14.3721H16.5312" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.03125 3.0909V4.87215" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.28125 4.87215H11.7812" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.40625 4.87215C9.40625 6.76181 8.65558 8.57409 7.31939 9.91028C5.98319 11.2465 4.17092 11.9971 2.28125 11.9971" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.0625 7.24721C5.5545 8.63582 6.46467 9.83789 7.66782 10.688C8.87097 11.5382 10.308 11.9947 11.7812 11.9947" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
};

export default TranslateIcon;