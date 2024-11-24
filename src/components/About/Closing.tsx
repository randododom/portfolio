"use client";
import React from "react";
import Header3 from "../Header3";
import { easeInOut, motion } from "framer-motion";

function Closing() {
  const line1 = "Quand je ne suis pas occupé à coder";
  const line2 = "ou réviser j'aime bien lire, regarder";
  const line3 = "des films, des series, ou des animes. ";
  const line4 = "Depuis toujours j'écoutes beaucoup de";
  const line5 = "musique. vous trouvez ici une playlist";
  const line6 = "qui m'aide à me concentrer.";

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
    <section className="mt-[8vh] mb-[4vh] sm:my-[5vh] md:my-[8vh]">
      <Header3 phrase={line1} className="indent-[10%]" />
      <Header3 phrase={line2} />
      <Header3 phrase={line3} />
      <Header3 phrase={line4} />
      <Header3 phrase={line5} />
      <Header3 phrase={line6} />

      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-10"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-[2]">
          <iframe
            title="Enzo Castro playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/5mej72M9qKQ6MeZIRgilhO?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}

export default Closing;
