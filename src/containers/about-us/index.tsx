import { FC } from "react";
import Counter from "@/shared/counter";
import SectionBox from "../section-box";

const AboutUs: FC = () => {
  return (
    <section id={"about-us"} className="pt-28 container mx-auto  grid place-items-center">
      <SectionBox isReverse={false}>
        <div className="py-14 flex-1 flex-shrink-0">
          <div className="px-20 space-y-10">
            <div className="space-y-5">
              <h2 className="text-5xl font-bold text-primary">About us</h2>
              <p className="max-w-md text-primary font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam culpa repellat suscipit est, temporibus saepe eius accusantium praesentium hic ipsam nam tenetur expedita deleniti impedit non. Aspernatur quisquam vel dolores.</p>
            </div>
            <div className="w-full text-primary inline-flex items-start gap-14">
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
        </div>
      </SectionBox>
    </section>
  )
};

export default AboutUs;