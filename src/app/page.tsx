import Navbar from "@/containers/navbar";
import AboutUs from "@/containers/about-us";
import Header from "@/containers/header";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <AboutUs />
        <Header />
      </main>
    </>
  );
}
