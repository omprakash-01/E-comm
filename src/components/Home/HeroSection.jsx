"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApiLoading from "@/components/Home/ApiLoading";
import ApiError from "./ApiError";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";


function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const { data: slider, loading, error } = useFetchData("/api/herosection");

  if (loading) {
    return (
      <div className="flex items-center justify-center text-gray-600 h-56 md:h-96 ">
        <ApiLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center text-gray-600 h-56 md:h-96 ">
      <ApiError error={error}/>
      </div>
    );
  }

  if (slider.length === 0) {
    return (
      <div>
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No Slides Available
          </h2>
          <p className="text-gray-500 mb-4">
            We couldn't find any hero images to display right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-56 md:h-96 rounded-2xl ">
      <Slider {...settings}>
        {slider.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-56 md:h-96 object-cover rounded-2xl"
              width={500}
              height={500}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
