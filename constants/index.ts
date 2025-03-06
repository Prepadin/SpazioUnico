import {
  Code,
  Github,
  ImageIcon,
  Linkedin,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  GalleryVertical,
} from 'lucide-react'

export const MAX_FREE_COUNTS = 5 as const

export const TESTIMONIALS = [
  {
    name: 'Bruno Caruso',
    image: '/users/james-barr.png',
    title: 'Specialista di marketing',
    description:
      "Questa app è un punto di svolta! Ho caricato una foto del mio soggiorno e in pochi secondi mi ha offerto diverse opzioni di design. L'intelligenza artificiale ha compreso perfettamente il mio stile e ha reso la stanza fresca e moderna senza problemi. Raccomando!",
  },
  {
    name: 'Chiara Nasato',
    image: '/users/brock-wegner.png',
    title: 'Studente',
    description:
      "Adoro questo strumento! Non sono bravo nel design degli interni, ma questa app mi ha reso tutto più semplice. Ho appena caricato una foto della mia camera da letto e l'intelligenza artificiale mi ha suggerito progetti sorprendenti a cui non avrei mai pensato da sola. Risultati sorprendenti!",
  },
  {
    name: 'Gianni Pesci',
    image: '/users/samuel-raita.png',
    title: 'Imprenditore',
    description:
      "Il generatore di progettazione AI mi ha lasciato senza fiato! In pochi minuti ho potuto vedere diversi stili di arredamento per il mio nuovo appartamento. È estremamente facile da usare e produce risultati a livello professionale.",
  },
  {
    name: 'Elena Bernardi',
    image: '/users/evan-wise.png',
    title: 'Grafico',
    description: "Questa app mi ha fatto risparmiare così tanto tempo e denaro. Non ero sicuro di come trasformare il mio spazio, ma l'intelligenza artificiale mi ha dato idee fantastiche che si adattavano perfettamente ai miei gusti. Il processo è stato fluido e i risultati sono stati sorprendenti!",
  },
] as const

export const TOOLS = [
  // {
  //   label: 'Conversation',
  //   icon: MessageSquare,
  //   color: 'text-violet-500',
  //   bgColor: 'bg-violet-500/10',
  //   href: '/conversation',
  // },
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: 'text-emerald-500',
  //   bgColor: 'bg-violet-500/10',
  //   href: '/music',
  // },
  {
    label: 'Generatore di stanze',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  // {
  //   label: 'Pomoč',
  //   icon: VideoIcon,
  //   color: 'text-orange-700',
  //   bgColor: 'bg-orange-700/10',
  //   href: '/video',
  // },
  {
    label: 'Contatto',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
  },
] as const

export const ROUTES = [
  {
    label: 'Pagina iniziale',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  ...TOOLS,
  {
    label: 'Impostazioni',
    icon: Settings,
    href: '/settings',
    color: null,
  },
] as const

export const FOOTER_LINKS = [
  // {
  //   name: 'Project',
  //   icon: GalleryVertical,
  //   link: 'https://redtomato0129.com/portfolio/jarvis-ai',
  // },
  // {
  //   name: 'Linkedin',
  //   icon: Linkedin,
  //   link: 'https://linkedin.com/in/redtomato0129',
  // },
  // {
  //   name: 'Github',
  //   icon: Github,
  //   link: 'https://github.com/redtomato0129/jarvis-ai',
  // },
]
