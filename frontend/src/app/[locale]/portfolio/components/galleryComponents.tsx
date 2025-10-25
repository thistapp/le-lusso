'use client'

import CardGalleryComponents from './cardGalleryComponents'
import { GalleryInterface } from '@/models/gallery/gallery'
import { usePathname } from 'next/navigation'

const GalleryComponent = ({
    data,
    isCate,
}: {
    data: GalleryInterface[]
    isCate: string
}) => {
    const pathname = usePathname()
    console.log(pathname.match('construction'))
    const filterData = (value: any) => {
        console.log(value.partcon)
        console.log(value.partcon !== '' && value.partcon !== undefined)
        if (pathname.match('construction')) {
            // if (!isCate) {
            //     return true
            // }
        } else {
            if (!isCate) {
                return true
            }
            return value.some((cate: any) => cate === isCate)
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data
                .filter((cate: any) => filterData(cate))
                .map((o: any, i: number) => (
                    <div className="group cursor-auto px-4" key={i}>
                        <CardGalleryComponents data={o} />
                    </div>
                ))}
        </div>
    )
}

export default GalleryComponent
