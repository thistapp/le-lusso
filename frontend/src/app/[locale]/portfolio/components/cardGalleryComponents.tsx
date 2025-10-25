import { useClientLocale } from '@/hooks/getLocale'
import { GalleryInterface } from '@/models/gallery/gallery'
import Image from 'next/image'
import Link from 'next/link'

const CardGalleryComponents = ({ data }: { data: GalleryInterface }) => {
    return (
        <Link
            href={data.url}
            className="relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-[1.02] h-full"
        >
            <div className="item-card absolute w-full h-full z-10 content-center text-center">
                <h3 className="text-lg">{data.title}</h3>
                {/* <p className="text-lg truncate w-5/6 mx-auto">
                    {locale === 'th' ? data.desc.th : data.desc.en}
                </p> */}
            </div>
            <Image
                src={data.gallery[0]}
                alt="thumbnails"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                loading="lazy"
            />
        </Link>
    )
}

export default CardGalleryComponents
