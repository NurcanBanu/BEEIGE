import { ChevronLeft, ChevronRight } from "lucide-react";
import React, {useState} from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const Slider = () => {
    const images = [ image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const prevSlide = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      };
  
      return (
        <div>
          <div className="relative w-full h-[640px] overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
    
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 hover:bg-gray-200 hover:rounded-full"
            >
              <ChevronLeft color="#a19dca" size={60} strokeWidth={3} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 hover:bg-gray-200 hover:rounded-full "
            >
              <ChevronRight color="#a19dca" size={60} strokeWidth={3}/>
            </button>

            <button className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex flex-col items-center px-10 py-3 bg-[#a19dca] rounded-md text-white hover:bg-gray-200 hover:text-[#a19dca]">
              Start Now
            </button>
          </div>
        </div>
      );
  };
  
  export default Slider;