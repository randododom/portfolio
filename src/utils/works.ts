import { Projects } from "@/types/type";

import JiraMiddle1 from "../../public/images/projet1/imageJiraChrono.png";
import JiraMain from "../../public/images/projet1/image_Ubuntu.png";
import JiraIntro from "../../public/images/projet1/introImage.jpg";

import AppliMiddle1 from "../../public/images/projet2/imagesMiddle1.png";
import AppliIntro from "../../public/images/projet2/introImage.png";
import AppliMain from "../../public/images/projet2/mainImage.png";
import AppliLandscape1 from "../../public/images/projet2/imagesLandscape1.png";
import AppliOutro1 from "../../public/images/projet2/imagesOutro2.png";

import CISCOMiddle1 from "../../public/images/projet3/imagesMiddle1.png";
import CISCOMain from "../../public/images/projet3/imagesMiddle3.png";
import CISCOIntro from "../../public/images/projet3/introImage.jpg";
import CISCOLandscape1 from "../../public/images/projet3/imagesLandscape1.png";
import CISCOOutro1 from "../../public/images/projet3/imagesOutro2.png";

import SystemeMiddle1 from "../../public/images/projet4/imagesMiddle1.png";
import SystemeOutro1 from "../../public/images/projet4/imagesOutro2.png";
import SystemeMain from "../../public/images/projet4/imagesOutro3.jpg";
import SystemeIntro from "../../public/images/projet4/introImage.png";
import SystemeLandscape1 from "../../public/images/projet4/imagesLandscape3.jpg";



const projects = [
  {
    // title: "Déploiement d'un Firewall UFW sur une VM Ubuntu",
    title: "Projet Deploiement D'un Firewall Ufw Sur Une Vm Ubuntu",
    alt: "installation d'un firewall UFW sur ubuntu avec virtualBox et teste de celui ci  ",
    year: "2024",
    roles: ["Chef de Projet", "Administrateur réseau", "Spécialiste sécurité", "Testeur Réseau"],
    technologies: [
      "VirtualBox",
      "Ubuntu",
      "UFW",
      "Iptables",
      "Netfilter",
      "Nmap",
      "Wireshark",
      "Ping",
      "Jira",
      "Bash scripting"
    ],
    github: undefined,
    website: undefined,
    duration: "1 mois",
    description1: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ante id dui fermentum rhoncus. Proin tempus fermentum felis, id ultricies magna posuere sit amet. Fusce efficitur nisl sed libero hendrerit, vitae varius magna fermentum. Suspendisse potenti. Cras suscipit dui eget sapien ornare, at vestibulum justo consectetur. Aenean dictum neque sed sapien elementum, ac volutpat risus scelerisque. Integer ut tincidunt nibh. In vulputate ultricies sem, et volutpat arcu gravida sed. Praesent efficitur purus in fringilla fermentum. Etiam posuere felis justo, id sodales ipsum scelerisque ac. Mauris laoreet, enim ut scelerisque volutpat, turpis nulla sagittis lorem, a cursus ligula sapien id lectus. Duis tristique felis eu orci aliquet, sed posuere sapien efficitur.",
      "Ipsam quidem rem veritatis architecto, dignissimos quasi similique aliquid ex eaque numquam laboriosam, quis adipisci tempore molestias. Laudantium modi expedita ea magnam provident. Nostrum aliquam dolorem fuga atque est consequatur repellendus quas, vel ab, aperiam ad accusamus fugiat iste sunt distinctio. Culpa, voluptatibus ullam. Officia voluptatum dignissimos rerum nulla quod quas ipsum vitae adipisci alias, harum amet, eius reprehenderit pariatur. Cum omnis reprehenderit atque error est iure aliquam. Quisquam possimus hic, animi numquam. Iusto, assumenda nesciunt aperiam officiis ipsum vitae.",
    ],
    description2: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet efficitur felis, eget tincidunt eros convallis sed. Integer volutpat mauris quis felis malesuada, at luctus arcu pretium. Nulla viverra feugiat eros vel consequat. Morbi gravida venenatis risus, at cursus erat euismod eget. Suspendisse potenti. Proin eu venenatis odio. Duis porttitor vestibulum libero, in auctor ligula. Nullam convallis orci a ligula pretium, at ultricies sem facilisis. Aenean fringilla ipsum ut arcu interdum luctus. Ut nec eros lorem. Donec ullamcorper vel lectus in vehicula. Phasellus ultricies nisi ut felis pharetra efficitur. Nullam non diam vitae lacus bibendum elementum. Phasellus vitae diam id elit commodo feugiat. Nulla euismod.",
      "",
    ],
    size: "w-[10vw]",
    position: "md:justify-end",
    marginBottom: "mb-[20vh]",
    // padding: "translateX-[8vw]",
    mainImage: JiraMain,
    introImage: JiraIntro,
    imagesLandscape: [
      {
        image: JiraMiddle1,
        alt: "PROJET1 IMAGE1",
      },

    ],

  },
 
  {
    // title: "Application de Suivi des Incidents Réseau",
    title: "Application De Suivi Des Incidents Reseau",
    alt: "développer une application qui permet de suivre les incidents sur le réseau d'une entreprise avec un accès admin et technicien",
    year: "2024",
    roles: ["Chef de Projet", "Développeur backend", "Développeur Frontend", "Administrateur Base de Données"],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",

    ],
    github: undefined,
    website: undefined,
    duration: "1 mois",
    description1: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ante id dui fermentum rhoncus. Proin tempus fermentum felis, id ultricies magna posuere sit amet. Fusce efficitur nisl sed libero hendrerit, vitae varius magna fermentum. Suspendisse potenti. Cras suscipit dui eget sapien ornare, at vestibulum justo consectetur. Aenean dictum neque sed sapien elementum, ac volutpat risus scelerisque. Integer ut tincidunt nibh. In vulputate ultricies sem, et volutpat arcu gravida sed. Praesent efficitur purus in fringilla fermentum. Etiam posuere felis justo, id sodales ipsum scelerisque ac. Mauris laoreet, enim ut scelerisque volutpat, turpis nulla sagittis lorem, a cursus ligula sapien id lectus. Duis tristique felis eu orci aliquet, sed posuere sapien efficitur.",
      "Ipsam quidem rem veritatis architecto, dignissimos quasi similique aliquid ex eaque numquam laboriosam, quis adipisci tempore molestias. Laudantium modi expedita ea magnam provident. Nostrum aliquam dolorem fuga atque est consequatur repellendus quas, vel ab, aperiam ad accusamus fugiat iste sunt distinctio. Culpa, voluptatibus ullam. Officia voluptatum dignissimos rerum nulla quod quas ipsum vitae adipisci alias, harum amet, eius reprehenderit pariatur. Cum omnis reprehenderit atque error est iure aliquam. Quisquam possimus hic, animi numquam. Iusto, assumenda nesciunt aperiam officiis ipsum vitae.",
    ],
    description2: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet efficitur felis, eget tincidunt eros convallis sed. Integer volutpat mauris quis felis malesuada, at luctus arcu pretium. Nulla viverra feugiat eros vel consequat. Morbi gravida venenatis risus, at cursus erat euismod eget. Suspendisse potenti. Proin eu venenatis odio. Duis porttitor vestibulum libero, in auctor ligula. Nullam convallis orci a ligula pretium, at ultricies sem facilisis. Aenean fringilla ipsum ut arcu interdum luctus. Ut nec eros lorem. Donec ullamcorper vel lectus in vehicula. Phasellus ultricies nisi ut felis pharetra efficitur. Nullam non diam vitae lacus bibendum elementum. Phasellus vitae diam id elit commodo feugiat. Nulla euismod.",
      "",
    ],
    size: "w-[10vw]",
    position: "md:justify-start",
    marginBottom: "mb-[10vh]",
    // padding: "translateX-[-8vw]",
    mainImage: AppliMain,
    introImage: AppliIntro,
    imagesPortrait: [
      {
        image: AppliMiddle1,
        alt: "PROJET2 IMAGE1",
      },
      {
        image: AppliOutro1,
        alt: "PROJET2 IMAGE2",
      },

    ],
    imagesLandscape: [
      {
        image: AppliLandscape1,
        alt: "PROJET2 IMAGE3",
      },
    ],
  },
  {
    // title: "Cisco Packet Tracer : Conception et Sécurisation d'un Réseau d'Entreprise",
    title: "Cisco Packet Tracer Conception Et Securisation D'un Reseau",
    alt: "Configurer un réseau d'entreprise virtuel sécurisé avec Cisco Packet Tracer, incluant des VLANs, des ACLs, et des routeurs",
    year: "2024",
    roles: ["Chef de Projets", "Administrateur Réseau", "Analyste Sécurité", "Technicien Réseau"],
    technologies: [
      "Cisco Packet Tracer",
      "VLANs",
      "ACLs",
      "Routeurs Cisco",
      "Firewall",
      "Ping",
      "Traceroute"
    ],
    github: undefined,
    website: undefined,
    duration: "3 semaines",
    description1: [
      "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.",
      "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor",
    ],
    description2: [
      "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante",
      "",
    ],
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-center",
    // padding: "translateX-[-8vw]",
    mainImage: CISCOMain,
    introImage: CISCOIntro,
    imagesPortrait: [
      { 
        image: CISCOMiddle1,
        alt: "PROJET3 IMAGE 1" 
      },
      { 
        image: CISCOOutro1,
        alt: "PROJET3 IMAGE 2" 
      },
    ],
    imagesLandscape: [
      {
        image: CISCOLandscape1,
        alt: "PROJET3 IMAGE 3",
      },
    ],
  },
  {
    // title: "Système de Détection et Prévention d'intrusions",
    title: "Systeme De Detection Et Prevention D'intrusions",
    alt: "système de détection et de prévention des intrusions sur un réseau de l'entreprise",
    year: "2024",
    roles: ["Chef de Projet","Analyste Sécurité","Administrateur Réseau", "Testeur Sécurité"],
    technologies: [
      "Snort IDS/IPS", 
      "Wireshark", 
      "Linux", 
      "IPtables", 
      "Nmap", 
      "SSH", 
      "Scripts Bash"
    ],
    github: undefined,
    website: undefined,
    duration: "5 semaines",
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-end",
    // padding: 'translateX-[10vw]',
    description1: [
      "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum.",
      "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio",
    ],
    description2: [
      "Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci. Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida",
    ],
    mainImage: SystemeMain,
    introImage: SystemeIntro,
    imagesPortrait: [
      { 
        image: SystemeMiddle1,
        alt: "PROJET4 IMAGE1" 
      },
      { 
        image: SystemeOutro1,
        alt: "PROJET4 IMAGE2" 
      }
    ],
    imagesLandscape: [
      { 
        image: SystemeLandscape1,
        alt: "PROJET4 IMAGE3" 
      },
    ],
  },
];

export const allProjects: Projects[] = [];

projects.forEach((item, i) => {
  allProjects.push({
    ...item,
    id: i,
  });
});
console.log("Données des projets :", projects);