'use client'

import CardGalleryComponents from './cardGalleryComponents'
import { GalleryInterface } from '@/models/gallery/gallery'

const GalleryComponent = ({
    data,
    isCate,
}: {
    data: GalleryInterface[]
    isCate: string
}) => {
    const filterData = (value: any) => {
        if (!isCate) {
            return true
        }
        return value.some((cate: any) => cate === isCate)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data
                .filter((cate: any) => filterData(cate.cate))
                .map((o: any, i: number) => (
                    <div className="group cursor-auto px-4" key={i}>
                        <CardGalleryComponents data={o} />
                    </div>
                ))}
        </div>
    )
}

export default GalleryComponent
