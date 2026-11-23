export const locales = ["en", "fr", "ro"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    language: "English",
    title: "Web Developer",
    description:
      "Natalia Jabinschi is a web developer with 8+ years of experience creating thoughtful digital experiences, e-commerce platforms, and web solutions.",
    skip: "Skip to content",
    navigation: {
      label: "Main navigation",
      projects: "Projects",
      about: "About",
      expertise: "Expertise",
      contact: "Let’s talk",
      language: "Choose language",
      open: "Open navigation",
    },
    hero: {
      role: "Web Developer",
      location: "Canada",
      subtitle: "Web Developer | E-commerce | Digital Experience",
      introduction:
        "I develop modern web solutions that combine technical precision, thoughtful design, and meaningful user experiences.",
      viewWork: "View My Work",
      contact: "Contact Me",
      availability: "Availability on request",
      visualLabel: "A crafted abstract composition representing connected digital experiences",
      visualTop: "DIGITAL / CRAFT / 01",
      make: "MAKE",
      it: "IT",
      matter: "matter.",
      visualBottom: "BUILT WITH INTENTION",
      stampTop: "THOUGHTFUL",
      stampBottom: "BY DESIGN",
      scroll: "Scroll to explore",
    },
    projects: {
      section: "Selected work",
      title: "A few things",
      accent: "I’ve worked on.",
      introduction:
        "Web development, commerce, and digital experiences — built with care and attention to the details that matter.",
      categoriesLabel: "Project categories",
      categories: [
        "E-commerce",
        "Shopify Development",
        "WordPress Development",
        "Web Applications",
        "UI/UX & Digital Projects",
      ],
      work: "WORK",
      progress: "progress",
      artLabel: "PROJECTS / PORTFOLIO",
      noteLabel: "A NOTE ON THIS SPACE",
      emptyTitle: "Good work deserves",
      emptyAccent: "a proper introduction.",
      emptyDescription:
        "Project case studies will be added here as details and publication permissions are ready. In the meantime, I’d be happy to talk through my experience.",
      conversation: "Start a conversation",
      liveSite: "Live site",
      sourceCode: "Source code",
    },
    about: {
      section: "A little about me",
      title: "Curiosity is",
      accent: "part of the craft.",
      evolution:
        "My professional path has taken me from Physics to Computer Science and, more recently, E-commerce. That mix keeps me curious about both how things work and how people use them. I enjoy creating useful digital solutions, learning continuously, and moving comfortably between technical detail and the bigger picture.",
      signoff: "Different perspectives. Practical solutions. A human approach.",
      journeyLabel: "Professional journey",
      physics: "Physics",
      computerScience: "Computer Science",
      ecommerce: "E-commerce",
      experience: "building for the web",
    },
    expertise: {
      section: "Expertise",
      title: "A versatile toolkit.",
      accent: "Always evolving.",
      introduction:
        "From the front end to the systems behind it, I enjoy bringing the whole experience together.",
      groups: [
        "Frontend",
        "Backend",
        "CMS & E-commerce",
        "Digital Experience",
        "Project Management",
      ],
    },
    education: {
      section: "Education",
      title: "The foundation",
      accent: "behind the work.",
      dess: "D.E.S.S. in E-commerce",
      computerScience: "Bachelor’s Degree in Computer Science",
    },
    qualities: {
      section: "How I work",
      title: "Good work is",
      accent: "good thinking.",
      introduction: "A few qualities I bring to a project, alongside the technical work.",
      items: [
        {
          title: "Analytical Thinking",
          description: "I like to understand the problem before deciding how to solve it.",
        },
        {
          title: "Creativity",
          description: "I enjoy shaping clear, considered digital experiences.",
        },
        {
          title: "Problem Solving",
          description: "I work through technical challenges with care and persistence.",
        },
        {
          title: "Adaptability",
          description: "I can move between tools, teams, and changing project needs.",
        },
        {
          title: "Attention to Detail",
          description: "I value the small decisions that make an experience feel complete.",
        },
        {
          title: "Continuous Learning",
          description: "I stay curious and keep building on what I know.",
        },
      ],
    },
    contact: {
      section: "Get in touch",
      title: "Have something",
      accent: "good in mind?",
      introduction:
        "I’m always glad to hear about thoughtful projects, collaborations, or a good conversation about the web.",
      shopifyExperience:
        "My experience includes Shopify and e-commerce development, customizations, integrations, and ongoing site maintenance.",
      email: "Email",
      linkedinNote: "LinkedIn is the best way to reach me for now.",
    },
    footer: {
      note: "Made with care, in",
      backToTop: "Back to top",
    },
  },
  fr: {
    language: "Français",
    title: "Développeuse web",
    description:
      "Natalia Jabinschi est développeuse web avec plus de 8 ans d’expérience en création d’expériences numériques, de plateformes e-commerce et de solutions web.",
    skip: "Aller au contenu",
    navigation: {
      label: "Navigation principale",
      projects: "Projets",
      about: "À propos",
      expertise: "Expertise",
      contact: "Discutons",
      language: "Choisir la langue",
      open: "Ouvrir la navigation",
    },
    hero: {
      role: "Développeuse web",
      location: "Canada",
      subtitle: "Développement web | E-commerce | Expérience numérique",
      introduction:
        "Je crée des solutions web modernes qui allient rigueur technique, design réfléchi et expériences utiles.",
      viewWork: "Voir mes projets",
      contact: "Me contacter",
      availability: "Disponibilité sur demande",
      visualLabel: "Composition abstraite évoquant des expériences numériques connectées",
      visualTop: "NUMÉRIQUE / CRÉATION / 01",
      make: "CRÉER",
      it: "DU",
      matter: "sens.",
      visualBottom: "CONÇU AVEC SOIN",
      stampTop: "PENSÉ",
      stampBottom: "POUR VOUS",
      scroll: "Défiler pour découvrir",
    },
    projects: {
      section: "Projets sélectionnés",
      title: "Quelques projets",
      accent: "auxquels j’ai contribué.",
      introduction:
        "Développement web, commerce en ligne et expériences numériques — avec soin et attention aux détails.",
      categoriesLabel: "Catégories de projets",
      categories: [
        "E-commerce",
        "Développement Shopify",
        "Développement WordPress",
        "Applications web",
        "UX/UI et projets numériques",
      ],
      work: "PROJETS",
      progress: "en cours",
      artLabel: "PROJETS / PORTFOLIO",
      noteLabel: "À PROPOS DE CET ESPACE",
      emptyTitle: "Les bons projets méritent",
      emptyAccent: "d’être bien présentés.",
      emptyDescription:
        "Les études de cas seront ajoutées ici lorsque les informations et autorisations de publication seront prêtes. D’ici là, parlons de mon expérience.",
      conversation: "Entrer en contact",
      liveSite: "Voir le site",
      sourceCode: "Code source",
    },
    about: {
      section: "Quelques mots sur moi",
      title: "La curiosité fait",
      accent: "partie du métier.",
      evolution:
        "Mon parcours professionnel m’a menée de la physique à l’informatique, puis au commerce électronique. Cette diversité nourrit ma curiosité, autant pour le fonctionnement des choses que pour l’expérience des personnes. J’aime créer des solutions numériques utiles, apprendre continuellement et passer du détail technique à la vision d’ensemble.",
      signoff: "Des perspectives variées. Des solutions concrètes. Une approche humaine.",
      journeyLabel: "Parcours professionnel",
      physics: "Physique",
      computerScience: "Informatique",
      ecommerce: "Commerce électronique",
      experience: "dans le développement web",
    },
    expertise: {
      section: "Expertise",
      title: "Une boîte à outils",
      accent: "qui évolue.",
      introduction:
        "Du front-end aux systèmes qui le font fonctionner, j’aime penser l’expérience dans son ensemble.",
      groups: [
        "Front-end",
        "Back-end",
        "CMS et e-commerce",
        "Expérience numérique",
        "Gestion de projet",
      ],
    },
    education: {
      section: "Formation",
      title: "Les bases",
      accent: "de mon parcours.",
      dess: "D.E.S.S. en commerce électronique",
      computerScience: "Baccalauréat en informatique",
    },
    qualities: {
      section: "Ma façon de travailler",
      title: "Le travail bien fait",
      accent: "commence par la réflexion.",
      introduction: "Quelques qualités que j’apporte à chaque projet, au-delà de la technique.",
      items: [
        {
          title: "Esprit analytique",
          description: "Je cherche à comprendre le problème avant de choisir une solution.",
        },
        {
          title: "Créativité",
          description: "J’aime concevoir des expériences numériques claires et réfléchies.",
        },
        {
          title: "Résolution de problèmes",
          description: "J’aborde les défis techniques avec méthode et persévérance.",
        },
        {
          title: "Adaptabilité",
          description: "Je m’adapte aux outils, aux équipes et aux besoins du projet.",
        },
        {
          title: "Souci du détail",
          description: "Les petits choix contribuent à une expérience vraiment aboutie.",
        },
        {
          title: "Apprentissage continu",
          description: "Je reste curieuse et continue à développer mes connaissances.",
        },
      ],
    },
    contact: {
      section: "Contact",
      title: "Un projet en",
      accent: "tête ?",
      introduction:
        "Je suis toujours heureuse d’échanger autour de projets réfléchis, de collaborations ou du web.",
      shopifyExperience:
        "Mon expérience comprend le développement Shopify et e-commerce, les personnalisations, les intégrations et la maintenance continue de sites.",
      email: "Courriel",
      linkedinNote: "LinkedIn est le meilleur moyen de me joindre pour le moment.",
    },
    footer: {
      note: "Réalisé avec soin, au",
      backToTop: "Retour en haut",
    },
  },
  ro: {
    language: "Română",
    title: "Dezvoltatoare web",
    description:
      "Natalia Jabinschi este dezvoltatoare web cu peste 8 ani de experiență în crearea experiențelor digitale, platformelor de comerț electronic și soluțiilor web.",
    skip: "Sari la conținut",
    navigation: {
      label: "Navigare principală",
      projects: "Proiecte",
      about: "Despre mine",
      expertise: "Expertiză",
      contact: "Hai să vorbim",
      language: "Alege limba",
      open: "Deschide meniul",
    },
    hero: {
      role: "Dezvoltatoare web",
      location: "Canada",
      subtitle: "Dezvoltare web | E-commerce | Experiență digitală",
      introduction:
        "Dezvolt soluții web moderne care îmbină precizia tehnică, designul atent și experiențe utile.",
      viewWork: "Vezi proiectele",
      contact: "Contactează-mă",
      availability: "Disponibilitate la cerere",
      visualLabel: "Compoziție abstractă ce reprezintă experiențe digitale conectate",
      visualTop: "DIGITAL / CREAȚIE / 01",
      make: "CREĂM",
      it: "CU",
      matter: "sens.",
      visualBottom: "CREAT CU GRIJĂ",
      stampTop: "GÂNDIT",
      stampBottom: "CU GRIJĂ",
      scroll: "Derulează pentru a explora",
    },
    projects: {
      section: "Proiecte selectate",
      title: "Câteva proiecte",
      accent: "la care am contribuit.",
      introduction:
        "Dezvoltare web, comerț electronic și experiențe digitale — realizate cu grijă și atenție la detalii.",
      categoriesLabel: "Categorii de proiecte",
      categories: [
        "Comerț electronic",
        "Dezvoltare Shopify",
        "Dezvoltare WordPress",
        "Aplicații web",
        "UX/UI și proiecte digitale",
      ],
      work: "PROIECTE",
      progress: "în lucru",
      artLabel: "PROIECTE / PORTOFOLIU",
      noteLabel: "DESPRE ACEST SPAȚIU",
      emptyTitle: "Proiectele bune merită",
      emptyAccent: "o prezentare pe măsură.",
      emptyDescription:
        "Studiile de caz vor fi adăugate aici când detaliile și permisiunile de publicare vor fi disponibile. Între timp, putem discuta despre experiența mea.",
      conversation: "Hai să discutăm",
      liveSite: "Vezi site-ul",
      sourceCode: "Cod sursă",
    },
    about: {
      section: "Câteva cuvinte despre mine",
      title: "Curiozitatea face",
      accent: "parte din meserie.",
      evolution:
        "Parcursul meu profesional m-a purtat de la fizică la informatică și, mai recent, la comerț electronic. Această combinație îmi menține curiozitatea atât pentru modul în care funcționează lucrurile, cât și pentru felul în care oamenii le folosesc. Îmi place să creez soluții digitale utile, să învăț continuu și să trec cu ușurință de la detaliile tehnice la imaginea de ansamblu.",
      signoff: "Perspective diferite. Soluții practice. O abordare umană.",
      journeyLabel: "Parcurs profesional",
      physics: "Fizică",
      computerScience: "Informatică",
      ecommerce: "Comerț electronic",
      experience: "în dezvoltare web",
    },
    expertise: {
      section: "Expertiză",
      title: "Un set versatil",
      accent: "de competențe.",
      introduction:
        "De la interfață până la sistemele din spatele ei, îmi place să construiesc experiența în ansamblu.",
      groups: [
        "Frontend",
        "Backend",
        "CMS și e-commerce",
        "Experiență digitală",
        "Management de proiect",
      ],
    },
    education: {
      section: "Studii",
      title: "Fundamentul",
      accent: "activității mele.",
      dess: "D.E.S.S. în comerț electronic",
      computerScience: "Licență în informatică",
    },
    qualities: {
      section: "Cum lucrez",
      title: "Lucrul bun începe",
      accent: "cu o idee clară.",
      introduction: "Câteva calități pe care le aduc într-un proiect, pe lângă competențele tehnice.",
      items: [
        {
          title: "Gândire analitică",
          description: "Îmi place să înțeleg problema înainte de a alege soluția.",
        },
        {
          title: "Creativitate",
          description: "Îmi place să creez experiențe digitale clare și bine gândite.",
        },
        {
          title: "Rezolvarea problemelor",
          description: "Abordez provocările tehnice cu atenție și perseverență.",
        },
        {
          title: "Adaptabilitate",
          description: "Mă adaptez la instrumente, echipe și cerințe în schimbare.",
        },
        {
          title: "Atenție la detalii",
          description: "Apreciez micile decizii care desăvârșesc o experiență.",
        },
        {
          title: "Învățare continuă",
          description: "Rămân curioasă și continui să-mi dezvolt cunoștințele.",
        },
      ],
    },
    contact: {
      section: "Contact",
      title: "Ai un proiect",
      accent: "în minte?",
      introduction:
        "Mă bucur mereu să discut despre proiecte bine gândite, colaborări sau orice ține de web.",
      shopifyExperience:
        "Experiența mea include dezvoltare Shopify și e-commerce, personalizări, integrări și mentenanța continuă a site-urilor.",
      email: "E-mail",
      linkedinNote: "Deocamdată, cel mai simplu mă poți contacta pe LinkedIn.",
    },
    footer: {
      note: "Realizat cu grijă, în",
      backToTop: "Înapoi sus",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
