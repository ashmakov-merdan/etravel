import Logo from "@/components/logo";
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
      { label: "phone", href: "tel:+99365616263" },
      { label: "email", href: "mailto:info@etravel.com" },
      { label: "address", href: "Ashgabat" }
    ]
  }
]

const Footer: FC = () => {
  const t = useTranslations("footer");

  const renderWidget = (menu: WidgetMenuType) => {
    return (
      <div className="text-sm">
        <h2 className="font-semibold text-primary">
          {t(`${menu.title}.title`)}
        </h2>
        <ul className="mt-5 space-y-6">
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
    <footer className="container mx-auto divide-y-[1px] divide-primary-100">
      <div className="py-6 grid grid-cols-2">
        <div className="space-y-6">
          <Logo size="w-[120px]" />
          <p className="max-w-[480px] text-primary-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora rerum debitis accusantium assumenda, a soluta expedita aliquid et quibusdam deleniti?</p>
          <div className="inline-flex gap-4">
            <InstagramIcon />
            <InstagramIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="grid grid-cols-3">{widgets.map(renderWidget)}</div>
      </div>
      <div className="text-center py-3">
        <p className="text-sm text-primary-400">© 2024. Emin Travel</p>
      </div>
    </footer>
  )
};

export default Footer;