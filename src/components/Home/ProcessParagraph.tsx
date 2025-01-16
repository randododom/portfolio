import React from "react";
import Header3 from "../Header3";

function ProcessParagraph() {
  const topline1 = "Pour façonner un avenir ";
  const topline2 = "numérique sécurisé, ";
  const bottomline1 = "Perfectionner mes compétences et";
  const bottomline2 = "rester à la pointe de l'innovation ";
  const bottomline3 = "seront mes priorités.";
  return (
    <section className="my-[15vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
          <p className="text-[12.5px] sm:text-[16px]">Mon objectif</p>
          <div>
            <Header3 phrase={topline1} />
            <Header3 phrase={topline2} />
          </div>
        </div>
        <div>
          <Header3 phrase={bottomline1} />
          <Header3 phrase={bottomline2} />
          <Header3 phrase={bottomline3} />
        </div>
      </div>
    </section>
  );
}

export default ProcessParagraph;
