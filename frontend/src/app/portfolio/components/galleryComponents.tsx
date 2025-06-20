import { PortContext } from '../Utils/portfolioContext'
import { useContext } from 'react'
import Image from 'next/image'
import Masonry from 'react-responsive-masonry'

const GalleryComponent = ({ data }: any) => {
    const context = useContext(PortContext)
    if (!context) {
        throw new Error('PortContext must be used within a PortProvider')
    }
    const { isCate, setIsOpen, setIsGalleryIMG } = context

    const filterData = (value: any) => {
        if (!isCate) {
            return true
        }
        return value.cate === isCate
    }

    const openModal = (obj: any) => {
        setIsGalleryIMG(obj)
        setIsOpen(true)
    }

    return (
        <Masonry columnsCount={3} gutter="10px" className="px-6">
            {data.portData
                .filter((cate: any) => filterData(cate))
                .map((o: any, i: number) => (
                    <div
                        className="relative grid-item cursor-pointer"
                        onClick={() => openModal(o.gallery)}
                        key={i}
                    >
                        <div className="item-card absolute w-full h-full z-10 content-center text-center">
                            <h3 className="text-xl">{o.title}</h3>
                            <p className="text-lg truncate w-5/6 mx-auto">
                                {o.desc}
                            </p>
                        </div>
                        <Image
                            src={o.gallery[0].image}
                            alt="thumbnails"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                ))}
        </Masonry>
    )
}

export default GalleryComponent
