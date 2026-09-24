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
    },
    education: {
      title: 'Formação',
      items: [{school: 'ATEC Matosinhos', yearStart: '2024', yearEnd: '2026', name:'CET em Tecnologias e Programação de Sistemas Informáticos'},
         {school: 'Faculdade de Letras da Universidade de Coimbra', yearStart: '2018', yearEnd: '2022', name: 'Licenciatura em Línguas Modernas com Menor em Estudos Artísticos'},
         {school: 'Escola Secundária Homem Cristo', yearStart: '2014', yearEnd: '2017', name:'Curso Científico em Ciências e Tecnologias'}]
    },
    experience: {
      title: 'Experiência Profissional',
      items: [{role: 'Programador de Software', yearStart: '2026', yearEnd: 'Atual', company: 'Softi9 - Inovação Informática',
        descriptions: ['Desenvolvimento full-stack de aplicação em C# .NET WPF.', 'Apoio na gestão de equipa e das respetivas tarefas.', 'Levantamento de requisitos de produto.', 'Coordenação de trabalhos multidisciplinares.', 'Elaboração e revisão de documentação técnica e não técnica do produto.', 'Participação em reuniões comerciais e de planeamento de produto.']
       },
      {role:'Gestor de Conteúdos', yearStart:'2024', yearEnd:'2026', company:'Softi9 - Inovação Informática',
        descriptions: ['Gestão e produção de conteúdos de marketing e comerciais.', 'Desenvolvimento contínuo do perfil e normas de comunicação da marca.', 'Conceitualização, criação e manutenção de página web institucional e dos seus conteúdos.', 'Definição e controlo de metas e prazos para projetos de dimensões diversas.', 'Elaboração de catálogos, documentos e recursos comerciais.', 'Elaboração de conteúdos para site e redes sociais institucionais.']
       }]
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
    },
    education: {
      title: 'Education',
      items: [{school: 'ATEC Matosinhos', yearStart: '2024', yearEnd: '2026', name:'CET - Technologies and Informatic Systems Programming'},
         {school: 'Faculdade de Letras da Universidade de Coimbra', yearStart: '2018', yearEnd: '2022', name: "Bachelor's Degree in Modern Languages with a Minor in Art Studies"},
         {school: 'Escola Secundária Homem Cristo', yearStart: '2014', yearEnd: '2017', name:'Scientific Course in Sciences and Technologies'}]
    },
    experience: {
      title: 'Professional Experience',
      items: [{role: 'Software Developer', yearStart: '2026', yearEnd: 'Atual', company: 'Softi9 - Inovação Informática',
        descriptions: ['Desenvolvimento full-stack de aplicação em C# .NET WPF.', 'Apoio na gestão de equipa e das respetivas tarefas.', 'Levantamento de requisitos de produto.', 'Coordenação de trabalhos multidisciplinares.', 'Elaboração e revisão de documentação técnica e não técnica do produto.', 'Participação em reuniões comerciais e de planeamento de produto.']
       },
      {role:'Content Manager', yearStart:'2024', yearEnd:'2026', company:'Softi9 - Inovação Informática',
        descriptions: ['Gestão e produção de conteúdos de marketing e comerciais.', 'Desenvolvimento contínuo do perfil e normas de comunicação da marca.', 'Conceitualização, criação e manutenção de página web institucional e dos seus conteúdos.', 'Definição e controlo de metas e prazos para projetos de dimensões diversas.', 'Elaboração de catálogos, documentos e recursos comerciais.', 'Elaboração de conteúdos para site e redes sociais institucionais.']
       }]
    }
  }
} as const;