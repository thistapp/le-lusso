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

    const filterData = (value: any) => {
        if (pathname.match('construction')) {
            if (value.partcon !== undefined) {
                return value.partcon.some((cate: any) => cate === isCate)
            }
        } else {
            if (!isCate) {
                return true
            }
            return value.cate.some((cate: any) => cate === isCate)
        }
    }

    return (
        <div className="masonry gap-4 p-3">
            {data
                .filter((cate: any) => filterData(cate))
                .map((o: any, i: number) => (
                    <div className="group cursor-auto pb-3" key={i}>
                        <CardGalleryComponents data={o} />
                    </div>
                ))}
        </div>
    )
}

export default GalleryComponent
