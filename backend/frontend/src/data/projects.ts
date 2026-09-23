import type { Project } from '../types/project'

export const projects: Project[] = [
    {
        id: 1,
        title: 'Saint-Gobain Eshop',
        subtitle: 'Plataforma B2B Multi-brand',
        type: 'Profissional',
        description:
            'Desenvolvimento e evolução de uma plataforma B2B construída com Adobe Commerce, atendendo diferentes marcas e jornadas comerciais dentro do mesmo ecossistema.',
        highlights: [
            'Carrinho e checkout com regras B2B',
            'Integrações com SAP',
            'Simulação de preços e impostos',
            'Regras de logística e disponibilidade',
            'Catálogos e regras por marca',
            'Consulta de pedidos e financeiro',
            'Recomendações com Adobe Sensei',
            'APIs e integrações entre sistemas',
        ],
        technologies: [
            'Adobe Commerce',
            'Magento 2',
            'PHP',
            'JavaScript',
            'Knockout.js',
            'REST API',
            'MySQL',
            'RabbitMQ',
            'Docker'
        ],
        private: true,
    },

    {
        id: 2,
        title: 'CONAB Bombas',
        subtitle: 'E-commerce Magento 2',
        type: 'Profissional',
        description:
            'Atuação no desenvolvimento frontend do e-commerce da CONAB Bombas em Magento 2, participando da construção e evolução da experiência de compra e de funcionalidades personalizadas da loja.',
        highlights: [
            'Desenvolvimento frontend em Magento 2',
            'Construção e customização de interfaces',
            'Implementação de layouts responsivos',
            'Participação na evolução da experiência de compra',
            'Participação na implementação do módulo "Quero fazer meu orçamento"',
            'Fluxo de solicitação de orçamento para produtos sem estoque',
        ],
        technologies: [
            'Magento 2',
            'JavaScript',
            'HTML',
            'LESS',
            'CSS',
            'PHP',
            'Docker'
        ],
        demo: 'https://www.conabbombas.com.br/',
        private: true,
    },

    {
        id: 3,
        title: 'Grand Cru',
        subtitle: 'Sustentação de e-commerce Magento 2',
        type: 'Profissional',
        description:
            'Participação na sustentação e evolução do e-commerce da Grand Cru durante minha atuação na FCamara, trabalhando na manutenção do frontend, correções de interface e implementação de melhorias na experiência da loja.',
        highlights: [
            'Sustentação de e-commerce Magento 2',
            'Manutenção e evolução do frontend',
            'Correções de interface',
            'Ajustes de responsividade',
            'Implementação de melhorias',
            'Atuação em ambiente de produção',
        ],
        technologies: [
            'Magento 2',
            'JavaScript',
            'HTML',
            'LESS',
            'CSS',
            'PHP',
            'Docker'
        ],
        demo: 'https://www.grandcru.com.br/',
        private: true,
    },

    {
        id: 4,
        title: 'Chandon',
        subtitle: 'Tema customizado Magento 2',
        type: 'Profissional',
        description:
            'Desenvolvimento do tema da loja Chandon durante minha atuação na FCamara, trabalhando na implementação do frontend e na construção das principais páginas e jornadas da loja em Magento 2.',
        highlights: [
            'Criação do tema Magento 2',
            'Implementação do layout da loja',
            'Desenvolvimento das páginas de produto e categoria',
            'Customização das páginas de login e cadastro',
            'Desenvolvimento e customização do checkout',
            'Implementação de componentes responsivos',
            'Adequação visual aos padrões da marca',
            'Ajustes e evolução da experiência de compra',
        ],
        technologies: [
            'Magento 2',
            'JavaScript',
            'HTML',
            'LESS',
            'CSS',
            'Knockout.js',
            'PHP',
            'Docker'
        ],
        private: true,
    },

    {
        id: 5,
        title: 'Dasa Genômica',
        subtitle: 'Implementação de e-commerce Magento 2',
        type: 'Profissional',
        description:
            'Participação na implementação do projeto Dasa Genômica durante minha atuação na FCamara, com foco no desenvolvimento e construção do frontend a partir do layout definido para a nova experiência em Magento 2.',
        highlights: [
            'Participação na implementação do projeto',
            'Desenvolvimento frontend em Magento 2',
            'Construção de interfaces a partir do layout',
            'Customização de componentes do tema',
            'Ajustes responsivos',
            'Evolução da experiência visual da plataforma',
        ],
        technologies: [
            'Magento 2',
            'JavaScript',
            'HTML',
            'LESS',
            'CSS',
            'PHP',
            'Docker'
        ],
        demo: 'https://www.dasagenomica.com/',
        private: true,
    },

    {
        id: 6,
        title: 'Wellife & Belt Nutrition',
        subtitle: 'Sustentação de e-commerces Magento 2',
        type: 'Profissional',
        description:
            'Atuação na sustentação e evolução dos e-commerces Wellife e Belt Nutrition, trabalhando principalmente no frontend Magento 2 com manutenção de interfaces, correções, ajustes de layout e implementação de melhorias contínuas.',
        highlights: [
            'Sustentação de múltiplas lojas Magento 2',
            'Manutenção e evolução do frontend',
            'Correções de layout e interface',
            'Ajustes de responsividade',
            'Manutenção de componentes do tema',
            'Implementação de melhorias visuais',
            'Correção de problemas em ambiente de produção',
        ],
        technologies: [
            'Magento 2',
            'JavaScript',
            'HTML',
            'LESS',
            'CSS',
            'PHP',
            'Docker'
        ],
        links: [
            {
                label: 'Wellife',
                url: 'https://www.wellife.com.br/',
            },
            {
                label: 'Belt Nutrition',
                url: 'https://www.beltnutrition.com.br/',
            },
        ],
        private: true,
    },

    {
        id: 7,
        title: 'Nestlé Com Você',
        subtitle: 'E-commerce Magento 2',
        type: 'Profissional',
        description:
            'Participação pontual no projeto Nestlé Com Você, atuando em tarefas de backend e manutenção de funcionalidades dentro da plataforma Magento 2.',
        highlights: [
            'Atuação em tarefas de backend',
            'Manutenção e ajustes em funcionalidades existentes',
            'Correções em ambiente Magento 2',
            'Suporte à evolução da plataforma',
        ],
        technologies: [
            'Magento 2',
            'PHP',
            'MySQL',
        ],
        demo: 'https://www.nestlecomvoce.com.br/',
        private: true,
    },

    {
        id: 8,
        title: 'Roca Brasil Store',
        subtitle: 'Sustentação Magento 2 Multi-store',
        type: 'Profissional',
        description:
            'Atuação na sustentação e evolução de um projeto Magento 2 multi-store, trabalhando de forma abrangente entre frontend, backend e operação do ambiente. Participação em correções, melhorias, manutenção de funcionalidades e deploys realizados diretamente via SSH.',
        highlights: [
            'Sustentação de projeto Magento 2 multi-store',
            'Atuação em frontend e backend',
            'Correções e melhorias em funcionalidades existentes',
            'Manutenção de temas e componentes',
            'Ajustes em regras e comportamentos da plataforma',
            'Deploy e manutenção de ambiente via SSH',
            'Análise e resolução de problemas em produção',
            'Atuação em diferentes frentes do projeto',
        ],
        technologies: [
            'Magento 2',
            'PHP',
            'JavaScript',
            'HTML',
            'LESS',
            'CSS',
            'MySQL',
            'SSH',
            'Linux',
        ],
        demo: 'https://www.rocabrasilstore.com.br/',
        private: true,
    },

    {
        id: 9,
        title: 'Drogasil',
        subtitle: 'Squad de Busca — Magento 2',
        type: 'Profissional',
        description:
            'Participação na squad responsável pela experiência de busca do e-commerce da Drogasil durante minha atuação na RD, trabalhando em melhorias, correções e evolução de funcionalidades relacionadas à jornada de pesquisa de produtos na plataforma Magento 2.',
        highlights: [
            'Atuação em squad especializada de busca',
            'Manutenção e evolução da experiência de pesquisa',
            'Correções e melhorias em funcionalidades existentes',
            'Ajustes de interface relacionados à busca',
            'Atuação em e-commerce de grande escala',
            'Trabalho integrado com time multidisciplinar',
        ],
        technologies: [
            'Magento 2',
            'PHP',
            'JavaScript',
            'HTML',
            'CSS',
            'MySQL',
            'React',
            'GraphQL'
        ],
        demo: 'https://www.drogasil.com.br/',
        private: true,
    },

    {
        id: 10,
        title: 'Mini Mercado API',
        subtitle: 'API REST para gestão comercial',
        type: 'Pessoal',
        status: 'Em desenvolvimento',
        description:
            'Projeto desenvolvido para aprofundar conhecimentos em desenvolvimento backend com Node.js, trabalhando com produtos, estoque e evolução para fluxos de pedidos e vendas.',
        highlights: [
            'Cadastro e listagem de produtos',
            'Persistência com PostgreSQL',
            'ORM utilizando Prisma',
            'Validação de dados',
            'API REST',
            'Ambiente com Docker',
        ],
        technologies: [
            'Node.js',
            'Express',
            'TypeScript',
            'PostgreSQL',
            'Prisma',
            'Zod',
            'Docker',
        ],
    },



    {
        id: 11,
        title: 'Portfolio',
        subtitle: 'Portfolio pessoal Full Stack',
        type: 'Pessoal',
        status: 'Em desenvolvimento',
        description:
            'Portfolio desenvolvido do zero para apresentar minha experiência profissional, projetos e evolução como desenvolvedor, utilizando uma arquitetura organizada e tecnologias modernas do ecossistema JavaScript.',
        highlights: [
            'Interface responsiva',
            'Componentização com React',
            'CSS Modules',
            'TypeScript',
            'Arquitetura baseada em componentes',
            'Backend Node.js planejado',
        ],
        technologies: [
            'React',
            'TypeScript',
            'Vite',
            'CSS Modules',
            'Node.js',
        ],
    },
]