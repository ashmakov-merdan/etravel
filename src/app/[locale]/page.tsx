"use client"
import Header from "@/components/header"
import Navbar from "@/components/navbar";
import AboutUs from "@/containers/about-us";
import ContactUs from "@/containers/contact-us";
import Destinations from "@/containers/destinations";
import Footer from "@/containers/footer";
import { useEffect, useState } from "react";
import Loading from "./loading";
import useWindowSize from "@/lib/hooks/useWindowSize";
import Hero from "@/components/hero";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const size = useWindowSize();

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    loading ? <Loading /> :
      <>
        <Navbar />
        {size.width < 1025 ? <Hero /> : <Header />}
        <main className="space-y-36">
          <AboutUs />
          <Destinations />
          <ContactUs />
        </main>
        <Footer />
      </>
  );
}
