import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "Je m'appelle Enzo Castro"
  const line2 = "étudiant en BTS SIO option"
  const line3 = " SISR. Je suis depuis toujours"
  const line4 = "intéressé par l'informatique et "
  const line5 = "les nouvelles technologies je "
  const line6 = "me suis tourné vers cette "
  const line7 = "formation."
  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`text-[14px] md:text-[18px]`}>
          à propos de moi 
        </p>
        <div className="flex-1">
          <Header3 phrase={line1} className="indent-[10%]"/>
          <Header3 phrase={line2}/>
          <Header3 phrase={line3}/>
          <Header3 phrase={line4}/>
          <Header3 phrase={line5}/>
          <Header3 phrase={line6}/>
          <Header3 phrase={line7}/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
