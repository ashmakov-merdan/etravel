import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";

const navigation = ["about-us", "destinations", "contact-us", "gallery"];

const Menu = () => {
  const t = useTranslations('navigation');

  const renderNavigation = useMemo(() => (
    navigation.map((nav) => (
      <li key={nav} role={"listitem"}>
        <Link href={`#${nav}`} role={"link"} className="text-nowrap">{t(`${nav}`)}</Link>
      </li>
    ))
  ), [t]);

  return (
    <nav role={"navigation"} className="max-lg:hidden block z-[10]">
      <ul role={"list"} className="flex items-center justify-between">{renderNavigation}</ul>
    </nav>
  )
};

export default Menu;