export const locales = ["en", "fr", "ro"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    language: "English",
    title: "Web Developer",
    description:
      "I’m Natalia Jabinschi, a web developer with 8+ years of experience creating thoughtful digital experiences, e-commerce platforms, and web solutions.",
    skip: "Skip to content",
    navigation: {
      label: "Main navigation",
      home: "home",
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
      availability: "I’m available on request",
      visualLabel: "A crafted abstract composition representing connected digital experiences",
      visualTop: "CODE & ART / 01",
      make: "I MAKE",
      it: "IT",
      matter: "matter.",
      visualBottom: "I BUILD WITH INTENTION",
      stampTop: "THOUGHTFUL",
      stampBottom: "BY DESIGN",
      scroll: "Scroll to explore",
    },
    projects: {
      section: "Selected work",
      title: "A few projects",
      accent: "I developed.",
      introduction:
        "Thoughtful websites built for businesses and their customers.",
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
      openProject: "Open project",
      technologies: "Technologies used",
    },
    about: {
      section: "A little about me",
      title: "I Bring Curiosity",
      accent: "to my craft.",
      evolution:
        "I’ve built my career across web development, e-commerce, and digital experiences. I enjoy understanding how things work and how people use them, then turning that insight into useful digital solutions. I keep learning and move comfortably between technical detail and the bigger picture.",
      signoff: "I bring different perspectives, practical solutions, and a human approach.",
      linkedin: "View my LinkedIn profile",
      experience: "building for the web",
      ownership: "My portfolio",
    },
    expertise: {
      section: "Expertise",
      title: "My toolkit.",
      accent: "Always evolving.",
      introduction:
        "From the front end to the systems behind it, I enjoy bringing the whole experience together.",
      groups: [
        "Frontend",
        "Backend",
        "CMS & E-commerce",
        "Digital Experience",
        "Project Management",
        "AI Tools Integration",
      ],
    },
    education: {
      section: "Education",
      title: "My foundation",
      accent: "for the work.",
      dess: "D.E.S.S. in E-commerce",
      computerScience: "Bachelor’s Degree in Computer Science",
    },
    qualities: {
      section: "How I work",
      title: "Good work is",
      accent: "good thinking.",
      introduction: "I bring these qualities to every project, alongside my technical experience.",
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
        "I’m always glad to hear about thoughtful projects and collaborations. I bring more than eight years of web development experience, including Shopify and e-commerce work.",
      shopifyExperience:
        "I work with Shopify, WordPress, and WooCommerce, and I build front-end and back-end features, integrations, and site improvements.",
      email: "Email",
      linkedinNote: "LinkedIn is the best way to reach me for now.",
    },
    footer: {
      note: "I designed and developed this portfolio.",
      backToTop: "Back to top",
    },
  },
  fr: {
    language: "Français",
    title: "Développeuse web",
    description:
      "Je suis Natalia Jabinschi, développeuse web avec plus de 8 ans d’expérience en création d’expériences numériques, de plateformes e-commerce et de solutions web.",
    skip: "Aller au contenu",
    navigation: {
      label: "Navigation principale",
      home: "accueil",
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
      availability: "Je suis disponible sur demande",
      visualLabel: "Composition abstraite évoquant des expériences numériques connectées",
      visualTop: "CODE & ART / 01",
      make: "JE CRÉE",
      it: "DU",
      matter: "sens.",
      visualBottom: "JE CONÇOIS AVEC SOIN",
      stampTop: "PENSÉ",
      stampBottom: "POUR VOUS",
      scroll: "Défiler pour découvrir",
    },
    projects: {
      section: "Projets sélectionnés",
      title: "Mes projets",
      accent: "que j’ai développés.",
      introduction:
        "Des sites clairs, conçus pour les entreprises et leurs clients.",
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
      openProject: "Voir le projet",
      technologies: "Technologies utilisées",
    },
    about: {
      section: "Quelques mots sur moi",
      title: "J’apporte ma curiosité",
      accent: "à chaque projet.",
      evolution:
        "J’ai construit mon parcours entre développement web, commerce électronique et expérience numérique. J’aime comprendre le fonctionnement des choses et l’expérience des personnes, puis transformer cette réflexion en solutions utiles. Je continue à apprendre et passe volontiers du détail technique à la vision d’ensemble.",
      signoff: "J’apporte des perspectives variées, des solutions concrètes et une approche humaine.",
      linkedin: "Voir mon profil LinkedIn",
      experience: "dans le développement web",
      ownership: "Mon portfolio",
    },
    expertise: {
      section: "Expertise",
      title: "Mes outils.",
      accent: "En constante évolution.",
      introduction:
        "Du front-end aux systèmes qui le font fonctionner, j’aime penser l’expérience dans son ensemble.",
      groups: [
        "Front-end",
        "Back-end",
        "CMS et e-commerce",
        "Expérience numérique",
        "Gestion de projet",
        "Intégration d’outils IA",
      ],
    },
    education: {
      section: "Formation",
      title: "Ma formation",
      accent: "au service de mes projets.",
      dess: "D.E.S.S. en commerce électronique",
      computerScience: "Baccalauréat en informatique",
    },
    qualities: {
      section: "Ma façon de travailler",
      title: "Le travail bien fait",
      accent: "commence par la réflexion.",
      introduction: "J’apporte ces qualités à mes projets, en complément de mon expérience technique.",
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
        "J’aime échanger autour de projets réfléchis et de collaborations. J’apporte plus de huit ans d’expérience en développement web, notamment sur Shopify et en e-commerce.",
      shopifyExperience:
        "Je travaille avec Shopify, WordPress et WooCommerce, et je développe des fonctionnalités front-end et back-end, des intégrations et des améliorations de sites.",
      email: "Courriel",
      linkedinNote: "LinkedIn est le meilleur moyen de me joindre pour le moment.",
    },
    footer: {
      note: "J’ai conçu et développé ce portfolio.",
      backToTop: "Retour en haut",
    },
  },
  ro: {
    language: "Română",
    title: "Dezvoltatoare web",
    description:
      "Sunt Natalia Jabinschi, dezvoltatoare web cu peste 8 ani de experiență în crearea experiențelor digitale, platformelor de comerț electronic și soluțiilor web.",
    skip: "Sari la conținut",
    navigation: {
      label: "Navigare principală",
      home: "pagina principală",
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
      availability: "Sunt disponibilă la cerere",
      visualLabel: "Compoziție abstractă ce reprezintă experiențe digitale conectate",
      visualTop: "CODE & ART / 01",
      make: "EU CREEZ",
      it: "CU",
      matter: "sens.",
      visualBottom: "CREEZ CU GRIJĂ",
      stampTop: "GÂNDIT",
      stampBottom: "CU GRIJĂ",
      scroll: "Derulează pentru a explora",
    },
    projects: {
      section: "Proiecte selectate",
      title: "Câteva proiecte",
      accent: "dezvoltate de mine.",
      introduction:
        "Site-uri clare, create pentru companii și clienții lor.",
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
      openProject: "Deschide proiectul",
      technologies: "Tehnologii utilizate",
    },
    about: {
      section: "Câteva cuvinte despre mine",
      title: "Îmi aduc curiozitatea",
      accent: "în fiecare proiect.",
      evolution:
        "Mi-am construit parcursul profesional în dezvoltare web, e-commerce și experiențe digitale. Îmi place să înțeleg cum funcționează lucrurile și cum le folosesc oamenii, apoi să transform această perspectivă în soluții digitale utile. Învăț constant și trec cu ușurință de la detaliile tehnice la imaginea de ansamblu.",
      signoff: "Aduc perspective diferite, soluții practice și o abordare umană.",
      linkedin: "Vezi profilul meu LinkedIn",
      experience: "în dezvoltare web",
      ownership: "Portofoliul meu",
    },
    expertise: {
      section: "Expertiză",
      title: "Setul meu de instrumente",
      accent: "este în continuă evoluție.",
      introduction:
        "De la interfață până la sistemele din spatele ei, îmi place să construiesc experiența în ansamblu.",
      groups: [
        "Frontend",
        "Backend",
        "CMS și e-commerce",
        "Experiență digitală",
        "Management de proiect",
        "Integrarea instrumentelor AI",
      ],
    },
    education: {
      section: "Studii",
      title: "Formarea mea",
      accent: "stă la baza muncii mele.",
      dess: "D.E.S.S. în comerț electronic",
      computerScience: "Licență în informatică",
    },
    qualities: {
      section: "Cum lucrez",
      title: "Lucrul bun începe",
      accent: "cu o idee clară.",
      introduction: "Aduc aceste calități în proiectele mele, alături de experiența tehnică.",
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
        "Mă bucur să discut despre proiecte bine gândite și colaborări. Aduc peste opt ani de experiență în dezvoltare web, inclusiv în Shopify și e-commerce.",
      shopifyExperience:
        "Lucrez cu Shopify, WordPress și WooCommerce și dezvolt funcționalități front-end și back-end, integrări și îmbunătățiri pentru site-uri.",
      email: "E-mail",
      linkedinNote: "Deocamdată, cel mai simplu mă poți contacta pe LinkedIn.",
    },
    footer: {
      note: "Am conceput și dezvoltat acest portofoliu.",
      backToTop: "Înapoi sus",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
