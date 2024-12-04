interface galleryData {
    id: number,
    image: string
}

interface dataType {
    title: string,
    desc: string,
    cate: string,
    gallery: galleryData[]
}

interface dataCate {
    label: string,
    value: string
}