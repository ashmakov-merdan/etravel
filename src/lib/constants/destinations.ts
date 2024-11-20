import moscow from "@/assets/moscow.jpeg";
import turkey from "@/assets/turkiye.avif";
import beijing from "@/assets/beijing.jpg";
import tbilisi from "@/assets/tbilisi.jpg";
import { StaticImageData } from "next/image";

type DestinationType = {
  title: string;
  country: string;
  image: StaticImageData;
};

const destinations: DestinationType[] = [
  {
    title: "moscow",
    country: "russia",
    image: moscow,
  },
  {
    title: "istanbul",
    country: "turkiye",
    image: turkey,
  },
  {
    title: "beijing",
    country: "china",
    image: beijing,
  },
  {
    title: "tbilisi",
    country: "georgia",
    image: tbilisi,
  },
];

export default destinations;
