import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full relative h-96">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            alt="Carousel image 1"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div id="item2" className="carousel-item w-full relative h-96">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            alt="Carousel image 2"
            fill
            className="object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full relative h-96">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            alt="Carousel image 3"
            fill
            className="object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full relative h-96">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            alt="Carousel image 4"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
      
      </div>
    </>
  );
}

export default HeroSection;
