import { FC } from "react";
import PlaceCard from "../place-card";
import image1 from "@/assets/russia.avif";
import image2 from "@/assets/turkiye.avif";
import image3 from "@/assets/germany.png";
import image4 from "@/assets/uzbek.png";

const places = [
  { title: "Moscow", image: image1 },
  { title: "Turkiye", image: image2 },
  { title: "Germany", image: image3 },
  { title: "Tashkent", image: image4 },
];

const Hero: FC = () => {
  return (
    <div className="px-4 lg:px-0 container mx-auto pt-40 space-y-32">
      <div className="text-center space-y-3">
        <div>
          <h2 className="text-4xl sm:text-6xl font-semibold text-primary">Explore The World</h2>
          <h2 className="text-4xl sm:text-6xl font-semibold text-primary">Travel with us</h2>
        </div>
        <p className="text-primary font-normal max-w-[400px] mx-auto">Explore wonders all over the world right now and have the latest experience of adventuring in different places with our best service for you. clas</p>
      </div>
      <div className="text-center space-y-10">
        <div className="space-y-3">
          <h3 className="text-3xl sm:text-4xl font-semibold text-primary">Top destination choices for you in the world</h3>
          <p className="mx-auto max-w-[500px] text-primary">Explore wonders all over the world right now and have the latest experience of adventuring in different places with our best service for you. Use Reserve Now & Pay Later to secure the activities you don’t want to miss without being locked in.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
          { places.map((place) => <PlaceCard key={place.title} {...place} />)}
        </div>
      </div>
    </div>
  )
};

export default Hero;