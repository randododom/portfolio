"use client";
import React, { useRef } from "react";
import StarSpin from "./StarSpin";
import { spectralBridgeRegular } from "@/fonts/font";
import MainButton from "./MainButton";
import { motion, useInView, easeInOut } from "framer-motion";

function Footer() {
  const lineRef = useRef(null);
  const line = useInView(lineRef, { once: true });

  const links = [
    {
      title: "email",
      href: "mailto:enzocastro95600@gmail.com",
    },
    {
      title: "github",
      href: "https://github.com/randododom",
    },
    {
      title: "linkedIn",
      href: "https://www.linkedin.com/in/castro-enzo/",
    },
  ];

  const line1 = "Des questions ? Si vous ";
  const line2 = "souhaitez me contacter,";
  const line3 = "n'hésitez pas, je suis disponible!";

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.4,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <footer className="mb-[20px]">
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center mb-[4vh] md:mb-[8vh]"
      >
        <StarSpin classNameSize="w-[16vw] sm:w-[12vw] lg:w-[8vw]" />
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-6">
        <ul className="flex-1 flex flex-row justify-between md:justify-normal md:flex-col md:gap-y-1">
          {links.map((link, i) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: easeInOut,
                  },
                }}
                key={link.title}
                className="relative w-fit text-[14px] md:text-[18px] capitalize after:duration-300 after:ease hover:after:w-full after:absolute after:w-0 after:h-[2px] after:top-full after:left-0 after:bg-lightText after:dark:bg-darkText"
              >
                <a href={link.href} target="_blank">
                  {link.title}
                </a>
              </motion.li>
            );
          })}
        </ul>
        <div className="flex-1" ref={lineRef}>
          <div className="overflow-hidden">
            <motion.h5
              variants={rise}
              initial="initial"
              animate={line && "animate"}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
            >
              {line1}
            </motion.h5>
          </div>
          <div className="overflow-hidden">
            <motion.h5
              variants={rise}
              initial="initial"
              animate={line && "animate"}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
            >
              {line2}
            </motion.h5>
          </div>
          <div className="overflow-hidden">
            <motion.h5
              variants={rise}
              initial="initial"
              animate={line && "animate"}
              className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
            >
              {line3}
            </motion.h5>
          </div>
          <motion.div
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-2"
          >
            <MainButton
              text="Mon Email"
              fontSize="text-[16px]"
              classNameWidth="w-full sm:w-[45%] lg:w-[12em]"
              email="enzocastro95600@gmail.com"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-8 gap-y-3 gap-x-6">
        <motion.div
          className="flex items-center gap-10"
        >
          <div>
            <p className="text-[14px] text-lightText60 dark:text-darkText60">
              créé et développé par
            </p>
            <p className="text-[14px] text-lightText dark:text-darkText">
              Enzo Castro
            </p>
          </div>
          <div>
            <p className="text-[14px] text-lightText60 dark:text-darkText60">
              Situé 
            </p>
            <p className="text-[14px] text-lightText dark:text-darkText">
              France, Paris
            </p>
          </div>
        </motion.div>
        <motion.div
        >
          <p className="text-[14px] text-lightText60 dark:text-darkText60">
            <span className="text-[14px] animate-ping text-green-500 mr-1">
              &#x2022;
            </span>
            disponibilité
          </p>
          <p className="text-[14px] text-lightText dark:text-darkText">
            à pleins temps
          </p>
        </motion.div>
      </div>
      <motion.div className="mt-3 flex justify-center md:justify-start">
        <p className="text-[12px]">Tous droits réservés &copy; 2024</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
