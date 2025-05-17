import CardComponent from '@/components/elements/card'
import { ServiceCardType } from '@/models/services/servicestype'
import Slider from 'react-slick'

interface Props {
    data: ServiceCardType[]
}

const ServicesSesstion: React.FC<Props> = ({ ...props }) => {
    const settingSlide = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <div className="w-full my-12 slide-services-container">
            <Slider {...settingSlide}>
                {props.data.map((o, i) => (
                    <CardComponent
                        key={i}
                        image={o.image}
                        title={o.title}
                        desc={o.desc}
                        actionButton={true}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default ServicesSesstion
