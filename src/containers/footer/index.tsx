import Logo from "@/components/logo";
import { Link } from "@/i18n/navigation";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import { useTranslations } from "next-intl";
import { FC } from "react";

type WidgetMenuType = {
  title: string
  menu: {
    label: string
    href: string
    targetBlank?: boolean
  }[]
};

const widgets: WidgetMenuType[] = [
  {
    title: "sitemap",
    menu: [
      { label: "about-us", href: "#about-us" },
      { label: "destinations", href: "#destinations" },
      { label: "contact-us", href: "#contact-us" },
      { label: "gallery", href: "#gallery" }
    ]
  },
  {
    title: "meet-us",
    menu: [
      { label: "phone", href: "tel:+99371798857" },
      { label: "email", href: "mailto:info@etravel.com" },
      { label: "address", href: "https://yandex.tm/maps/10324/ashgabat/?from=api-maps&ll=58.382912%2C37.914740&mode=routes&origin=jsapi_2_1_79&rtext=~37.914900%2C58.382912&rtt=auto&ruri=~&z=18" }
    ]
  }
]

const Footer: FC = () => {
  const t = useTranslations("footer");

  const renderWidget = (menu: WidgetMenuType) => {
    return (
      <div key={menu.title} className="text-sm text-center md:text-start">
        <h2 className="font-semibold text-primary">
          {t(`${menu.title}.title`)}
        </h2>
        <ul className="mt-5 space-y-2 md:space-y-6">
          {menu.menu.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-primary hover:text-primary-700"
                href={item.href}
              >
                {t(`${menu.title}.${item.label}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <footer className="px-4 2xl:px-0 container mx-auto divide-y-[1px] divide-primary-100">
      <div className="py-6 grid gap-5 md:gap-0 md:grid-cols-2 justify-center md:justify-start">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <Link href={"/"}>
            <Logo size="w-[100px]" />
          </Link>
          <div className="inline-flex gap-4">
            <Link href={"https://instagram.com/emintravel"} target="_blank">
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">{widgets.map(renderWidget)}</div>
      </div>
      <div className="text-center py-3">
        <p className="text-sm text-primary-400">© 2024. Emin Travel</p>
      </div>
    </footer >
  )
};

export default Footer;