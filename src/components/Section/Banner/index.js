import { useEffect, useState } from "react";
import Image from "next/image";
import LOGO_WHITE from "@/images/png/logo/markas-text-white.png";

const BannerCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);
  return (
    <div className="relative w-full">
      <div className="relative">
        <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="mb-5">
            <Image src={LOGO_WHITE} width={545} alt="MARKAS" />
          </div>
          <p className="py-6 text-[36px] font-light">
            A hub for startup founders to grow with the ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
