import { FC } from "react";
import Counter from "@/shared/counter";
import SectionBox from "../section-box";
import useWindowSize from "@/lib/hooks/useWindowSize";
import MobileBox from "../mobile-box";
import about from "@/assets/about-us.png"
import { useTranslations } from "next-intl";

const AboutUs: FC = () => {
  const size = useWindowSize();
  const t = useTranslations("about-us");

  return (
    <section id={"about-us"} className="px-4 lg:px-0 pt-28 container mx-auto  grid place-items-center">
      {typeof window !== 'undefined' && size.width < 1024 ? <MobileBox image={about}>
        <div className="bg-secondary-100 p-5 space-y-4">
          <h2 className="text-2xl md:text-5xl font-semibold text-primary">{t('heading')}</h2>
          <p className="text-primary text-base md:text-lg">{t('description')}</p>
          <div className="w-full text-primary flex flex-col items-center justify-center md:flex-row md:items-start gap-14">
            <div className="text-center">
              <Counter value={1000} className="text-5xl font-bold text-secondary" />
              <p className="text-xl text-wrap">{t('completed-trips')}</p>
            </div>
            <div className="text-center">
              <Counter value={800} className="text-5xl font-bold text-secondary" />
              <p className="text-xl max-w-[220px]">{t('satisfied-clients')}</p>
            </div>
          </div>
        </div>
      </MobileBox> : <SectionBox isReverse={false}>
        <div className="py-14 flex-1 flex-shrink-0">
          <div className="px-20 space-y-10">
            <div className="space-y-5">
              <h2 className="text-5xl font-bold text-primary">{t('heading')}</h2>
              <p className="max-w-md text-primary font-normal">{t('description')}</p>
            </div>
            <div className="w-full text-primary inline-flex items-start gap-14">
              <div className="">
                <Counter value={1000} className="text-5xl font-bold text-secondary" />
                <p className="text-xl text-wrap">{t('completed-trips')}</p>
              </div>
              <div className="">
                <Counter value={800} className="text-5xl font-bold text-secondary" />
                <p className="text-xl max-w-[220px]">{t('satisfied-clients')}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionBox>}
    </section>
  )
};

export default AboutUs;