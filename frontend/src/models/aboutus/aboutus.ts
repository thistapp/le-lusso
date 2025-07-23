export class GalleryInterface {
    title: string
    desc: string
    constructor(data: any) {
        this.title = data?.title || ''
        this.desc = data?.desc || ''
    }
}

export class ListGalleryInterface {
    title: string
    constructor(data: any) {
        this.title = data?.title || ''
    }
}
