import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AuthSlideImage, UnionIcon, Slider2Icon } from "@root/assets";
import Image from "next/image";
import "@splidejs/react-splide/css/core";
import { Minus } from "lucide-react";

const AuthLayoutSlider = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const splideOptions = {
    type: "loop",
    autoplay: true,
    arrows: false,
    rewind: true,
    pagination: true,
  };
  const handleSlideMoved = (splide: any, newIndex: any) => {
    setSlideIndex(newIndex);
  };
  return (
    <div className=" relative ">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={AuthSlideImage}
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
      <Splide options={splideOptions} onMoved={handleSlideMoved}>
        <div className="splide__slide">
          <div className="w-full h-screen flex items-center justify-center">
            <div className=" container  space-y-4 space-x-3 pt-[17rem]">
              <div className=" text-f30 text-white font-medium flex  items-center pb-2 pl-5">
                <span className="pr-2">
                  <Image src={UnionIcon} alt="" />
                </span>
                Coursea
              </div>
              <h1 className="text-f42 text-white">
                Improve your skill with Coursea!
              </h1>
              <h1 className="text-white text-f16">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est,
              </h1>
            </div>
          </div>
          <div className="hidden">
            <div className="splide__pagination "></div>
          </div>{" "}
        </div>
        <div className="splide__slide">
          {/* slide2 */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className=" container  space-y-4 space-x-3 absolute bottom-20 py-20">
              <div className="pb-2">
                <Image src={Slider2Icon} alt="" />
              </div>
              <h1 className="text-f42 text-white">
                Improve your skill with Coursea!
              </h1>
              <h1 className="text-white text-f16">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est,
              </h1>
            </div>
          </div>
          <div className="hidden">
            <div className="splide__pagination "></div>
          </div>
        </div>
      </Splide>
      <div className="absolute bottom-20 left-10 flex justify-center z-10">
        <div className="">
          <Minus
            className={slideIndex === 0 ? "text-white" : "text-customGray"}
            size={60}
            strokeWidth={1}
          />
        </div>
        <div className={slideIndex === 1 ? "text-white" : "text-customGray"}>
          <Minus size={60} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayoutSlider;
