import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en' | 'hr';

export const translations = {
  de: {
    nav: {
      services: 'Leistungen',
      ratgeber: 'Ratgeber',
      faq: 'FAQ',
      about: 'Über uns',
      contact: 'Kontakt',
      getStarted: 'Loslegen',
      kiAgents: 'KI-Agenten',
      automation: 'Automatisierungen',
      websitesKI: 'Webseiten mit KI',
      socialMedia: 'Social Media',
      contentCreation: 'Content Creation',
      marketing: 'Performance Marketing',
    },
    hero: {
      location: 'Fürstenfeldbruck · München · Bayern · Deutschlandweit',
      badge: 'Zeitersparnis durch intelligente KI-Automatisierung',
      title1: 'Weniger Routinearbeit.',
      title2: 'Mehr Wachstum.',
      subtitle: 'KI-Agenten übernehmen Ihre wiederkehrenden Aufgaben –',
      subtitleHighlight: '24/7, fehlerfrei, skalierbar',
      description: 'Ihre KI-Agentur aus Fürstenfeldbruck entwickelt intelligente Automatisierungen, die Kundenservice, Lead-Generierung und Marketing optimieren. Deutschlandweit.',
      timeSaving: '80% Zeitersparnis',
      available: '24/7 verfügbar',
      freeConsultation: 'Kostenlose Beratung',
      ctaPrimary: 'Kostenlose Erstberatung',
      ctaSecondary: 'KI-Agenten entdecken',
      ctaBot: 'KI Bot testen',
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle: 'Maßgeschneiderte KI-Lösungen für Ihr Unternehmen',
      kiAgents: {
        title: 'KI-Agenten',
        desc: 'Intelligente Chatbots und Agenten für Kundenservice, Support und Lead-Generierung',
      },
      automation: {
        title: 'Automatisierungen',
        desc: 'Geschäftsprozesse automatisieren und Zeit sparen mit maßgeschneiderten Workflows',
      },
      websites: {
        title: 'Webseiten mit KI',
        desc: 'Moderne Websites mit integrierten KI-Features für mehr Conversions',
      },
      socialMedia: {
        title: 'Social Media',
        desc: 'Social Media Marketing und Community Management mit KI-Unterstützung',
      },
      content: {
        title: 'Content Creation',
        desc: 'KI-gestützte Content-Erstellung für alle Kanäle',
      },
      marketing: {
        title: 'Performance Marketing',
        desc: 'Datengetriebenes Marketing mit KI-Optimierung für maximalen ROI',
      },
    },
    contact: {
      title: 'Bereit für',
      titleHighlight: 'Innovation?',
      subtitle: 'Lassen Sie uns besprechen, wie die ExtruCon GmbH Ihre digitale Präsenz verändern kann. Kontaktieren Sie uns für ein Beratungsgespräch.',
      email: 'E-Mail',
      phone: 'Anrufen',
      webpage: 'Webpage',
      formTitle: 'Nachricht senden',
      name: 'Name',
      namePlaceholder: 'Ihr Name',
      company: 'Unternehmen',
      companyPlaceholder: 'Firma (optional)',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'ihre@email.de',
      phonePlaceholder: '+49 ...',
      interest: 'Interesse an',
      selectPlaceholder: 'Bitte wählen...',
      kiAutomation: 'KI & Automatisierung',
      socialMediaMarketing: 'Social Media Marketing',
      webDevelopment: 'Webentwicklung',
      performanceMarketing: 'Performance Marketing',
      contentCreation: 'Content Creation',
      brandBuilding: 'Markenaufbau',
      other: 'Sonstiges',
      message: 'Nachricht',
      messagePlaceholder: 'Wie können wir Ihnen helfen?',
      privacyText: 'Mit dem Absenden stimmen Sie unserer',
      privacyLink: 'Datenschutzerklärung',
      privacyEnd: 'zu.',
      submit: 'Nachricht senden',
      thankYou: 'Vielen Dank!',
      thankYouMessage: 'Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.',
    },
    footer: {
      slogan: 'Ihre Agentur für KI, Automatisierung & digitales Wachstum.',
      services: 'Leistungen',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      about: 'Über uns',
      contact: 'Kontakt',
      faq: 'FAQ',
      ratgeber: 'Ratgeber',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      allRights: 'Alle Rechte vorbehalten.',
    },
    about: {
      badge: 'Über ExtruCon GmbH',
      title: 'Innovation trifft',
      titleHighlight: 'Expertise',
      description: 'Die ExtruCon GmbH ist Ihr Partner für digitale Transformation. Wir entwickeln KI-Lösungen, die Unternehmen effizienter machen.',
      whyUs: 'Warum wir?',
      experience: 'Erfahrene KI-Experten',
      individual: 'Individuelle Lösungen',
      german: 'Deutsche Qualität',
      support: '24/7 Support',
    },
    funnel: {
      title: 'In 3 Schritten zur',
      titleHighlight: 'KI-Lösung',
      step1: 'Erstgespräch',
      step1Desc: 'Kostenloses Beratungsgespräch zur Bedarfsanalyse',
      step2: 'Konzeption',
      step2Desc: 'Individuelle Strategie und Lösungskonzept',
      step3: 'Umsetzung',
      step3Desc: 'Implementation und kontinuierliche Optimierung',
    },
    problem: {
      title: 'Das Problem',
      titleHighlight: 'ohne KI',
      problems: [
        'Zeitraubende manuelle Aufgaben',
        'Verpasste Kundenanfragen',
        'Inkonsistente Kommunikation',
        'Hohe Personalkosten',
      ],
      solution: 'Die Lösung',
      solutionHighlight: 'mit ExtruCon',
      solutions: [
        '80% Zeitersparnis durch Automatisierung',
        '24/7 Verfügbarkeit für Kunden',
        'Einheitliche Markensprache',
        'Skalierbare Prozesse',
      ],
    },
    chatbot: {
      title: 'KI-Assistent',
      subtitle: 'Testen Sie unseren intelligenten Chatbot',
      placeholder: 'Stellen Sie eine Frage...',
      send: 'Senden',
      welcome: 'Hallo! Ich bin der ExtruCon KI-Assistent. Wie kann ich Ihnen helfen?',
    },
    faq: {
      title: 'Häufige Fragen',
      questions: [
        { q: 'Wie schnell erhalte ich eine Antwort?', a: 'Innerhalb von 24 Stunden an Werktagen.' },
        { q: 'Kostenlose Erstgespräche?', a: 'Ja! Immer kostenlos und unverbindlich.' },
        { q: 'Auch für kleine Unternehmen?', a: 'Absolut. Lösungen für jedes Budget.' },
      ],
      viewAll: 'Alle FAQs ansehen',
    },
  },
  en: {
    nav: {
      services: 'Services',
      ratgeber: 'Resources',
      faq: 'FAQ',
      about: 'About Us',
      contact: 'Contact',
      getStarted: 'Get Started',
      kiAgents: 'AI Agents',
      automation: 'Automation',
      websitesKI: 'AI Websites',
      socialMedia: 'Social Media',
      contentCreation: 'Content Creation',
      marketing: 'Performance Marketing',
    },
    hero: {
      location: 'Fürstenfeldbruck · Munich · Bavaria · Germany-wide',
      badge: 'Save time with intelligent AI automation',
      title1: 'Less routine work.',
      title2: 'More growth.',
      subtitle: 'AI agents handle your recurring tasks –',
      subtitleHighlight: '24/7, error-free, scalable',
      description: 'Your AI agency from Fürstenfeldbruck develops intelligent automation that optimizes customer service, lead generation, and marketing. Nationwide.',
      timeSaving: '80% time savings',
      available: 'Available 24/7',
      freeConsultation: 'Free consultation',
      ctaPrimary: 'Free Consultation',
      ctaSecondary: 'Discover AI Agents',
      ctaBot: 'Test AI Bot',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Tailored AI solutions for your business',
      kiAgents: {
        title: 'AI Agents',
        desc: 'Intelligent chatbots and agents for customer service, support, and lead generation',
      },
      automation: {
        title: 'Automation',
        desc: 'Automate business processes and save time with custom workflows',
      },
      websites: {
        title: 'AI Websites',
        desc: 'Modern websites with integrated AI features for more conversions',
      },
      socialMedia: {
        title: 'Social Media',
        desc: 'Social media marketing and community management with AI support',
      },
      content: {
        title: 'Content Creation',
        desc: 'AI-powered content creation for all channels',
      },
      marketing: {
        title: 'Performance Marketing',
        desc: 'Data-driven marketing with AI optimization for maximum ROI',
      },
    },
    contact: {
      title: 'Ready for',
      titleHighlight: 'Innovation?',
      subtitle: 'Let\'s discuss how ExtruCon GmbH can transform your digital presence. Contact us for a consultation.',
      email: 'Email',
      phone: 'Call',
      webpage: 'Website',
      formTitle: 'Send Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      company: 'Company',
      companyPlaceholder: 'Company (optional)',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '+49 ...',
      interest: 'Interested in',
      selectPlaceholder: 'Please select...',
      kiAutomation: 'AI & Automation',
      socialMediaMarketing: 'Social Media Marketing',
      webDevelopment: 'Web Development',
      performanceMarketing: 'Performance Marketing',
      contentCreation: 'Content Creation',
      brandBuilding: 'Brand Building',
      other: 'Other',
      message: 'Message',
      messagePlaceholder: 'How can we help you?',
      privacyText: 'By submitting, you agree to our',
      privacyLink: 'Privacy Policy',
      privacyEnd: '.',
      submit: 'Send Message',
      thankYou: 'Thank you!',
      thankYouMessage: 'Your message has been sent. We will get back to you as soon as possible.',
    },
    footer: {
      slogan: 'Your agency for AI, automation & digital growth.',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      about: 'About Us',
      contact: 'Contact',
      faq: 'FAQ',
      ratgeber: 'Resources',
      impressum: 'Imprint',
      privacy: 'Privacy',
      terms: 'Terms',
      allRights: 'All rights reserved.',
    },
    about: {
      badge: 'About ExtruCon GmbH',
      title: 'Innovation meets',
      titleHighlight: 'Expertise',
      description: 'ExtruCon GmbH is your partner for digital transformation. We develop AI solutions that make businesses more efficient.',
      whyUs: 'Why us?',
      experience: 'Experienced AI experts',
      individual: 'Individual solutions',
      german: 'German quality',
      support: '24/7 Support',
    },
    funnel: {
      title: 'Your AI solution in',
      titleHighlight: '3 steps',
      step1: 'Initial Meeting',
      step1Desc: 'Free consultation for needs analysis',
      step2: 'Concept',
      step2Desc: 'Individual strategy and solution concept',
      step3: 'Implementation',
      step3Desc: 'Implementation and continuous optimization',
    },
    problem: {
      title: 'The problem',
      titleHighlight: 'without AI',
      problems: [
        'Time-consuming manual tasks',
        'Missed customer inquiries',
        'Inconsistent communication',
        'High personnel costs',
      ],
      solution: 'The solution',
      solutionHighlight: 'with ExtruCon',
      solutions: [
        '80% time savings through automation',
        '24/7 availability for customers',
        'Consistent brand voice',
        'Scalable processes',
      ],
    },
    chatbot: {
      title: 'AI Assistant',
      subtitle: 'Test our intelligent chatbot',
      placeholder: 'Ask a question...',
      send: 'Send',
      welcome: 'Hello! I am the ExtruCon AI Assistant. How can I help you?',
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        { q: 'How quickly will I receive a response?', a: 'Within 24 hours on business days.' },
        { q: 'Free initial consultations?', a: 'Yes! Always free and non-binding.' },
        { q: 'Also for small businesses?', a: 'Absolutely. Solutions for every budget.' },
      ],
      viewAll: 'View all FAQs',
    },
  },
  hr: {
    nav: {
      services: 'Usluge',
      ratgeber: 'Savjetnik',
      faq: 'FAQ',
      about: 'O nama',
      contact: 'Kontakt',
      getStarted: 'Započnite',
      kiAgents: 'AI Agenti',
      automation: 'Automatizacija',
      websitesKI: 'Web stranice s AI',
      socialMedia: 'Društvene mreže',
      contentCreation: 'Kreiranje sadržaja',
      marketing: 'Performance Marketing',
    },
    hero: {
      location: 'Fürstenfeldbruck · München · Bavarska · Cijela Njemačka',
      badge: 'Uštedite vrijeme uz inteligentnu AI automatizaciju',
      title1: 'Manje rutinskog posla.',
      title2: 'Više rasta.',
      subtitle: 'AI agenti preuzimaju vaše ponavljajuće zadatke –',
      subtitleHighlight: '24/7, bez grešaka, skalabilno',
      description: 'Vaša AI agencija iz Fürstenfeldbrucka razvija inteligentnu automatizaciju koja optimizira korisničku službu, generiranje leadova i marketing. U cijeloj Njemačkoj.',
      timeSaving: '80% uštede vremena',
      available: 'Dostupno 24/7',
      freeConsultation: 'Besplatno savjetovanje',
      ctaPrimary: 'Besplatna konzultacija',
      ctaSecondary: 'Otkrijte AI agente',
      ctaBot: 'Testirajte AI bota',
    },
    services: {
      title: 'Naše usluge',
      subtitle: 'Prilagođena AI rješenja za vaše poslovanje',
      kiAgents: {
        title: 'AI Agenti',
        desc: 'Inteligentni chatbotovi i agenti za korisničku službu, podršku i generiranje leadova',
      },
      automation: {
        title: 'Automatizacija',
        desc: 'Automatizirajte poslovne procese i uštedite vrijeme s prilagođenim tijekovima rada',
      },
      websites: {
        title: 'Web stranice s AI',
        desc: 'Moderne web stranice s integriranim AI značajkama za više konverzija',
      },
      socialMedia: {
        title: 'Društvene mreže',
        desc: 'Marketing na društvenim mrežama i upravljanje zajednicom uz AI podršku',
      },
      content: {
        title: 'Kreiranje sadržaja',
        desc: 'Kreiranje sadržaja uz pomoć AI za sve kanale',
      },
      marketing: {
        title: 'Performance Marketing',
        desc: 'Marketing vođen podacima s AI optimizacijom za maksimalni ROI',
      },
    },
    contact: {
      title: 'Spremni za',
      titleHighlight: 'inovaciju?',
      subtitle: 'Razgovarajmo o tome kako ExtruCon GmbH može transformirati vašu digitalnu prisutnost. Kontaktirajte nas za konzultaciju.',
      email: 'E-pošta',
      phone: 'Nazovite',
      webpage: 'Web stranica',
      formTitle: 'Pošaljite poruku',
      name: 'Ime',
      namePlaceholder: 'Vaše ime',
      company: 'Tvrtka',
      companyPlaceholder: 'Tvrtka (opcionalno)',
      emailLabel: 'E-pošta',
      emailPlaceholder: 'vasa@email.hr',
      phonePlaceholder: '+385 ...',
      interest: 'Zainteresirani za',
      selectPlaceholder: 'Molimo odaberite...',
      kiAutomation: 'AI i automatizacija',
      socialMediaMarketing: 'Marketing na društvenim mrežama',
      webDevelopment: 'Web razvoj',
      performanceMarketing: 'Performance Marketing',
      contentCreation: 'Kreiranje sadržaja',
      brandBuilding: 'Izgradnja brenda',
      other: 'Ostalo',
      message: 'Poruka',
      messagePlaceholder: 'Kako vam možemo pomoći?',
      privacyText: 'Slanjem prihvaćate našu',
      privacyLink: 'Politiku privatnosti',
      privacyEnd: '.',
      submit: 'Pošalji poruku',
      thankYou: 'Hvala!',
      thankYouMessage: 'Vaša poruka je poslana. Javit ćemo vam se što je prije moguće.',
    },
    footer: {
      slogan: 'Vaša agencija za AI, automatizaciju i digitalni rast.',
      services: 'Usluge',
      company: 'Tvrtka',
      legal: 'Pravne informacije',
      about: 'O nama',
      contact: 'Kontakt',
      faq: 'FAQ',
      ratgeber: 'Savjetnik',
      impressum: 'Impressum',
      privacy: 'Privatnost',
      terms: 'Uvjeti',
      allRights: 'Sva prava pridržana.',
    },
    about: {
      badge: 'O ExtruCon GmbH',
      title: 'Inovacija susreće',
      titleHighlight: 'stručnost',
      description: 'ExtruCon GmbH je vaš partner za digitalnu transformaciju. Razvijamo AI rješenja koja čine poslovanje učinkovitijim.',
      whyUs: 'Zašto mi?',
      experience: 'Iskusni AI stručnjaci',
      individual: 'Individualna rješenja',
      german: 'Njemačka kvaliteta',
      support: '24/7 Podrška',
    },
    funnel: {
      title: 'Vaše AI rješenje u',
      titleHighlight: '3 koraka',
      step1: 'Početni razgovor',
      step1Desc: 'Besplatna konzultacija za analizu potreba',
      step2: 'Koncept',
      step2Desc: 'Individualna strategija i koncept rješenja',
      step3: 'Implementacija',
      step3Desc: 'Implementacija i kontinuirana optimizacija',
    },
    problem: {
      title: 'Problem',
      titleHighlight: 'bez AI',
      problems: [
        'Vremenski zahtjevni ručni zadaci',
        'Propušteni upiti klijenata',
        'Nedosljedna komunikacija',
        'Visoki troškovi osoblja',
      ],
      solution: 'Rješenje',
      solutionHighlight: 's ExtruConom',
      solutions: [
        '80% uštede vremena kroz automatizaciju',
        '24/7 dostupnost za klijente',
        'Dosljedan glas brenda',
        'Skalabilni procesi',
      ],
    },
    chatbot: {
      title: 'AI Asistent',
      subtitle: 'Testirajte naš inteligentni chatbot',
      placeholder: 'Postavite pitanje...',
      send: 'Pošalji',
      welcome: 'Pozdrav! Ja sam ExtruCon AI Asistent. Kako vam mogu pomoći?',
    },
    faq: {
      title: 'Često postavljana pitanja',
      questions: [
        { q: 'Koliko brzo ću dobiti odgovor?', a: 'Unutar 24 sata radnim danima.' },
        { q: 'Besplatne početne konzultacije?', a: 'Da! Uvijek besplatno i neobvezujuće.' },
        { q: 'I za male tvrtke?', a: 'Apsolutno. Rješenja za svaki proračun.' },
      ],
      viewAll: 'Pogledajte sve FAQ',
    },
  },
};

type Translations = typeof translations.de;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && ['de', 'en', 'hr'].includes(saved)) return saved;
    }
    return 'de';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
