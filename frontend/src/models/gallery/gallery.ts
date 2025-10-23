export class descType {
    th: string
    en: string
    constructor(data: any) {
        this.th = data?.th || ''
        this.en = data?.en || ''
    }
}

export class GalleryInterface {
    title: string
    desc: descType
    cate?: string[]
    partcon?: string[]
    gallery: string[]
    url: string
    constructor(data: any) {
        this.title = data?.title || ''
        this.desc = data?.desc || ''
        this.cate = data?.cate || []
        this.partcon = data?.partcon || []
        this.gallery = data?.gallery || []
        this.url = data?.url || ''
    }
}
