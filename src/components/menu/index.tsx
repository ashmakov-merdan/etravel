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
    <nav role={"navigation"} className="py-6 max-lg:hidden block z-[10]">
      <ul role={"list"} className="inline-flex items-center gap-12">{renderNavigation}</ul>
    </nav>
  )
};

export default Menu;