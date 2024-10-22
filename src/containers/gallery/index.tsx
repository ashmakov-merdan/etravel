import Carousel from "@/components/carousel";

const Gallery = () => {
  return (
    <section id={"gallery"} className="pt-20 relative 2xl:container mx-auto min-h-screen overflow-hidden h-full">
      <div className="xl:px-80 text-center space-y-6">
        <h2 className="font-semibold text-5xl text-primary">Gallery</h2>
        <p className=" text-primary">Opening the world to everyone is at the heart of E.travel. Wherever your travels take you, we’ll show you unique and unmissable things to do in your destination.</p>
      </div>
      <div className="py-20 space-y-7">
        <Carousel isReverse />
        <Carousel isReverse={false} />
      </div>
    </section>
  )
};

export default Gallery;