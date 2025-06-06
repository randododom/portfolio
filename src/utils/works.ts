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
import CISCOIntro from "../../public/images/projet3/ciscointro.png";
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
      "Dans le cadre de ce projet, nous avons utilisé l’outil Jira pour simuler un environnement de gestion agile. Le projet était organisé en tickets et réparti en plusieurs sprints. Chaque membre se voyait attribuer des rôles définis (chef de projet, administrateur réseau, testeur), et des tâches spécifiques à valider dans un tableau de bord Kanban. La progression du projet était suivie à l’aide d’échéances, de sous-tâches et de critères d’acceptation. Cette approche nous a permis de découvrir l’importance de la planification, de la documentation et de la communication dans un projet informatique structuré.",
      "L’objectif principal était de sécuriser une machine Ubuntu via l’installation et la configuration du pare-feu UFW dans une VM VirtualBox. Après avoir comparé différentes solutions (iptables, firewalld), UFW a été retenu pour sa simplicité. Nous avons autorisé le port SSH, bloqué les connexions inutiles, et testé les règles à l’aide de Nmap et Wireshark. Un problème de coupure SSH a été résolu grâce à une intervention en local, renforçant notre compréhension des priorités de règles.",
      "Ce projet m’a permis de développer à la fois mes compétences techniques en sécurité réseau et mes capacités de gestion de projet en environnement agile avec Jira.",
    ],
    pdf: undefined,
    pdfThumbnail: undefined,
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
      "Ce projet a été pensé pour créer une application web permettant de suivre les incidents sur le réseau d'une entreprise. J'avais plusieurs rôles : chef de projet, développeur backend et frontend. L'application devait permettre aux techniciens de déclarer un problème réseau, et aux administrateurs de consulter, trier, et gérer ces incidents. J’ai organisé les différentes étapes du projet, réparti les tâches, et planifié les fonctionnalités. L’idée était d’avoir un outil simple à utiliser, pratique au quotidien pour une équipe informatique interne.",
      "J’ai utilisé React.js pour créer l’interface, Node.js et Express.js pour gérer les échanges entre le site et la base de données, et MySQL pour stocker les tickets. Le style a été fait avec Tailwind CSS. Un système de connexion permettait de séparer l’espace admin et l’espace technicien. J’ai aussi commencé à tester Docker pour rendre l’installation plus simple plus tard. Même si ce projet reste en cours, il m’a permis d’apprendre à mieux structurer un vrai site avec plusieurs utilisateurs.",
      "Ce projet m’a donné envie d’aller plus loin dans le développement web et de créer des outils vraiment utiles dans un contexte professionnel.",
    ],
    pdf: undefined,
    pdfThumbnail: undefined,
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
    // title: "Conception et Déploiement d'une Architecture Réseau d'Entreprise Multi-étages",
    title: "Conception Et Deploiement D'une Architecture Reseau D'entreprise Multi-etages",
    alt: "Conception et déploiement d'une infrastructure réseau complète pour un nouveau bâtiment d'entreprise avec Cisco Packet Tracer, incluant VLANs, routage, DHCP, PAT et sécurité",
    year: "2024",
    roles: ["Assistant Responsable Systèmes et Réseaux", "Architecte Réseau", "Administrateur Réseau", "Technicien Réseau"],
    technologies: [
        "Cisco Packet Tracer",
        "VLANs",
        "Routage Inter-VLAN",
        "DHCP",
        "PAT (Port Address Translation)",
        "ACLs (Access Control Lists)",
        "Routage Statique (Routes Primaires et Backup)",
        "Sécurité Réseau (Firewall Conceptuel, Points d'Accès Sans Fil Sécurisés)",
        "Commutateurs Cisco (L2, L3)",
        "Routeurs Cisco",
        "Points d'Accès Sans Fil (WLAN)",
        "Câblage Structuré"
    ],
    github: undefined,
    website: undefined,
    duration: "1 mois",
    description1: [
        "En tant qu'assistant responsable Systèmes et Réseaux, j'ai eu pour mission de concevoir et de déployer l'infrastructure réseau interne d'un nouveau bâtiment d'entreprise de trois étages, intégrant six départements distincts et une salle serveurs, pour un total d'environ 612 utilisateurs et appareils.",
        "Le projet a impliqué la planification détaillée de la topologie réseau, le choix judicieux des équipements (commutateurs L2/L3, routeurs), la mise en œuvre d'un plan d'adressage IP robuste, et un câblage structuré. J'ai segmenté le réseau par département via des VLANs, en assurant un routage inter-VLAN efficace. Un serveur DHCP a été configuré pour l'attribution dynamique des adresses IP, et le PAT (Port Address Translation) a été mis en place pour l'accès à internet.",
        "La sécurité a été une priorité, avec la définition de routes statiques (incluant des routes primaires et de backup pour la résilience), la configuration d'ACLs pour contrôler les flux de communication, et la sécurisation des points d'accès sans fil. J'ai utilisé Cisco Packet Tracer pour simuler et valider l'ensemble de l'architecture, assurant ainsi la cohérence, la performance et la sécurité du réseau. Ce projet a consolidé mes compétences en architecture réseau complexe et en administration des systèmes, en réponse à des besoins d'entreprise concrets."
    ],
    pdf: "/docs/cisco-architecures-reseaux-entreprise.pdf",
    pdfThumbnail: "/images/miniatures/cisco-architecures-reseaux-entreprise-page-015.jpg",
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-center",
    // padding: "translateX-[-8vw]",
    mainImage: CISCOMain,
    introImage: CISCOIntro,
   /*  imagesPortrait: [
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
    ], */
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
      "Ce projet consistait à mettre en place un système de détection et de prévention des intrusions sur le réseau d’une entreprise, afin d’assurer une meilleure sécurité face aux attaques potentielles. L’outil principal utilisé est Snort, qui permet d’analyser le trafic réseau pour détecter des comportements suspects. Une partie importante du projet a été la compréhension de la différence entre IDS et IPS, et comment Snort peut fonctionner dans les deux modes. Après avoir installé Snort sur un serveur Linux, j’ai configuré les règles adaptées à l’environnement réseau, en créant un compte de service dédié avec des permissions restreintes pour limiter les risques liés à l’exécution du logiciel.",
      "J’ai également configuré la gestion des logs afin de centraliser et sécuriser les alertes générées par Snort, tout en automatisant certaines tâches avec des scripts Bash. Pour tester l’efficacité du système, j’ai utilisé des outils comme Nmap pour simuler des scans réseau, et Wireshark pour analyser les paquets et vérifier que Snort détectait correctement les intrusions. La configuration des règles et des permissions a été ajustée pour réduire les faux positifs et optimiser la sécurité globale du réseau. Ce projet m’a permis de mieux comprendre les mécanismes de surveillance réseau, ainsi que la gestion sécurisée d’un service critique en entreprise.",
      "En conclusion, ce projet a été une excellente opportunité pour maîtriser les concepts d’IDS/IPS et leur mise en œuvre pratique via Snort. La capacité à configurer un système robuste de détection et prévention d’intrusions, avec un suivi précis des événements et une bonne gestion des droits, est essentielle pour garantir la protection des infrastructures réseau en entreprise.",
    ],
    pdf: undefined,
    pdfThumbnail: undefined,
    mainImage: SystemeMain,
    introImage: SystemeIntro,
/*     imagesPortrait: [
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
    ], */
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