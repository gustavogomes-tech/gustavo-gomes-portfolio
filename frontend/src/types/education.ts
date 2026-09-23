export type EducationType = 'Graduação' | 'Curso'

export interface Education {
    id: number
    title: string
    institution: string
    period: string
    type: EducationType
    status?: string
    description?: string
    technologies?: string[]
    certificate?: string
}