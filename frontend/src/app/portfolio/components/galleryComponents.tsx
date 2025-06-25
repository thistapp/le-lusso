import { PortContext } from '../Utils/portfolioContext'
import { useContext } from 'react'
import Masonry from 'react-responsive-masonry'
import CardGalleryComponents from './cardGalleryComponents'

const GalleryComponent = ({ data }: any) => {
    const context = useContext(PortContext)
    if (!context) {
        throw new Error('PortContext must be used within a PortProvider')
    }
    const { isCate } = context

    const filterData = (value: any) => {
        if (!isCate) {
            return true
        }
        return value.some((cate: any) => cate === isCate)
    }

    return (
        <Masonry columnsCount={3} gutter="10px" className="px-6">
            {data.portData
                .filter((cate: any) => filterData(cate.cate))
                .map((o: any, i: number) => (
                    <div className="relative grid-item cursor-pointer" key={i}>
                        <CardGalleryComponents data={o} />
                    </div>
                ))}
        </Masonry>
    )
}

export default GalleryComponent
