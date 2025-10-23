export class descType {
    th: string
    en: string
    constructor(data: any) {
        this.th = data?.th || ''
        this.en = data?.en || ''
    }
}

export class projectType {
    id: string
    title: string
    titleDesc: string
    desc1: descType
    desc2: descType
    cate?: string[]
    gallery: string[]
    constructor(data: any) {
        this.title = data?.title || ''
        this.titleDesc = data?.titleDesc || ''
        this.desc1 = data?.desc1 || ''
        this.desc2 = data?.desc2 || ''
        this.cate = data?.cate || []
        this.gallery = data?.gallery || []
        this.id = data?.id || ''
    }
}

export class dataCate {
    label: string
    value: string
    constructor(data: any) {
        this.label = data?.label || ''
        this.value = data?.value || ''
    }
}
