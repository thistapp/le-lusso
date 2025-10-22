import { GalleryInterface } from '@/models/gallery/gallery'
import { dataCate } from '@/models/portfolio'

const portCategory: dataCate[] = [
    { label: 'all', value: '' },
    {
        label: 'condo',
        value: 'condominium',
    },
    {
        label: 'house',
        value: 'house',
    },
    {
        label: 'commercial building',
        value: 'commercial-building',
    },
    {
        label: 'townhouse',
        value: 'townhouse',
    },
    {
        label: 'office',
        value: 'office',
    },
    // { label: 'all', value: '' },
    // {
    //     label: 'bath room',
    //     value: 'bath-room',
    // },
    // {
    //     label: 'bed room',
    //     value: 'bed-room',
    // },
    // {
    //     label: 'kitchen room',
    //     value: 'kitchen-room',
    // },
    // {
    //     label: 'living room',
    //     value: 'living-room',
    // },
    // {
    //     label: 'space room',
    //     value: 'space-room',
    // },
]

const portData: GalleryInterface[] = [
    {
        title: 'Condominium Project',
        desc: `Condo K’nut brings the timeless elegance of Mid-Century Modern design into contemporary living. Clean silhouettes, rich wood textures, and thoughtfully curated details come together to create a sophisticated yet inviting atmosphere.`,
        cate: ['condominium'],
        gallery: [
            {
                id: 0,
                image: '/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_4.jpg',
            },
        ],
        url: 'project/condominium-project',
    },
]

const exportedObject = {
    portData,
    portCategory,
}

export default exportedObject
