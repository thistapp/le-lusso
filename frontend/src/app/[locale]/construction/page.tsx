import { Suspense } from 'react'
import PartConstructionComponent from './components/PartConstructionComponents'

export default function page() {
    return (
        <Suspense fallback={<div />}>
            <PartConstructionComponent />
        </Suspense>
    )
}
