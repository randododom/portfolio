"use client";
import React, { useRef } from "react";
import Top1 from "../../../public/images/services/top1.png";
import Top2 from "../../../public/images/services/top2.png";
import Bottom1 from "../../../public/images/services/bottom1.png";
import Bottom2 from "../../../public/images/services/bottom2.png";
import Bottom3 from "../../../public/images/services/bottom3.jpg";
import ServicesList from "./ServicesList";
import Header2 from "../Header2";
import Image from "next/image";
import ServiceImage from "../../../public/images/services/list/fond.jpg";
import { allServices } from "@/utils/services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

function Services() {
  const serviceDiv = useRef(null);
  const topImage1 = useRef(null);
  const topImage2 = useRef(null);
  const bottomImage1 = useRef(null);
  const bottomImage2 = useRef(null);
  const bottomImage3 = useRef(null);

  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);
  const serviceRef4 = useRef(null);

  const serviceImage1 = useRef(null);
  const serviceImage2 = useRef(null);
  const serviceImage3 = useRef(null);
  const serviceImage4 = useRef(null);

  const serviceRef = [serviceRef1, serviceRef2, serviceRef3, serviceRef4];
  const serviceImage = [
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage4,
  ];

  const image = useRef(null);

  useGSAP(() => {
    gsap.to(image.current, {
      y: "25%",
      scrollTrigger: {
        trigger: image.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from(topImage1.current, {
      y: "40%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top bottom",
        end: "bottom -80%",
        scrub: true,
      },
    });
    gsap.from(topImage2.current, {
      y: "50%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top bottom",
        end: "bottom -30%",
        scrub: true,
      },
    });
    gsap.from(bottomImage1.current, {
      y: "-40%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 120%",
        end: "bottom -100%",
        scrub: true,
      },
    });
    gsap.from(bottomImage2.current, {
      y: "-45%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 50%",
        end: "bottom -80%",
        scrub: true,
      },
    });
    gsap.from(bottomImage3.current, {
      y: "-35%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: serviceDiv.current,
        start: "top 135%",
        end: "bottom -105%",
        scrub: true,
      },
    });

    serviceImage.forEach((ref, i) => {
      gsap.to(ref.current, {
        zIndex: `${i}`,
        visibility: "visible",
        duration: 0.0001,
        scrollTrigger: {
          trigger: i === 0 ? serviceRef[i].current : serviceRef[i - 1].current,
          start: `top top`,
          scrub: true,
        },
      });
    });
  });

  const topImages = [
    {
      alt: "",
      image: Top1,
      ref: topImage1,
    },
    {
      alt: "",
      image: Top2,
      ref: topImage2,
    },
  ];

  const bottomImages = [
    {
      alt: "",
      image: Bottom1,
      ref: bottomImage1,
    },
    {
      alt: "",
      image: Bottom2,
      ref: bottomImage2,
    },
    {
      alt: "",
      image: Bottom3,
      ref: bottomImage3,
    },
  ];



  return (
    <section className="mb-[8vh] pt-[6vh]" id="services">
      <div className="mb-[10vh]" ref={serviceDiv}>
        <div className="flex justify-evenly items-end">
          {topImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[11vw] xs:w-[12vw] sm:w-[13vw] md:w-[10vw] object-cover object-center"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  placeholder="blur"
                  className="w-full h-full"
                  ref={img.ref}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-[5vh]">
          <Header2 text="Compétences" />
        </div>
        <div className="flex justify-between sm:justify-around items-start">
          {bottomImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[11vw] xs:w-[12vw] sm:w-[13vw] md:w-[10vw] object-cover object-center"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  placeholder="blur"
                  className="w-full h-full"
                  ref={img.ref}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <motion.div className="relative flex flex-col-reverse md:flex-row gap-4 border-t-[1px] border-b-[1px] border-t-lightText20 dark:border-t-darkText20 border-b-lightText20 dark:border-b-darkText20">
          <div className="flex-1 ">
            {allServices.map((item, i) => {
              console.log("Key for item:", `${item.title}-${i}`);
              return (
                <motion.div key={`${item.title}-${i}`}>
                  <ServicesList services={item} ref={serviceRef[i]} />
                </motion.div>
              );
            })}
          </div>
          <div className="relative md:sticky top-0 flex-1 h-auto md:h-screen object-cover overflow-hidden">
            <Image
              src={ServiceImage}
              alt="informatique code portrait"
              className="w-full h-full scale-150"
              placeholder="blur"
              ref={image}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
