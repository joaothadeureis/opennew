
import { 
  Phone, 
  BarChart3, 
  Clock, 
  List,
  MousePointerClick,
  Users,
  History,
  LayoutTemplate,
  ShieldCheck, 
  Zap, 
  DollarSign, 
  Headphones, 
  Code2,
  TrendingUp
} from 'lucide-react';

export const BRAND = {
  name: "OpenNew",
  colors: {
    primary: "#4BDAAE",
    secondary: "#2F2F2F",
    accent: "#B9DF3A",
    text_dark: "#1A1A1A",
    text_light: "#666666",
    background: "#FFFFFF",
    section_gray: "#F5F9FC"
  }
};

export const ANNOUNCEMENT = {
  text: "🔥 Promoção Especial: PABX White Label por R$3,50/ramal!",
  // Link removed as requested
};

export const MENU_ITEMS = [
  "Portfólio de Serviços",
  "Integrações",
  "Como Funciona",
  "Clientes",
  "FAQ"
];

export const CONTENT = {
  header: {
    cta: { text: "Solicitar Demonstração", link: "#demo" }
  },
  hero: {
    heading: "Você, dono de empresa, já pensou em ter um PABX em nuvem White Label?",
    subheading: "Sua solução em telefonia VoIP com sua marca, seu painel e sua experiência. Com a tecnologia OpenNew, você entrega uma plataforma robusta, moderna e escalável — como se fosse sua.",
    cta_primary: { text: "Solicitar Demonstração Gratuita", link: "#demo" },
    image: "/v2/hero.webp"
  },
  business_intro: {
    heading: "Seu Negócio Pronto para Escalar, Sem Barreiras.",
    text: "A OpenNew é parceira de empresas que desejam crescer oferecendo serviços cloud modernos. Com nosso serviço whitelabel, você personaliza com sua marca, painel, cores e domínio — e oferece uma plataforma completa de telefonia e atendimento em nuvem para seus clientes.",
    image: "/v2/Seu Negócio Pronto para Escalar, Sem Barreiras.webp"
  },
  portfolio: {
    heading: "Sua Marca, Nosso Poder: Um Portfólio Completo de Serviços",
    slides: [
      {
        id: "dashboard",
        title: "Gestão e Monitoramento em Tempo Real",
        image: "/v2/slide 1.webp",
        items: [
          { 
            title: "Fluxo de Ligações", 
            description: "Visualize o desempenho das chamadas recebidas, incluindo totais, atendidas e abandonadas.",
            icon: BarChart3 
          },
          { 
            title: "Registro de Tempo Médio de Espera (TME)", 
            description: "Indicador claro do tempo médio que cada cliente aguarda na fila antes de ser atendido.",
            icon: Clock 
          },
          { 
            title: "Registro Tempo Médio de Atendimento (TMA)", 
            description: "Acompanhe o tempo médio gasto em cada atendimento para otimizar sua equipe.",
            icon: History 
          }
        ]
      },
      {
        id: "operations",
        title: "Operação Eficiente e Inteligente",
        image: "/v2/slide 2.webp",
        items: [
          { 
            title: "Retorno de Chamadas Abandonadas", 
            description: "Identifique clientes não atendidos e retorne a ligação sem perder oportunidades.",
            icon: Phone 
          },
          { 
            title: "Discagem Rápida (Click to Call)", 
            description: "Faça ligações com apenas um clique, acelerando o contato com os clientes.",
            icon: MousePointerClick 
          },
          { 
            title: "Classificação de Chamadas", 
            description: "Registre e categorize cada atendimento de forma prática para relatórios assertivos.",
            icon: List 
          }
        ]
      },
      {
        id: "branding",
        title: "Identidade Totalmente Sua",
        image: "/v2/slide 3.webp",
        items: [
          { 
            title: "Plataforma White Label", 
            description: "Personalize toda a interface com sua logo, cores e domínio. Seu cliente vê apenas a sua marca.",
            icon: LayoutTemplate 
          },
          { 
            title: "Fila de Espera em Tempo Real", 
            description: "Organize melhor o fluxo acompanhando chamadas aguardando atendimento.",
            icon: Users 
          },
          { 
            title: "Histórico Completo", 
            description: "Consulte registros anteriores para manter o acompanhamento total do cliente.",
            icon: History 
          }
        ]
      }
    ]
  },
  benefits: {
    heading: "Resultados Concretos: O Que a OpenNew Traz para Sua Empresa",
    center_image: "/v2/Resultados Concretos O Que a Opennew Traz para Sua Empresa.webp",
    cards: [
      {
        icon: ShieldCheck,
        title: "Marca Fortalecida e Reconhecida",
        text: "Todo o mérito é seu. Ofereça uma solução de qualidade superior sob sua própria bandeira, construindo autoridade no seu nicho."
      },
      {
        icon: TrendingUp,
        title: "Renda Recorrente e Previsível",
        text: "Transforme custos em lucro. Monetize rapidamente serviços de alto valor com um modelo de negócio escalável e estável."
      },
      {
        icon: Zap,
        title: "Lançamento Rápido no Mercado",
        text: "Chegue na frente da concorrência. Coloque sua plataforma no ar em semanas, não em meses, e comece a gerar receita imediatamente."
      },
      {
        icon: DollarSign,
        title: "Sem Custos de Desenvolvimento e Manutenção",
        text: "Foco total no seu negócio. Nós cuidamos da infraestrutura, atualizações e segurança para que você se preocupe apenas em crescer."
      },
      {
        icon: Headphones,
        title: "Suporte e Treinamento Especializado",
        text: "Conte com nossa expertise. Tenha acesso a materiais de marketing personalizados, treinamentos completos e um suporte técnico dedicado."
      },
      {
        icon: Code2,
        title: "Escalabilidade Ilimitada",
        text: "Cresça sem limites. Nossa plataforma é robusta e flexível, pronta para acompanhar a expansão do seu negócio e de seus clientes."
      }
    ]
  },
  algar_section: {
    heading: "Somos parceiros da Algar Telecom em todo o Brasil",
    text: "Linhas fixas virtuais com estabilidade e ligações ilimitadas, garantindo mais qualidade e economia para sua empresa.",
    logo_url: "/v2/Algar_Telecom_logo-1.webp" 
  },
  integrations: {
    heading: "Nossos parceiros para integrações",
    logos: [
      { name: "Parceiro 1", image: "/v2/Nossos parceiros para integrações/image-11.webp" },
      { name: "Parceiro 2", image: "/v2/Nossos parceiros para integrações/image-12.webp" },
      { name: "Parceiro 3", image: "/v2/Nossos parceiros para integrações/image-13.webp" },
      { name: "Parceiro 4", image: "/v2/Nossos parceiros para integrações/image-14.webp" },
      { name: "Parceiro 5", image: "/v2/Nossos parceiros para integrações/image-15.webp" },
      { name: "Parceiro 6", image: "/v2/Nossos parceiros para integrações/image-16.webp" },
      { name: "Parceiro 7", image: "/v2/Nossos parceiros para integrações/image-17.webp" },
      { name: "Parceiro 8", image: "/v2/Nossos parceiros para integrações/image-18.webp" },
      { name: "Parceiro 9", image: "/v2/Nossos parceiros para integrações/image-19.webp" },
      { name: "Parceiro 10", image: "/v2/Nossos parceiros para integrações/image-20.webp" },
      { name: "Parceiro 11", image: "/v2/Nossos parceiros para integrações/image-21.webp" },
      { name: "Parceiro 12", image: "/v2/Nossos parceiros para integrações/image-22.webp" },
      { name: "Parceiro 13", image: "/v2/Nossos parceiros para integrações/image-24.webp" },
      { name: "Parceiro 14", image: "/v2/Nossos parceiros para integrações/image-25.webp" },
      { name: "Parceiro 15", image: "/v2/Nossos parceiros para integrações/image-26.webp" },
      { name: "Parceiro 16", image: "/v2/Nossos parceiros para integrações/image-27.webp" },
      { name: "Parceiro 17", image: "/v2/Nossos parceiros para integrações/image-28.webp" },
      { name: "Parceiro 18", image: "/v2/Nossos parceiros para integrações/Frame-15.webp" }
    ]
  },
  steps: {
    heading: "Sua Plataforma pronta em poucos passos",
    steps: [
      {
        step: 1,
        title: "Converse com Nossos Especialistas",
        text: "Mapeamos necessidades, objetivos e definimos o melhor setup para sua empresa."
      },
      {
        step: 2,
        title: "Personalize sua Marca",
        text: "Inserimos sua logo, domínio e identidade visual completa."
      },
      {
        step: 3,
        title: "Lançamento e Suporte",
        text: "Você começa a operar e vender com sua marca — com suporte contínuo da OpenNew."
      }
    ]
  },
  testimonials: {
    heading: "Depoimentos de clientes",
    items: [
      {
        name: "Pedro Wilson",
        date: "17/04/2025",
        text: "Experiência de suporte incrível, fui atendido muito bem e extremamente rápido, conseguiu sanar todas minhas dúvidas....",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "AllDigest Serviços Médicos",
        date: "19/11/2024",
        text: "Excelente!!!!",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
      },
      {
        name: "Helio Moreira",
        date: "09/11/2024",
        text: "\"Estou muito satisfeito com a OpenNew e seu produto VoIP! A solução é de excelente qualidade, com ótima estabilidade e facilidade...",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        name: "Ana Luíza Santos Brandão",
        date: "27/09/2024",
        text: "Em nome da Dr. Implante, gostaríamos de agradecer à OpenNew pelas soluções inovadoras e eficientes para o...",
        avatar: "https://ui-avatars.com/api/?name=Ana+Luiza&background=0D8ABC&color=fff"
      },
      {
        name: "Mayara Ramos",
        date: "27/09/2024",
        text: "Gostaria de agradecer à OpenNew pelo excelente trabalho com as soluções de call center. O sistema é fácil de usar, melhora nossa...",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ]
  },
  faq: {
    heading: "Dúvidas Comuns sobre a Parceria Whitelabel",
    items: [
      {
        question: "A plataforma é realmente 100% personalizada com a minha marca?",
        answer: "Sim. Logo, cores, domínio e configuração visual ficam 100% com sua marca."
      },
      {
        question: "Qual tipo de suporte técnico a OpenNew oferece aos parceiros whitelabel?",
        answer: "Suporte especializado, inclusive para onboarding, painel e operação da plataforma."
      },
      {
        question: "Preciso ter conhecimento técnico avançado para operar a plataforma?",
        answer: "Não. Nossa equipe guia todo o processo e oferece treinamento completo."
      },
      {
        question: "Em quanto tempo consigo lançar minha plataforma whitelabel?",
        answer: "Em poucos dias, dependendo da personalização necessária."
      },
      {
        question: "É possível integrar a plataforma com outros sistemas que eu utilizo?",
        answer: "Sim, através de integrações e APIs disponibilizadas."
      }
    ]
  },
  cta_final: {
    heading: "Sua Próxima Grande Oportunidade Começa Aqui",
    text: "Não perca tempo com desenvolvimento ou estrutura complexa. Foque nas vendas, enquanto nós cuidamos da tecnologia. Transforme sua marca com a plataforma whitelabel mais completa do mercado.",
    image: "/v2/ultima sessao.webp",
    avatars: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg"
    ]
  },
  footer: {
    copyright: "© 2025 OpenNew. Todos os direitos reservados.",
    email: "yuri.moreira@opennew.com.br",
    services: [
      "PABX IP em nuvem ou local",
      "Chat em Nuvem WhatsApp Oficial",
      "Open VPN",
      "Integrações"
    ]
  }
};