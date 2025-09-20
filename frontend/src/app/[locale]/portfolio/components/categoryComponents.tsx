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
        <div className="p-3 flex flex-wrap justify-center gap-2">
            {data?.portCategory.map((o: any, i: number) => (
                <div className="flex flex-wrap" key={i}>
                    {i != 0 && <span className="mx-5 my-auto">|</span>}
                    <button
                        className="text-xl font-bold"
                        onClick={() => onSelect(o.value)}
                    >
                        <p
                            className={`port-cate capitalize ${
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
