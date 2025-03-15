import DestinationCard from "@/components/destionation-card";
import destinations from "@/lib/constants/destinations";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";

const Destinations: FC = () => {
  const t = useTranslations("destinations");

  const renderDestinations = useMemo(() => (
    destinations.map((destination) => <DestinationCard key={destination.title} {...destination} />)
  ), []);

  return (
    <section id={"destinations"} className="px-4 2xl:px-0 pt-20 container mx-auto h-full space-y-10">
      <h2 className="text-center text-5xl text-primary font-bold">{t("heading")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">{renderDestinations}</div>
    </section>
  )
};

export default Destinations;