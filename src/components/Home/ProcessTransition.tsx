"use client";
import React, { Fragment, useRef, useState } from "react";
import Image from "next/image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image1 from "@../../../public/images/general/home/hero_image1.jpg";
import { easeInOut, motion, useInView } from "framer-motion";
import { newsSources } from "@/utils/sites";
import NewsFeed from "@/components/Home/NewsFeed";
import Scroll from "@/components/Scroll";
import ScrollingText from "@/components/Home/scrollingtext"

function ProcessTransition() {
  const EASING = [0.83, 0, 0.17, 1];


  const imageRef = useRef(null);
  const image = useInView(imageRef, { once: true });

  const listRef = useRef(null);
  const list = useInView(listRef, { once: true });

  const [sources, setSources] = useState(newsSources);


  const toggleSource = (site: string) => {
    setSources((prevSources) =>
      prevSources.map((source) =>
        source.site === site
          ? { ...source, selected: !source.selected }
          : source
      )
    );
  };

  return (
    <section className="mt-[6vh]">
  <div className="flex flex-col md:flex-row justify-between items-start gap-x-[10vw]">
    {/* Section gauche */}
    <div className="flex-1 md:w-[50%]" ref={imageRef}>
      <div className="object-cover object-top overflow-hidden">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: "5%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: EASING },
          }}
        >
          <Image src={Image1} alt="" className="w-full" placeholder="blur" />
        </motion.div>
      </div>
      <div className="mt-10 mb-[6vh] flex md:mt-6 md:mb-0">
        <div className="flex-1 block md:hidden"></div>
        <div className="flex-[1.5]">
          <Paragraph text="En tant que professionnel de l’informatique, j’accorde une importance primordiale à la transparence dans chaque projet. Je veille à ce que mes clients soient informés des avancées, des choix technologiques, et des mesures de sécurité mises en place, en répondant à toutes leurs questions. À chaque étape, je m'assure que les besoins en sécurité et performance sont respectés. Mon objectif est de construire une relation de confiance où les clients savent que leurs infrastructures sont entre de bonnes mains et qu’ils peuvent compter sur ma vigilance constante." />
        </div>
      </div>
    </div>

    {/* Section droite */}
    <div className="flex-[1.5] md:w-[50%] w-full">
      <Scroll>
        <motion.div
          className="overflow-hidden z-[0] max-h-[60vh] w-full flex justify-center items-center"
          initial={{ opacity: 0, y: "5%" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: EASING },
          }}
        >
          {sources.some((source) => source.selected) ? (
            <NewsFeed sources={sources} />
          ) : (
            <div className="overflow-hidden z-[0] max-h-[60vh] w-full flex justify-center items-center">
              <ScrollingText />
            </div>
          )}
        </motion.div>
      </Scroll>

      {/* Liste des sources */}
      <motion.div
        ref={listRef}
        initial={{ opacity: 0, y: "10%" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, ease: easeInOut, delay: 0.2 },
        }}
        className="mt-6"
      >
        <div className="flex justify-between py-1 border-b-[1px]">
          <Heading text="Sources d'Actualités" />
          <Heading text="Sélection" />
        </div>
        {sources.map((source) => (
          <motion.div
            key={source.site}
            className="flex justify-between items-center py-2 border-b-[1px]"
          >
            <div className="flex items-center gap-4">
              <span className="font-medium">{source.site}</span>
              <div className="flex flex-wrap gap-2">
                {source.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => toggleSource(source.site)}
              className={`px-4 py-2 rounded min-w-[80px] transition-colors duration-300 ${source.selected
                ? "bg-[rgba(74,106,138,0.8)] dark:bg-[rgba(176,195,209,0.8)] text-white"
                : "bg-transparent dark:bg-transparent text-[rgba(74,106,138,0.8)] dark:text-[rgba(176,195,209,0.8)] border border-[rgba(74,106,138,0.8)] dark:border-[rgba(176,195,209,0.8)]"
                }`}
            >
              {source.selected ? "Activé" : "Désactivé"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
  );
}

export default ProcessTransition;
