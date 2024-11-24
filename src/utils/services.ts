import { Services } from "@/types/type"

const services = [
    {
        title: "Développement Frontend",
        technologies: [
            "HTML",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "react.js",
            "next.js",
            "tailwind CSS",
            "Git",
            "GitHub",
            "VSC",
        ],
        description: "Le frontend me permet de concilier créativité et technique pour concevoir des interfaces intuitives et performantes. En maîtrisant les outils de développement, je m'assure que chaque projet répond aux attentes des utilisateurs en termes de fluidité et d'interactivité. Ces compétences me donnent une base solide pour anticiper les besoins, améliorer l’expérience utilisateur, et me positionner comme un professionnel capable de créer des solutions esthétiques et efficaces.",
    },
    {
        title: "Développement Backend",
        technologies: [
            "node.js",
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "C/C++",
            "Bash",
            "SQL",
            "MongoDB",
            "MySQL",
            "Oracle",
            "SQLite",
            "SQL Server",
            "Express.js",
            "Firebase",
            "Docker",
            "Linux",
            "Postman",
            "VSC",
        ],
        description: "Le backend m’offre la possibilité de créer des fondations stables pour chaque projet. En structurant des systèmes robustes et sécurisés, je contribue à la fiabilité et à l’évolutivité des applications. Ces compétences renforcent ma capacité à concevoir des architectures solides, à optimiser les performances et à anticiper les défis techniques, me préparant ainsi à évoluer dans des environnements complexes et à garantir la sécurité des données sur le long terme.",
        
    },
    {
        title: "Documentation & Gestion",
        technologies: [
            "Debian",
            "Ubuntu",
            "Red Hat",
            "VirtualBox",
            "VWware Workstation",
            "Docker",
            "Nagios",
            "Snort",
            "Wireshark",
            "Notion",
            "Jira",
        ],
        description: "Maîtriser la documentation et les environnements virtuels m’apporte une vision structurée et proactive dans mes projets. En documentant chaque étape et en organisant les tâches, je facilite la collaboration et l’évolution des projets sur le long terme. Ces compétences me permettent d’anticiper les besoins techniques et de coordonner efficacement les équipes, assurant ainsi la qualité, la sécurité, et la fiabilité des systèmes que je mets en place",
    },
    {
        title: "Diplôme & Certification ",
        technologies: [
            "Baccalauréat",
            "BTS SIO SISR",
            "Certification RGPD",
            "Certification CISCO",
            "Google IT Support",
            "Google Security",
            "MOOC"
        ],
        description: "Les certifications me permettent de valider mes compétences et de rester à jour dans un secteur en constante évolution. Elles témoignent de mon engagement à maîtriser les bonnes pratiques et à offrir des solutions fiables. Être toujours à l’affût des nouveautés technologiques me permet d'anticiper les changements, d’adapter mes méthodes, et d’assurer une expertise durable. Cet apprentissage continu me positionne comme un professionnel capable de répondre aux exigences actuelles et futures.",
    },
]

export const allServices : Services[] = []

services.forEach((item, i) => {
    allServices.push({
        ...item,
        id: i + 1
    })
})