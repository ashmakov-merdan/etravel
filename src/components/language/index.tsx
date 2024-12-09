import { AnimatePresence, motion } from "framer-motion"
import { usePathname, useRouter } from "@/i18n/navigation";
import { startTransition, useState } from "react";
import { useParams } from "next/navigation";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Language = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const { locale } = params;
  const [show, setShow] = useState<boolean>(false);

  const onChangeLocale = (value: string) => {
    startTransition(() => {
      router.replace(
        // eslint-disable-next-line
        // @ts-ignore
        { pathname, params },
        { locale: value }
      )
    });
    setShow(!show)
  }

  return (
    <div className="flex justify-end z-50">
      <button className="p-2.5 rounded-full border border-neutral-500 hover:border-primary backdrop-blur-md bg-white/30" onClick={() => setShow(!show)}>
        <GlobeAltIcon className={"size-5"} color="black" />
      </button>
      <AnimatePresence>
        {show ? <motion.ul className="absolute space-y-2 text-primary" animate={{ y: 60, opacity: 1 }} exit={{ y: 0, opacity: 0 }}>
          {locale.toString().toLowerCase() !== "en" && <motion.li onClick={() => onChangeLocale("en")} className="w-12 h-12 grid place-items-center rounded-full border border-neutral-500 hover:border-primary backdrop-blur-md bg-white/40 cursor-pointer">EN</motion.li>}
          {locale.toString().toLowerCase() !== "ru" && <motion.li onClick={() => onChangeLocale("ru")} transition={{ duration: 0.2 }} initial={{y: -50}} animate={{ y: 0 }} exit={{ y: -50 }} className="w-12 h-12 grid place-items-center rounded-full border border-neutral-500 hover:border-primary backdrop-blur-md bg-white/40 cursor-pointer">RU</motion.li>}
          {locale.toString().toLowerCase() !== "tm" && <motion.li onClick={() => onChangeLocale("tm")} transition={{ duration: 0.2 }} initial={{y: -100}} animate={{ y: 0 }} exit={{ y: -100 }} className="w-12 h-12 grid place-items-center rounded-full border border-neutral-500 hover:border-primary backdrop-blur-md bg-white/40 cursor-pointer">TM</motion.li>}
        </motion.ul> : null}
      </AnimatePresence>
    </div>
  )
};

export default Language;