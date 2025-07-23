export class gallerylistData {
    id: number
    image: string
    constructor(data: any) {
        this.id = data?.id || null
        this.image = data?.image || ''
    }
}

export class GalleryInterface {
    title: string
    desc: string
    cate: string[]
    gallery: gallerylistData[]
    url: string
    constructor(data: any) {
        this.title = data?.title || ''
        this.desc = data?.desc || ''
        this.cate = data?.cate || []
        this.gallery = data?.gallery || []
        this.url = data?.url || ''
    }
}
