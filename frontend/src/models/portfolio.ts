export interface galleryData {
    id: number,
    image: string
}

export interface dataType {
    title: string,
    desc: string,
    cate: string,
    gallery: galleryData[]
}

export interface dataCate {
    label: string,
    value: string
}