import { FC } from "react";

const YoutubeIcon: FC<{ color?: string }> = ({ color = "#FF871C" }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.5001 25.7416C19.1857 26.4331 12.8146 26.4331 6.50012 25.7416C5.40362 25.616 4.32819 24.5987 4.15356 23.5002C3.38892 18.5295 3.38892 13.471 4.15356 8.50022C4.32825 7.40177 5.40356 6.3845 6.50012 6.25886C12.8146 5.56736 19.1857 5.56736 25.5001 6.25886C26.5963 6.38453 27.6722 7.40168 27.8467 8.50022C28.6113 13.471 28.6113 18.5295 27.8467 23.5002C27.6722 24.5986 26.5969 25.6161 25.5001 25.7416Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 16L14 12V20L20 16Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
};

export default YoutubeIcon;