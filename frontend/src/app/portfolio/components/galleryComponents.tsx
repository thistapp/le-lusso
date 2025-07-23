import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
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
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry columnsCount={3} gutter="10px" className="px-6">
                {data
                    .filter((cate: any) => filterData(cate.cate))
                    .map((o: any, i: number) => (
                        <div
                            className="relative grid-item cursor-pointer"
                            key={i}
                        >
                            <CardGalleryComponents data={o} />
                        </div>
                    ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default GalleryComponent
