import TranslateIcon from "@/lib/icons/TranslateIcon";
import { useTranslations } from "next-intl";

const Language = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex justify-end">
        <button className="p-3 border rounded-full border-neutral-500">
          <TranslateIcon color={"#737373"} />
        </button>
      </div>
    </>
  )
};

export default Language;