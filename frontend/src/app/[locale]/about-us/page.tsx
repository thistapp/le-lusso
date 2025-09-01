import AboutusComponent from './components/AboutusComponents'
import { AboutUsCollaps, ListType } from '@/config/aboutus'

const page = () => {
    return <AboutusComponent data={AboutUsCollaps} listData={ListType} />
}

export default page
