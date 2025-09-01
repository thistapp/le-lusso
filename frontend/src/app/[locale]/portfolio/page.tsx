import PortComponents from '@/app/[locale]/portfolio/components/portComponents'
import data from '@/config/portfolio'

export default function page() {
    return <PortComponents data={data} />
}
