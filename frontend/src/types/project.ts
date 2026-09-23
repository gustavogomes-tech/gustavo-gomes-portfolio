export type ProjectType = 'Profissional' | 'Pessoal'

export interface ProjectLink {
    label: string
    url: string
}

export interface Project {
    id: number
    title: string
    subtitle: string
    type: ProjectType
    description: string
    highlights: string[]
    technologies: string[]

    repository?: string
    demo?: string

    links?: ProjectLink[]

    status?: string
    private?: boolean
}