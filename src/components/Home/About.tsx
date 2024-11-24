"use client";
import React, { useRef } from "react";
import Image2 from "../../../public/images/general/home/about_image3.webp";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";
import Image3 from "../../../public/images/general/home/about_image6.jpg"
import Header3 from "../Header3";

function About() {
  const image1 = useRef(null);
  const image2Div = useRef(null);
  const image2 = useRef(null);

  const topRef = useRef(null);
  const top = useInView(topRef, { once: true });

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    var tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "+=3000px",
        scrub: true,
      },
    });

    tl.from(image2Div.current, {
      yPercent: 10,
    }).to(image2Div.current, {
      yPercent: -5,
    });
  });

  const topline1 = "j’apporte mon expertise pour des";
  const topline2 = "solutions fiables et innovantes.";
  const bottomline1 = "je veille à la qualité de tout projet,";
  const bottomline2 = "de l’analyse à la mise en œuvre ";

  const bottomline3 = "finale.";
  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-[15vh]">
      <div>
        <div className="">
          <Header3 phrase={topline1} className="pr-[15vw]"/>
          <Header3 phrase={topline2} className="pr-[15vw]"/>
        </div>
        <div className="">
        <Header3 phrase={bottomline1} className="pl-[15vw]"/>
        <Header3 phrase={bottomline2} className="pl-[15vw]"/>
        <Header3 phrase={bottomline3} className="pl-[15vw]"/>
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row md:items-center gap-y-4 md:gap-y-0">
        <div className="md:flex-1 object-cover object-center overflow-hidden">
          <Image
            src={Image3}
            alt="two boxes displayed elegantly with a pink stone background"
            className="w-full h-full scale-110"
            ref={image1}
            placeholder="blur"
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div
            className="w-full h-full md:w-[70%] object-cover object-left-top overflow-hidden"
            ref={image2Div}
          >
            <Image
              src={Image2}
              alt="two iphones displaying recipe app with a stone wall and green door as a vignette"
              className="w-full h-full"
              ref={image2}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="flex mt-8"
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="xs:flex-[1] hidden xs:block"></div>
        <div className="xs:flex-[2.5] md:flex-[1.2] flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Paragraph text="En tant que technicien en systèmes et réseaux, je me consacre à la fiabilité, à la sécurité et à l'efficacité des infrastructures informatiques. Mon approche combine expertise technique et souci du détail pour assurer des réseaux stables et sécurisés. Chaque projet est une opportunité de renforcer la continuité et la performance des systèmes, tout en garantissant la protection des données. " />
          </div>
          <div className="flex-1">
            <div className="">
              <Paragraph text="Je me distingue par ma rigueur et ma réactivité, des qualités essentielles pour répondre aux défis quotidiens d’un environnement IT en constante évolution. Avec une approche axée sur l'écoute, j’accompagne mes clients, en particulier les petites entreprises en pleine croissance, pour qu’ils atteignent leurs objectifs informatiques. La qualité du service sera toujours ma priorité. " />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
