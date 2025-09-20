import PortComponents from '@/app/[locale]/portfolio/components/portComponents'
import data from '@/config/portfolio'
import { Suspense } from 'react'

export default function page() {
    return (
        <Suspense fallback={<div />}>
            <PortComponents data={data} />
        </Suspense>
    )
}
