import { FC } from "react";
import Counter from "@/shared/counter";
import SectionBox from "../section-box";
import useWindowSize from "@/lib/hooks/useWindowSize";
import MobileBox from "../mobile-box";
import about from "@/assets/about-us.png"

const AboutUs: FC = () => {
  const size = useWindowSize();

  return (
    <section id={"about-us"} className="px-4 lg:px-0 pt-28 container mx-auto  grid place-items-center">
      {size.width < 1024 ? <MobileBox image={about}>
        <div className="bg-secondary-100 p-5 space-y-4">
          <h2 className="text-2xl md:text-5xl font-semibold text-primary">About us</h2>
          <p className="text-primary text-base md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam culpa repellat suscipit est, temporibus saepe eius accusantium praesentium hic ipsam nam tenetur expedita deleniti impedit non. Aspernatur quisquam vel dolores</p>
          <div className="w-full text-primary flex flex-col items-center justify-center md:flex-row md:items-start gap-14">
            <div className="text-center">
              <Counter value={1000} className="text-5xl font-bold text-secondary" />
              <p className="text-xl text-wrap">Amala aşyrylan syýahatlar</p>
            </div>
            <div className="text-center">
              <Counter value={800} className="text-5xl font-bold text-secondary" />
              <p className="text-xl max-w-[220px]">Satisfied clients</p>
            </div>
          </div>
        </div>
      </MobileBox> : <SectionBox isReverse={false}>
        <div className="py-14 flex-1 flex-shrink-0">
          <div className="px-20 space-y-10">
            <div className="space-y-5">
              <h2 className="text-5xl font-bold text-primary">About us</h2>
              <p className="max-w-md text-primary font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam culpa repellat suscipit est, temporibus saepe eius accusantium praesentium hic ipsam nam tenetur expedita deleniti impedit non. Aspernatur quisquam vel dolores.</p>
            </div>
            <div className="w-full text-primary inline-flex items-start gap-14">
              <div className="">
                <Counter value={1000} className="text-5xl font-bold text-secondary" />
                <p className="text-xl text-wrap">Amala aşyrylan syýahatlar</p>
              </div>
              <div className="">
                <Counter value={800} className="text-5xl font-bold text-secondary" />
                <p className="text-xl max-w-[220px]">Satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </SectionBox>}
    </section>
  )
};

export default AboutUs;