export type TechnologyContext =
    | 'Experiência profissional'
    | 'Projetos pessoais'
    | 'Formação'

export interface Technology {
    name: string
    context: TechnologyContext
}

export interface TechnologyGroup {
    id: number
    title: string
    description: string
    technologies: Technology[]
}