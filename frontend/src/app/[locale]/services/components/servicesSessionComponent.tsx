import CardComponent from '@/components/elements/card'
import { ServiceCardType } from '@/models/services/servicestype'
import { useTranslations } from 'next-intl'
import { Fade } from 'react-awesome-reveal'
import Slider from 'react-slick'

interface Props {
    data: ServiceCardType[]
}

const ServicesSession: React.FC<Props> = ({ ...props }) => {
    const t = useTranslations('services')

    const settingSlide = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0px',
        className: '',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    className: 'center',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '75px',
                    className: 'center',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                    className: 'center',
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    className: 'center',
                },
            },
        ],
    }
    return (
        <Fade
            className="w-full my-6 lg:my-12 slide-services-container"
            direction="up"
            triggerOnce
        >
            <h1 className="text-2xl lg:text-5xl font-bold text-center uppercase underline  mb-4">
                {t('title')}
            </h1>
            <Slider {...settingSlide}>
                {props.data.map((o, i) => (
                    <CardComponent
                        key={i}
                        image={o.image}
                        title={t(o.title)}
                        desc={t(o.desc)}
                        actionButton={true}
                    />
                ))}
            </Slider>
        </Fade>
    )
}

export default ServicesSession
