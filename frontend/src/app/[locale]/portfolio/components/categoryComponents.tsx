import { useContext } from 'react'
import { PortContext } from '../Utils/portfolioContext'

const CategoryComponents = ({ data }: any) => {
    const context = useContext(PortContext)
    if (!context) {
        throw new Error('PortContext must be used within a PortProvider')
    }
    const { isCate, setIsCate } = context
    const onSelect = (value: string) => {
        setIsCate(isCate === value ? '' : value)
    }

    return (
        <div className="w-full p-3 flex lg:flex-wrap lg:justify-center md:overflow-x-hidden justify-start overflow-x-scroll gap-3">
            {data?.portCategory.map((o: any, i: number) => (
                <div className="flex flex-wrap" key={i}>
                    <button
                        className="text-xl font-bold"
                        onClick={() => onSelect(o.value)}
                    >
                        <p
                            className={`port-cate capitalize whitespace-nowrap ${
                                isCate === o.value ? 'active' : ''
                            }`}
                        >
                            {o.label}
                        </p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CategoryComponents
