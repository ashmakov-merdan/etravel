import { navigation } from "@/constants";
import { FC } from "react";

const Navigation: FC = () => {
  return (
    <nav>
      <ul className="inline-flex items-center gap-12">
        {navigation.map((item) => (
          <a href={`#${item}`} className="text-white capitalize" key={item}>{item}</a>
        ))}
      </ul>
    </nav>
  )
};

export default Navigation;