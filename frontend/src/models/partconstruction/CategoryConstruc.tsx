export interface CategoryConstructionType {
    title: string
    value: string
    width?: string
}

export interface ConstructionData {
    title: string
    value: string
    price: string
    desc: string
}

export interface ConstructionGalleryType {
    image: string
    url: string
    category: string[]
}
