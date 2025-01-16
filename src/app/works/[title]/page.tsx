import React from "react";
import { allProjects } from "@/utils/works";
import MainPage from "@/components/WorkDetail/MainPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    title: project.title.replace(/\s+/g, "%20"),
  }));
}

function WorkDetail({
  params,
}: {
  readonly params: { readonly title: string };
}) {
  const title: string[] = [];

  params.title.split("%20").forEach((char) => {
    title.push(char.charAt(0).toUpperCase() + char.slice(1));
  });

  let index = allProjects.findIndex((item) => item.title === title.join(" "));

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <MainPage project={allProjects[index]} index={index} />
      </main>
      <Footer />
    </div>
  );
}

export default WorkDetail;
