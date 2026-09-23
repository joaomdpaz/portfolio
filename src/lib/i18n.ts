export type Lang = 'pt' | 'en';
export const translations = {
  pt: {
    nav: {
      formacao: 'Formação',
      experiencia: 'Experiência Profissional',
      competencias: 'Competências',
      portfolio: 'Portfólio',
      sobre: 'Sobre o João',
    },
    hero: { 
        name: 'João Paz',
        roles: ['Programador Full-stack', 'Analista de sistemas', 'Gestor de Conteúdos'],
        photoAlt: 'Foto de João Paz',
        desc: 'Programador de software, com experiência e formação nas áreas de Línguas e Programação, focado em encontrar soluções criativas e práticas para problemas diversificados.'
    }
  },
  en: {
    nav: {
      formacao: 'Education',
      experiencia: 'Professional Experience',
      competencias: 'Skills',
      portfolio: 'Portfolio',
      sobre: 'About João',
    },
    hero: { 
        name: 'João Paz',
        roles: ['Full-stack developer', 'Business Analyst', 'Content Manager'],
        photoAlt: "João Paz's photo",
        desc: 'Software developer, with a background in both Languages and Programming, focused in finding creative yet pratical solutions for diverse problems.'
    }
  }
} as const;