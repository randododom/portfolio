import React from "react";
import TransitionCarousel from "./TransitionCarousel";

function ScrollingText() {
  const messages = ["Choisissez une news !", "Découvrez les dernières tendances !", "Actualisez vos connaissances !"];

  return (
    <div className="relative w-[100vw] h-fit overflow-hidden flex justify-center items-center mx-auto">
      <div className="w-full px-4">
        <TransitionCarousel
          array={messages}
          className="py-5 text-center rounded-full text-lightText dark:text-darkText text-[18px] md:text-[24px] font-semibold"
          classNameRotate="rotate-0"
        />
      </div>
    </div>
  );
}

export default ScrollingText;