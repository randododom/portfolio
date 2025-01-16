"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AboutImage1 from "../../../public/images/general/about/aboutMain2.png";
import AboutImage2 from "../../../public/images/general/about/aboutIntro1.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";

function MoreDetail() {
  const image1 = useRef(null);
  const image2 = useRef(null);

  const textRef = useRef(null);
  const text = useInView(textRef, { once: true });

  const EASING = [0.83, 0, 0.17, 1];

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(image2.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

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

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="mt-[5vh]">
      <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
        <div className="w-full flex-1 object-cover overflow-hidden">
          <Image
            src={AboutImage1}
            alt=""
            className="w-full h-full scale-110"
            placeholder="blur"
            ref={image1}
          />
        </div>
        <div className="flex-[1.5]">
          <div className="w-full object-cover overflow-hidden">
            <Image
              src={AboutImage2}
              alt=""
              className="w-full h-full scale-110"
              placeholder="blur"
              ref={image2}
            />
          </div>
          <div className="mt-[4vh]" ref={textRef}>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className={`tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase`}
              >
                Projet
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className={`tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase`}
              >
                Professionnel
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <div>
            <Paragraph
              text=" Mon objectif est de me spécialiser dans le domaine des réseaux et de la cybersécurité en tant qu’Expert Réseau, Infrastructures et Sécurité. Ce rôle, essentiel dans la protection des systèmes informatiques, m'attire en raison des défis et des enjeux critiques qu’il représente pour les entreprises et les organisations dans un environnement numérique de plus en plus complexe."
            />
          </div>
          <div className="mt-6">
            <Paragraph text="Mon parcours de formation s’oriente vers l'acquisition de compétences avancées en réseaux et cybersécurité. Après mon diplôme de niveau Bac+2, je souhaite poursuivre avec un Bachelor en Cybersécurité et Sécurité Informatique (BAC+3), puis un diplôme d’Expert Réseaux, Infrastructures et Sécurité (BAC+5). Ce chemin me permettra de maîtriser les concepts clés de la sécurité des systèmes et de l’administration réseau, en vue de devenir un expert capable de gérer des infrastructures sécurisées." />
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <div>
            <Paragraph text="L’alternance est pour moi une étape indispensable pour confronter mes connaissances théoriques aux exigences du terrain. Elle m’offre la possibilité de développer des compétences pratiques en travaillant sur des projets concrets, de m’adapter aux évolutions technologiques et d'acquérir une expérience précieuse en entreprise. C’est aussi une opportunité de contribuer activement à la sécurité des infrastructures et des données d’une organisation, tout en construisant un réseau professionnel solide." />
          </div>
          <div className="mt-6">
            <Paragraph text="Je me projette dans un avenir professionnel où je pourrais évoluer avec les technologies et les besoins croissants en sécurité, en contribuant de manière significative à l’innovation et à la protection des ressources numériques de l'entreprise." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default MoreDetail;
