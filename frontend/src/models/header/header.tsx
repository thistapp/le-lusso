export enum HeaderType {
    DEFAULT = 'default',
    SCROLLED = 'scrolled',
}

export class SubMenuItem {
    path: string
    title: string
    constructor(data: any) {
        this.path = data.path || ''
        this.title = data.title || ''
    }
}

export class MenuItem {
    path: string
    title: string
    submenu: SubMenuItem[]
    constructor(data: any) {
        this.path = data.path || ''
        this.title = data.title || ''
        this.submenu = data.submenu || []
    }
}
